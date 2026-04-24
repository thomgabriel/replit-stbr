import { neon } from '@neondatabase/serverless';
import crypto from 'node:crypto';

const REQUIRED_FIELDS = [
  'project_name',
  'lead_name',
  'whatsapp',
  'replit_email',
  'members',
  'project_link',
  'post_link',
];

const FIELD_LIMITS = {
  project_name: 120,
  lead_name: 120,
  whatsapp: 40,
  replit_email: 200,
  members: 1000,
  project_link: 500,
  post_link: 500,
  discord: 80,
};

const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_HOURS = 1;
const MIN_SUBMIT_MS = 2000;

let _sqlClient;
function sqlClient() {
  if (_sqlClient) return _sqlClient;
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) throw new Error('DATABASE_URL_NOT_CONFIGURED');
  _sqlClient = neon(url);
  return _sqlClient;
}

function respond(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') return JSON.parse(req.body);
  return req.body;
}

function trim(value, max = Infinity) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isHttpUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function generateProtocol() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const pick = (n) => Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  return `SBR-${now.getFullYear()}${mm}-${pick(2)}-${pick(4)}`;
}

function hashIp(ip) {
  const salt = process.env.RATE_SALT || 'stbr-replit-default-salt';
  return crypto.createHash('sha256').update(ip + salt).digest('hex').slice(0, 32);
}

function getClientIp(req) {
  const xff = (req.headers['x-forwarded-for'] || '').toString();
  const first = xff.split(',')[0].trim();
  return first || req.socket?.remoteAddress || '0.0.0.0';
}

