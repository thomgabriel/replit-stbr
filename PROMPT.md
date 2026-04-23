# Replit × Superteam Brasil — Landing Page Prompt for Claude Design

> **Two readers:** (1) the Replit + STBR teams reviewing this brief, (2) Claude Design itself.
> Everything inside the `## Prompt` section below is what gets pasted into the Claude Design composer. Everything outside it is operator/team context.

---

## Setup — Before you press Send

In the Claude Design project (named `stbr-replit`):

1. **Skills attached** in the composer chip area:
   - `Hi-fi design` ✅ *(already on)*
   - `Interactive prototype` ✅ *(already on)*
   - `Design System` ✅ *(already on)*
   - **`Frontend design`** ⚠️ ***ADD THIS*** — it forces a committed aesthetic direction and prevents AI-slop defaults. We need this to land the "clear, direct, confident" aesthetic without drifting into generic templates.
2. **Drop into the file context zone** (the "DROP FILES HERE" area):
   - `superteam-brasil-brand-pack/stbr-brand-guide.pdf`
   - `superteam-brasil-brand-pack/Logo/` (all variants — let Claude Design see the lockup options)
   - `superteam-brasil-brand-pack/Elements/svg/` (the organic shape system — we want it to *use* these, not redraw them)
   - Replit logo SVG/PNG (drop in once obtained from [replit.com/site/brand](https://replit.com/site/brand))
3. **Output format** — make sure `Save as standalone HTML` is reachable from the project menu. Final deliverable is a single self-contained `.html` file.
4. **Press Send** with the prompt below pasted in the composer.

---

## Prompt

> Paste everything from here to the end of file into the Claude Design chat composer.

---

You are designing a single high-conversion landing page for a real partnership between **Superteam Brasil** (the Brazilian chapter of the Solana ecosystem's builder network) and **Replit** (AI-native build-and-ship platform).

The page announces the **Frontier Hackathon — Brazil Track**, a public online hackathon co-hosted by both partners, and drives team submissions. All copy is in **Brazilian Portuguese (pt-BR)**. The page lives at a dedicated subdomain of superteambr.com.

### Audience

- **Primary**: Brazilian developers, founders, and product designers who want to build on Solana and have heard of Replit (or use it casually). Mostly 20–35, technically literate, comfortable in English but converting much better in PT-BR. They've seen at least one hackathon LP before — generic templates won't impress them.
- **Secondary**: Brazilian web2 devs who are Solana-curious — the page is a reasonable entry point for them too, but we don't redesign around them.

### Two programs, two submission paths

This partnership runs **two distinct programs** under one umbrella. The LP must show that distinction clearly and capture submissions for each separately.

| Program | Format | Audience | Submission |
|---|---|---|---|
| **Frontier Hackathon — Brazil Track** | Online · open · ~weeks of build window | Any Brazilian team (1–4 builders) | **Team submission form** — data goes to a `hackathon_submissions` table |
| **The Garage** | IRL · 3 weeks · Solana House (São Paulo) | ~100 selected individual builders | **Individual application form** — data goes to a `garage_applications` table |

Both forms live on the same page. Both are real submissions, persisted to a database we can export. Neither is a "link out" — both are captured here.

### Primary CTA

**"Inscrever meu time"** — opens / scrolls to the **Hackathon team submission form**. This is the loudest, most prominent CTA on the page (hero, top bar, CTA finale).

### Secondary CTA

**"Inscrever no Garage"** — opens / scrolls to the **Garage individual application form**. Visually lighter than the primary CTA, but still a real, serious ask — not a footer link. Present in the hero (as a quieter secondary button next to the primary), in The Garage section, and in the Inscrição section.

### Form fields — Hackathon team submission

> [TBD — confirm with team. Starting list based on elgato + STBR's intake patterns.]

- Team name
- Lead contact full name
- Email
- WhatsApp (with country code)
- Team size (1 / 2 / 3 / 4+)
- Project category (DeFi, consumer, infra, AI agents, gaming, other)
- One-liner project idea (free text, 280 chars) *(optional)*
- Discord handle (optional)
- "Como conheceu o hackathon?" (Twitter / Discord / amigo / outro)

### Form fields — Garage submission

> Same shape as the Hackathon form. Both submissions are simple lead capture — the Garage is **not** a heavyweight "apply with essays" application. Different DB tables only because the two programs need separate audiences for follow-up communication.

- Team name (or just your name if solo)
- Lead contact full name
- Email
- WhatsApp (with country code)
- Team size (1 / 2 / 3 / 4+)
- Project category (DeFi, consumer, infra, AI agents, gaming, other)
- One-liner project idea (free text, 280 chars) *(optional)*
- Cidade atual
- Discord handle (optional)

Both forms should feel **fast and focused** — single screen each, no multi-step modal. After submit on either form → a clean confirmation panel + a soft pointer to the *other* program ("Inscreva-se também no Hackathon →" / "Inscreva-se também no Garage →"). The two programs are complementary, not exclusive — a builder can do both.

### Success looks like

- A Brazilian dev lands on the page from Twitter or Discord, scrolls once, understands in under 30 seconds: *what the hackathon is, who's behind it, what's at stake, and how to enter*.
- Both Replit and Superteam Brasil teams open the page and feel **proud to share it** — this is the artifact representing their joint brand in market.
- The page does **not** look like a Tailwind-template hackathon page (Devpost, etc.). It feels distinctive, hand-crafted, and credibly Brazilian.

---

### Aesthetic Lock — Clear, Direct, Confident

**Commit fully to this. Do not hedge toward "modern and clean." Do not soften with decoration. The single biggest failure mode is genericness.**

The page is for builders, but **it does not literally pretend to be a code editor**. No terminal prompts, no monospace gimmicks, no fake commit-history visuals, no "as a dev" metaphors. The "builder" energy comes from the **copy**, the **information density**, and the **confidence of the layout** — not from skinning the page with a console aesthetic.

What the page *should* feel like: a serious, well-edited piece of brand work for a Brazilian builder community. The kind of page where every element earns its place, nothing apologizes, and the reader gets the message in seconds.

**Concrete visual commitments:**

- **Layout grammar** — asymmetric, editorial, generous whitespace. Long horizontal rails. No center-aligned 3-column "feature card" grids. Information density is high but pacing is slow — the reader is rewarded for scrolling, not bombarded.
- **Typography — strictly STBR brand, no additions**:
  - **Display**: **Archivo Semi Expanded** — used very large, very confident, for hero and section headlines. Tight tracking on big sizes. This is the voice of the page.
  - **Body**: **Inter** — clean, technical, never italic. Used for everything else: lead paragraphs, body copy, eyebrows, labels, captions, form fields, footer.
  - **Forbidden**: any third typeface, monospace anywhere, serif anything, script anything, condensed/decorative variants. Two families. That's it.
- **Color discipline** — *only* STBR's brand palette + a single Replit accent:
  - Background base: STBR cream `#f5e8ca`
  - Surface dark: STBR near-black `#1b231d` (used as a deliberate anchor for one or two sections — e.g. the prize stack — to create dark/light contrast across the scroll)
  - Primary brand: STBR emerald `#008b4c`
  - Deep brand: STBR dark green `#306c40`
  - Accent / highlight: STBR yellow `#ffd23f` — used like a **highlighter pen** for KEY words or numbers, never as a section fill background
  - **Replit orange**: used sparingly and intentionally — only in moments where Replit is the subject (logo lockup, "Replit credits" prize column, the "Replit gives you" section). Never decorative.
- **STBR organic shapes** — the SVG element pack in the brand kit is the page's signature visual asset. **Use them as compositional anchors**, not as soft background blobs. Place them so they frame, contain, or punctuate content. Stack them. Crop them at section edges. Let them feel placed, not floating.
- **Surface treatment** — flat. No glassmorphism. No drop shadows. No glowing gradients. Borders are 1–2px, solid, in cream-on-dark or dark-on-cream. Optional: a very slight cream paper-grain on light surfaces if it adds warmth without noise.
- **Motion** — minimal and intentional. Sections fade in on scroll, organic shapes can have a subtle parallax. **No** bounce, **no** scroll-jacking, **no** typewriter effects, **no** blinking cursors, **no** parallax depth tricks.
- **Imagery** — only the STBR organic shapes + the two logos + (optional) one small Brazilian flag accent in keeping with the brand. No stock photos. No 3D illustrations. No emoji.

### Brand Hierarchy — STBR-led, com Replit

- **Top of page**: a clean lockup `Superteam Brasil × Replit` with STBR mark first, Replit logo paired at equal optical weight but sequential reading order. Eyebrow above the lockup says `// frontier hackathon · brazil track`.
- **Voice**: PT-BR throughout, written from STBR's perspective ("a gente", "vamos", "aqui no Brasil"). Replit is referred to as a partner ("com Replit", "nossa parceria com a Replit"), not the host.
- **Color split across the page**: roughly 80% STBR palette (cream + emeralds + yellow) and 20% Replit-accented moments (orange used in the Replit-credits column of the prize table and in the "O que a Replit te dá" section). Those are the only places orange appears.
- **Logo placements**: hero lockup, top nav, footer. In all three, STBR mark first.

---

### Page Narrative — section by section

> One scrollable landing page in PT-BR. Sections in this exact order. Copy below is direction, not final text — you may refine for tone and rhythm, but do not add sections, do not change the order, and do not invent partnership facts not stated here.

#### 1. Top bar

- Sticky on scroll, low height, cream background, dark borders.
- Left: STBR primary logo lockup, paired with Replit logo (small `×` between them).
- Right: anchor links — `Hackathon` · `The Garage` · `Premiação` · `FAQ` — and a primary CTA button: **`Inscrever-se →`** (links to the section anchor `#inscrever`, which lands the user at the top of the Inscrição section where the joint form is the most prominent option). One CTA in the top bar — the page's universal "go submit" trigger.

#### 2. Announcement bar (above top bar)

- Single line, dark green background, cream text.
- Copy: `Inscrições abertas · Frontier Hackathon · Brazil Track 2026`.
- No close button. Always visible.

#### 3. Hero

- Background: STBR cream. One or two large STBR organic shapes anchored at the corners (emerald + yellow), cropped at the section edge.
- **Eyebrow** (small Inter caps): `Superteam Brasil × Replit · uma parceria, dois programas`
- **Headline** (huge Archivo Semi Expanded, 2–4 lines): something like *"Construa na Solana. Compite no Brasil. Ganhe em USDC e créditos Replit."* — refine for rhythm but keep three beats: build · compete · win.
- **Lead** (Inter, narrow column under headline): One paragraph. ~50 words. Frames the partnership and both programs — o Brazil Track do hackathon global Frontier (US$10.000 em USDC + créditos Replit empilhados em cada colocação), e o Garage, três semanas presenciais no Solana House com ~100 builders selecionados pra construir junto.
- **CTA pair** (two buttons, primary loud + secondary quieter):
  - Primary: `Inscrever meu time →` (large, emerald fill, cream text) — scrolls to the Hackathon form.
  - Secondary: `Inscrever no Garage →` (medium, dark green outline, transparent fill) — scrolls to the Garage form.
- **Date strip** (below CTAs, 3 small flat cards in a row, dark borders on cream, Inter throughout): `Início · [TBD]` · `Submissões até · [TBD]` · `Resultado · [TBD]`.

#### 4. Stats band

- Thin horizontal band, dark green background, cream text, scrolling marquee feel without being literally a marquee.
- Four numbers separated by a small organic-shape glyph:
  `US$10.000 em USDC` · `+ créditos Replit em todas as colocações` · `10 times premiados` · `~100 vagas no Garage`.

#### 5. A parceria

- Two-column editorial section. Cream background.
- **Eyebrow**: `A parceria`
- **Headline** (Archivo, large): *"Superteam Brasil + Replit. Juntos no Frontier 2026."*
- **Lead** (left column, Inter): Two short paragraphs. (1) STBR é a chapter brasileira da rede global Superteam — a porta de entrada do ecossistema Solana no Brasil. (2) Replit é a plataforma de build-and-ship com IA que está acelerando devs no mundo inteiro. Juntos, no Frontier 2026, eles estão tornando este o hackathon mais acessível pra qualquer brasileiro lançar um projeto on-chain.
- **Right column**: a stack of two "what each brings" cards — STBR card (premiação USDC, comunidade, distribuição, sede do Garage), Replit card (créditos da plataforma, workshops online, cupons SUPERTEAM20 + créditos extras). Cards are flat cream-on-cream with a single colored border accent (emerald for STBR card, orange for Replit card).

#### 5b. Os dois caminhos

- **This is the section that resolves "wait, are these the same thing?"** in the reader's head. Cream background. Two equal-weight columns, side-by-side on desktop, stacked on mobile.
- **Eyebrow**: `Os dois programas`
- **Headline** (Archivo, large): *"Frontier. The Garage. Inscreva-se."*
- **Two large program cards** (equal visual weight, dark borders on cream, generous padding):

  **Left card — Brazil Track**
  - Tag (small Inter caps, emerald): `Hackathon · online · aberto`
  - Card title (Archivo, medium): *"Frontier Hackathon · Brazil Track"*
  - One-line: "Compete online com qualquer time brasileiro pelo prêmio em USDC e créditos Replit."
  - 3 quick facts in a stack: `Aberto a qualquer brasileiro` · `Times de 1 a 4 pessoas` · `100% online`
  - In-card CTA: `Inscrever meu time →` (emerald fill, scrolls to Hackathon form)

  **Right card — The Garage**
  - Tag (small Inter caps, dark green): `Residência · presencial · selecionado`
  - Card title (Archivo, medium): *"The Garage"*
  - One-line: "Três semanas presenciais no Solana House com ~100 builders selecionados, mentoria, workshops e suporte direto."
  - 3 quick facts in a stack: `~100 vagas` · `3 semanas em São Paulo` · `Inscrição individual ou em time`
  - In-card CTA: `Inscrever no Garage →` (dark green outline, scrolls to Garage form)

- **Footnote** below the cards (Inter, dim): *"Os dois se reforçam. Quer entrar nos dois? [Inscreva-se com um único formulário →](#inscrever-nos-dois)"* — the inline link points to the joint form in the Inscrição section.

#### 6. O hackathon

- Cream background, asymmetric layout. Left: editorial copy block. Right: a single bold organic shape with the Brazilian flag accent inside it (small, tasteful — this is the one Brazil moment).
- **Eyebrow**: `O hackathon`
- **Headline**: *"Frontier 2026 · Brazil Track. Aberto pra todos os brasileiros."*
- **Lead**: ~3 short paragraphs. (1) O que é o Frontier (o hackathon global da Solana via Colosseum). (2) Como funciona a track BR (qualquer time brasileiro pode participar, submissão online, deadline X). (3) O que se constrói (qualquer projeto on-chain — DeFi, agentes, consumidor, infraestrutura, gaming).
- **Bottom row**: three quiet info pills (Inter caps, dark borders): `100% online` · `Times de 1 a 4 pessoas` · `Submissões até [TBD]`.

#### 7. Premiação

- **This is one of the dark anchor sections** — STBR near-black background, cream text. Big visual contrast vs. the cream sections above and below.
- **Eyebrow** (cream, Inter): `Premiação`
- **Headline** (huge Archivo, cream): *"US$10.000 em USDC. Mais créditos Replit em todas as colocações."*
- **Lead** (Inter, single sentence): "Premiação em USDC fornecida pela Superteam Brasil. Créditos da plataforma Replit empilhados em cima de cada colocação."
- **Prize ladder** — a vertical stack of 10 rows, each row has three columns: position · USDC (yellow highlight on the number) · Replit credits (orange accent on the amount). The first three rows are visually larger / featured. The data:
  - 1º · `US$3.000 USDC` · `+ US$500 Replit credits`
  - 2º · `US$2.500 USDC` · `+ US$350 Replit credits`
  - 3º · `US$1.750 USDC` · `+ US$250 Replit credits`
  - 4º · `US$1.000 USDC` · `+ US$200 Replit credits`
  - 5º · `US$500 USDC` · `+ US$150 Replit credits`
  - 6º–10º · `US$250 USDC cada` · `+ US$110 Replit credits cada`
- **Footnote** (small Inter, dim): "Premiação em USDC distribuída pela Superteam Brasil via Superteam Earn. Créditos Replit creditados na conta da plataforma do vencedor."

#### 8. The Garage

- Cream background. **A substantive section, equal narrative weight to "O hackathon" above** — not a sidekick. Asymmetric layout: editorial copy block on one side, a stack of organic shapes (dark green + yellow) compositionally framing the other.
- **Eyebrow**: `The Garage · residência presencial`
- **Headline** (Archivo, large): *"Três semanas no Solana House. ~100 builders. Construindo junto."*
- **Lead** (Inter, ~80 words across two short paragraphs):
  - (1) The Garage é o programa presencial dessa parceria. ~100 builders selecionados passam três semanas no Solana House, em São Paulo, com mentoria, workshops, conexão direta com a comunidade STBR e suporte da Replit como sponsor oficial.
  - (2) Não é obrigatório pra competir no hackathon — mas é o ambiente certo pra quem quer levar o projeto a sério, conhecer os outros builders do ecossistema, e entregar uma submissão forte.
- **What you get** — three cards in a row (cream-on-cream, dark borders, equal heights):
  1. `Sede no Solana House · São Paulo` — *Espaço de trabalho, mentores, e o ecossistema brasileiro de Solana no mesmo lugar.*
  2. `Workshops + mentoria` — *Sessões com a Replit (online) e mentores STBR (presencial) ao longo das três semanas.*
  3. `Replit como sponsor oficial` — *Cupons + créditos pra todos os participantes do Garage. Detalhes na próxima seção.*
- **CTA**: `Inscrever no Garage →` (dark green outline button, scrolls to Garage form). The data is captured on the page — same shape as o hackathon, em DB separado.

#### 9. O que a Replit te dá

- **The Replit moment**. Cream background but with deliberate orange accents. This is the only section where orange is allowed at this density.
- **Eyebrow**: `Replit · o que você ganha`
- **Headline**: *"Cupons. Créditos. Workshops com a Replit."*
- **Lead** (Inter, 2 short sentences): "Os perks da Replit são distribuídos de acordo com o programa que você participa. Veja o que rola em cada um."
- **Two columns** (side by side on desktop, stacked on mobile, dark borders, equal heights — each column is one program's perk stack):

  **Coluna 1 — Garage (~100 builders selecionados)**
  - Tag (small Inter caps, dark green): `The Garage`
  - Perk 1: **Cupom Replit Core** — `US$20 pra ativar a conta · cupom SUPERTEAM20`
  - Perk 2: **+ US$100 em créditos extras** — `Conditional: posta sobre a sua experiência marcando @Replit pra liberar`
  - Perk 3: **Workshops com a equipe Replit** — `1 a 3 sessões online ao longo do programa`

  **Coluna 2 — Vencedores do Hackathon (top 10)**
  - Tag (small Inter caps, orange): `Frontier · Brazil Track`
  - Perk 1: **Créditos Replit empilhados em cada colocação** — `De US$110 (6º–10º) até US$500 (1º) — ver tabela na premiação`
  - Perk 2: **Acesso à plataforma pra escalar o projeto** — `Créditos suficientes pra rodar o MVP pós-hackathon`
  - Perk 3: **Workshops abertos durante o build window** — `As mesmas sessões da Replit ficam disponíveis pra todos os times inscritos`

- **Footnote** (Inter, dim, below the columns): *"Não vai pro Garage e quer testar a Replit? A campanha de conteúdo aberta no Superteam Earn (US$1.000 em bounties) também distribui créditos pra quem postar sobre a experiência com a plataforma."*

#### 10. Inscrição (one joint form + two single-program forms)

- Cream background. Section anchor `#inscrever`.
- Section eyebrow: `Inscrição`
- Section headline (Archivo, large, spans the section): *"Inscreva-se."*
- Section sub (Inter, single line): "Hackathon, Garage, ou nos dois. Cada inscrição leva menos de dois minutos."

**Joint form — top, prominent (anchor `#inscrever-nos-dois`)** *— the recommended path for most builders*

- **A wide, full-width form card** placed *above* the two single-program forms. Visually distinguished as the primary path: cream background with a thicker emerald top border (heavier than the two forms below), generous padding, slightly larger headline. This is the most prominent submission option on the page.
- Form eyebrow (Inter caps, emerald): `Recomendado · Hackathon + Garage`
- Form headline (Archivo, medium-large): *"Inscreva-se nos dois."*
- Form sub (Inter, single line): "Compete online no Hackathon e participe presencial no Garage. Uma inscrição, dois programas."
- **Fields**: same shape as the single-program forms — team/lead name, email, WhatsApp, team size, project category, one-liner idea (optional), cidade, Discord (optional). **No "which programs?" toggle** — choosing this form *is* the choice for both.
- Submit: `Inscrever nos dois →` (emerald fill, cream text, large).
- **Behavior on submit**: the form writes one row to `hackathon_submissions` AND one row to `garage_submissions`, both flagged `joint_submission: true` so the teams can see this builder opted into both. ONE confirmation card returns: *"Inscrição recebida pros dois programas. A gente fala com você no Discord."*
- **Below this card** (small text, centered, dim Inter): *"Quer só um dos programas? Veja as opções abaixo ↓"* — a soft pointer to the two single-program forms below.

**Single-program forms — below, paired side-by-side**

The two single-program forms (Form A and Form B below) live as a secondary option for builders who want only one program. Visually quieter than the joint form above (no thick top border, slightly smaller headlines, smaller padding) so they read as alternatives, not the main path.

**Form A — Hackathon-only (anchor `#inscrever-hackathon`)**

- Form card (cream-on-cream surface with **emerald top border**, generous padding):
- Form eyebrow (Inter caps, emerald): `Brazil Track · time`
- Form headline (Archivo, medium): *"Inscreva seu time."*
- Form sub (Inter, single line, dim): "Pra qualquer brasileiro, online, time de 1 a 4 pessoas."
- **Fields** (per *Form fields — Hackathon team submission* earlier in this brief): team name, lead contact, email, WhatsApp, team size, project category, one-liner idea, Discord handle (optional), source.
- Submit: `Enviar inscrição →` (emerald fill, cream text).
- Submitted state: confirmation card — *"Inscrição recebida. A gente chama você no Discord."* — plus a soft pointer: *"Inscreva-se também no Garage →"* (links to Form B anchor).

**Form B — Garage-only (anchor `#inscrever-garage`)**

- Form card (cream-on-cream surface with **dark green top border**, generous padding):
- Form eyebrow (Inter caps, dark green): `The Garage · presencial em SP`
- Form headline (Archivo, medium): *"Inscreva no Garage."*
- Form sub (Inter, single line, dim): "Três semanas no Solana House. ~100 vagas."
- **Fields** (per *Form fields — Garage submission* earlier in this brief): same shape as the hackathon form — team/lead name, email, WhatsApp, team size, project category, one-liner idea, cidade, Discord (optional).
- Submit: `Enviar inscrição →` (dark green fill, cream text).
- Submitted state: confirmation card — *"Inscrição recebida. A gente fala com você no Discord."* — plus a soft pointer: *"Inscreva-se também no Hackathon →"* (links to Form A anchor).

#### 11. FAQ

- Cream, two-column layout (question on left, answer on right) OR accordion — Claude Design picks whichever reads cleaner at this density.
- **Eyebrow**: `Perguntas frequentes`
- **Headline**: *"Perguntas frequentes."*
- Questions to seed:
  - *Qual a diferença entre o Hackathon e o Garage?* — O Hackathon é a competição online aberta a qualquer brasileiro pelo prêmio em USDC + créditos Replit. O Garage é o programa presencial no Solana House em São Paulo, três semanas, ~100 vagas. Os dois são complementares — você pode fazer um, o outro, ou os dois.
  - *Posso participar dos dois?* — Sim. A gente recomenda usar a inscrição conjunta na seção de Inscrição — uma vez só, dois programas. Se preferir, dá pra inscrever em um por vez nos formulários abaixo.
  - *O Garage é obrigatório pra competir no Hackathon?* — Não. Qualquer time brasileiro pode competir online sem passar pelo Garage.
  - *Preciso ter um time pronto pra me inscrever?* — Não. Você pode entrar solo e a gente te ajuda a montar time no Discord.
  - *Preciso ser brasileiro?* — Sim. A Brazil Track é exclusiva pra brasileiros — indique BR no Colosseum na hora de submeter.
  - *Onde envio o projeto final do Hackathon?* — No portal do Colosseum, antes da data limite. A inscrição aqui é o primeiro passo (te coloca no Discord, libera as comunicações, e ativa os perks da Replit).
  - *Como funciona o cupom Replit pros participantes do Garage?* — Todo inscrito no Garage recebe o cupom `SUPERTEAM20` por email — vale US$20 pra ativar o Replit Core.
  - *E os US$100 em créditos extras do Garage?* — Posta sobre a sua experiência marcando @Replit. A gente valida o post e credita na sua conta da Replit.
  - *E os créditos pros vencedores do Hackathon?* — Os top 10 colocados ganham créditos Replit empilhados em cima do prêmio em USDC, conforme a tabela na seção de Premiação.
  - *Os workshops da Replit são presenciais?* — Não. Os workshops da equipe Replit são online (1 a 3 sessões), abertos pra participantes do Garage e do Hackathon.
  - *A Superteam Brasil ajuda durante o programa?* — Sim. Office hours, mentoria, canais no Discord, e suporte presencial pra quem está no Garage.

#### 12. CTA finale

- **Second dark anchor** — STBR near-black background, cream text. Mirrors the Premiação section's contrast, gives the bottom of the page weight, and frames the final ask. A large STBR organic shape (yellow or emerald) sits behind the panel, cropped at the section edge.
- **Headline** (Archivo, large, cream): *"Construa. Compete. Ganhe."*
- **Sub** (Inter, cream/dim): "A inscrição leva dois minutos."
- **Button**: `Inscrever-se →` (yellow fill `#ffd23f`, near-black text — high-contrast on the dark surface, the only place the yellow is used as a fill rather than a highlight) — anchors to `#inscrever` (lands at the top of the Inscrição section, where the joint form is the most prominent option).

#### 13. Footer

- Dark green background, cream text. Single low row.
- Left: `© 2026 Superteam Brasil` and the STBR + Replit lockup at small scale.
- Right: a horizontal row of links — `superteam.com.br` · `replit.com` · `X` · `Instagram` · `LinkedIn` · `Discord`.

---

### References — vibe targets

> Drop screenshots from these into the file context zone alongside this prompt. They show the *level of craft* and *compositional confidence* we're aiming for — not the literal aesthetic to copy.

- **[superteam.fun](https://superteam.fun)** — the parent network's site. Sibling-tone reference. Confident editorial, restrained palette, generous whitespace. We are part of this family visually.
- **[anthropic.com](https://anthropic.com)** — confident restrained editorial typography. The kind of "every element earns its place" discipline we want.
- **[linear.app](https://linear.app)** — asymmetric editorial layouts, no card-grid laziness, rewarding scroll pacing. Builder audience tone-of-voice without being literally a dev tool's marketing site.
- **[vercel.com](https://vercel.com)** — confident dark/light contrast across long scroll, builder credibility without metaphor.
- **[colosseum.org/frontier](https://colosseum.org/frontier)** — the global hackathon's own site. We are the **Brazilian chapter** of this — not a clone, but visually adjacent enough that a participant clicking between the two feels they're in related, not unrelated, brands.

### Anti-references — do not look like this

> The two traps for this kind of page. Calling them out explicitly is the strongest defense against drifting into them.

- **[devpost.com](https://devpost.com)** — and any "hackathon platform" landing page. Generic template energy, dense card grids, weak typography hierarchy, color used as decoration. The single biggest visual failure mode.
- **Generic Tailwind AI-startup landing pages** — the ones with a purple/blue gradient hero, three feature cards in a row with rounded icons, a CTA button with a soft glow, and Inter Variable everywhere. If the page can be confused for a Y Combinator batch demo's marketing site, we have failed.

### Output spec

- **One scrollable page**, single self-contained HTML file (use `Save as standalone HTML` from the Claude Design project menu when ready to export).
- **In-page navigation must use smooth-scroll anchor-jumps**. Every CTA on the page (`Inscrever meu time`, `Inscrever no Garage`, `Quero entrar nos dois`) jumps directly to its target form section using `scroll-behavior: smooth` (CSS) or equivalent JS. **No hash-jump page reloads, no browser-default instant jumps.** The conversion path from any CTA click to the form must take under one second.
- **Responsive**: mobile-first behavior must be intentional — the long scroll holds together on a phone, organic shapes degrade gracefully (smaller, fewer, repositioned — never just hidden), the prize ladder collapses to a single column with the dark surface preserved, the forms remain single-screen.
- **Accessible**: WCAG AA contrast minimums, focus-visible states on all interactive elements, semantic landmarks (`header`, `main`, `section`, `footer`), real `<label>` / `<input>` pairs in the forms, alt text on all decorative shapes set to `""` (decorative — not announced).
- **Performance**: no large hero video, no autoplay anything, no third-party scripts beyond what's strictly required. The page should feel instant.

### Review loop

The point of producing this in Claude Design (vs. shipping straight to code) is the **inline-comment review surface**. The plan is:

1. First generation → walkthrough with the STBR core team (Pedro Kuka et al). Comment inline on copy, hierarchy, and the form fields.
2. Iterate via Claude Design's adjustment knobs (spacing, color, layout) — no full regenerations unless the foundational direction is wrong.
3. Once STBR signs off → share the live preview link with Marcelo at Replit. Same comment-and-iterate loop, focused on Replit-specific moments (the credits column, the "Replit te dá" section, the workshops mention).
4. Final approved version → export as standalone HTML → handoff to implementation (form backend wired via the elgato pattern: serverless `/api/register` endpoint + Postgres, exportable submissions table).

### Summary — the one page

A clear, direct, confident landing page in PT-BR. STBR-led with Replit as headlining co-host.

**One partnership · two programs · two submission paths**:
- **Frontier Hackathon — Brazil Track** (online, open, any Brazilian team) → captures team submissions
- **The Garage** (IRL, ~100 vagas, 3 weeks at Solana House) → captures team submissions (same shape as the Hackathon form, just routed to its own table)

The page presents both programs as parallel options at the contrast block (`Os dois programas`), gives each its own dedicated deep-dive section, and ends with **three forms in the Inscrição section**: a prominent **joint "Inscrever nos dois" form at the top** (the recommended path — writes one row to each table), plus two quieter single-program forms below for builders who only want one. Three forms, two database tables (`hackathon_submissions`, `garage_submissions`), independently exportable.

**Visual lock**: Cream and emerald STBR palette dominant. Replit orange used surgically in two places (prize ladder credits column, "Replit te dá" section). Yellow as a highlighter throughout, plus the single-use fill on the final CTA button. Two dark anchors (Premiação, CTA finale) break the cream rhythm. Archivo Semi Expanded + Inter only. STBR organic shapes as compositional anchors, never decorative blobs.

**Narrative order**: announcement → top bar → hero (with both CTAs) → stats → parceria → **os dois caminhos (the contrast block)** → hackathon deep-dive → premiação (dark) → garage deep-dive → replit perks (split per program) → **inscrição (two forms side-by-side)** → FAQ → CTA finale (dark) → footer.

Both forms are real submissions persisted to a database we can export. Neither is a link out.
