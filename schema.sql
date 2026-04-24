-- Rode isto uma vez no console do Neon para criar as tabelas.

create extension if not exists pgcrypto;

-- =============================================================
-- Submissões (tabela principal)
-- =============================================================
create table if not exists public.replit_submissions (
  id               uuid primary key default gen_random_uuid(),
  protocol         text not null unique,
  project_name     text not null,
  lead_name        text not null,
  whatsapp         text not null,
  replit_email     text not null,
  members          text not null,
  project_link     text not null,
  post_link        text not null,
  discord          text,
  cupom_confirmed  boolean not null,
  lgpd_consent     boolean not null,
  ip_address       text,
  user_agent       text,
  submitted_at     timestamptz not null default now(),
  created_at       timestamptz not null default now()
);

create unique index if not exists replit_submissions_email_idx
  on public.replit_submissions (replit_email);

create index if not exists replit_submissions_submitted_at_idx
  on public.replit_submissions (submitted_at desc);

-- =============================================================
-- Rate limiting (1 linha por IP-hash, cresce só em IPs únicos)
-- =============================================================
create table if not exists public.rate_limits (
  ip_hash      text primary key,
  window_start timestamptz not null default now(),
  attempts     int not null default 1
);

create index if not exists rate_limits_window_idx
  on public.rate_limits (window_start);