function getAllowedOrigins() {
  const envOrigins = (process.env.SITE_ORIGIN || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const defaults = [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:3000',
  ];
  return new Set([...envOrigins, ...defaults]);
}

// Honeypot / time-check / early bot detection: return 200 with a fake protocol.
// The attacker can't distinguish success from rejection; real DB stays clean.
function fakeSuccess(res) {
  return respond(res, 200, {
    ok: true,
    protocol: generateProtocol(),
    already_submitted: false,
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return respond(res, 405, { ok: false, error: 'Método não permitido' });
  }

  // --- Origin check (reject missing OR not in allowlist) ---
  const allowed = getAllowedOrigins();
  const origin = req.headers.origin;
  if (!origin || !allowed.has(origin)) {
    return respond(res, 403, { ok: false, error: 'Origem inválida' });
  }

  // --- DB config check ---
  try {
    sqlClient();
  } catch (err) {
    console.error('[api/submit] db config error:', err.message);
    return respond(res, 500, { ok: false, error: 'Backend não configurado' });
  }

  // --- Parse body ---
  let body;
  try {
    body = parseBody(req);
  } catch {
    return respond(res, 400, { ok: false, error: 'JSON inválido' });
  }

  // --- Honeypot check (fake success, don't reveal detection) ---
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return fakeSuccess(res);
  }

  // --- Time-to-submit check (<2s = bot) ---
  const mountTs = Number(body.form_mount_ts);
  if (!Number.isFinite(mountTs) || Date.now() - mountTs < MIN_SUBMIT_MS) {
    return fakeSuccess(res);
  }

  // --- Required fields ---
  for (const field of REQUIRED_FIELDS) {
    if (!trim(body[field])) {
      return respond(res, 400, { ok: false, error: `Campo obrigatório: ${field}` });
    }
  }

  // --- Typed validation ---
  const replitEmail = trim(body.replit_email, FIELD_LIMITS.replit_email).toLowerCase();
  if (!isEmail(replitEmail)) {
    return respond(res, 400, { ok: false, error: 'E-mail inválido' });
  }

  const projectLink = trim(body.project_link, FIELD_LIMITS.project_link);
  const postLink = trim(body.post_link, FIELD_LIMITS.post_link);
  if (!isHttpUrl(projectLink)) {
    return respond(res, 400, { ok: false, error: 'Link do projeto inválido' });
  }
  if (!isHttpUrl(postLink)) {
    return respond(res, 400, { ok: false, error: 'Link do post inválido' });
  }

  if (body.cupom_confirmed !== true) {
    return respond(res, 400, { ok: false, error: 'Confirme a ativação do cupom SUPERTEAM20' });
  }
  if (body.lgpd_consent !== true) {
    return respond(res, 400, { ok: false, error: 'Consentimento LGPD obrigatório' });
  }

  // --- Rate limit (1 row per IP-hash, upsert with sliding reset) ---
  const ip = getClientIp(req);
  const ipHash = hashIp(ip);
  try {
    const sql = sqlClient();
    const [rateRow] = await sql`
      insert into public.rate_limits (ip_hash, window_start, attempts)
      values (${ipHash}, now(), 1)
      on conflict (ip_hash) do update set
        window_start = case
          when public.rate_limits.window_start < now() - (${RATE_LIMIT_WINDOW_HOURS} || ' hour')::interval
          then now()
          else public.rate_limits.window_start
        end,
        attempts = case
          when public.rate_limits.window_start < now() - (${RATE_LIMIT_WINDOW_HOURS} || ' hour')::interval
          then 1
          else public.rate_limits.attempts + 1
        end
      returning attempts
    `;
    if (rateRow && rateRow.attempts > RATE_LIMIT_MAX) {
      return respond(res, 429, {
        ok: false,
        error: 'Muitas tentativas. Aguarde uma hora e tente novamente.',
      });
    }
  } catch (err) {
    // If rate-limit check fails, log but don't block the user.
    console.error('[api/submit] rate-limit error:', err);
  }

  // --- Build payload ---
  const payload = {
    protocol: generateProtocol(),
    project_name: trim(body.project_name, FIELD_LIMITS.project_name),
    lead_name: trim(body.lead_name, FIELD_LIMITS.lead_name),
    whatsapp: trim(body.whatsapp, FIELD_LIMITS.whatsapp),
    replit_email: replitEmail,
    members: trim(body.members, FIELD_LIMITS.members),
    project_link: projectLink,
    post_link: postLink,
    discord: trim(body.discord, FIELD_LIMITS.discord) || null,
    cupom_confirmed: true,
    lgpd_consent: true,
    ip_address: ip || null,
    user_agent: (req.headers['user-agent'] || '').toString().slice(0, 400) || null,
  };

  // --- Insert (or return existing protocol if email already taken) ---
  try {
    const sql = sqlClient();

    const inserted = await sql`
      insert into public.replit_submissions (
        protocol, project_name, lead_name, whatsapp,
        replit_email, members, project_link, post_link,
        discord, cupom_confirmed, lgpd_consent, ip_address, user_agent
      ) values (
        ${payload.protocol}, ${payload.project_name},
        ${payload.lead_name}, ${payload.whatsapp}, ${payload.replit_email},
        ${payload.members}, ${payload.project_link}, ${payload.post_link},
        ${payload.discord}, ${payload.cupom_confirmed}, ${payload.lgpd_consent},
        ${payload.ip_address}, ${payload.user_agent}
      )
      on conflict (replit_email) do nothing
      returning protocol
    `;

    if (inserted.length > 0) {
      return respond(res, 200, {
        ok: true,
        protocol: inserted[0].protocol,
        already_submitted: false,
      });
    }

    const existing = await sql`
      select protocol from public.replit_submissions
      where replit_email = ${payload.replit_email}
      limit 1
    `;

    if (existing.length > 0) {
      return respond(res, 200, {
        ok: true,
        protocol: existing[0].protocol,
        already_submitted: true,
      });
    }

    return respond(res, 500, { ok: false, error: 'Erro inesperado ao salvar' });
  } catch (err) {
    console.error('[api/submit] db error:', err);
    return respond(res, 500, { ok: false, error: 'Erro ao salvar submissão' });
  }
}
