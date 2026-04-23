# Replit × Superteam Brasil — Landing Page Prompt for Claude Design

> **This is a submission form with minimal context. Not a marketing funnel.**
> Audience already knows what Superteam Brasil is. Their only job is to land, read two numbers, and submit their team. Replit uses those submissions to rate projects and distribute credits. That's it.

---

## Setup — Before you press Send

In the Claude Design project `stbr-replit`:

1. **Skills attached**: `Hi-fi design` · `Interactive prototype` · `Design System` · **`Frontend design`** *(add this one)*
2. **Drop into the file zone**: `superteam-brasil-brand-pack/stbr-brand-guide.pdf` · all of `superteam-brasil-brand-pack/Logo/` · all of `superteam-brasil-brand-pack/Elements/svg/` · the Replit logo *(drop once sourced)*
3. **Output format**: single standalone HTML (use `Save as standalone HTML`)

---

## Prompt

> Paste everything below into the Claude Design composer.

---

You are designing a single landing page in **Brazilian Portuguese** for the partnership between **Superteam Brasil** and **Replit** around the **Frontier Hackathon — Brazil Track**.

**The audience already knows Superteam Brasil.** They are arriving from STBR's own channels (Twitter, Discord, newsletter). They do not need an explainer for STBR, Replit, Solana, or the Frontier hackathon. **Cut every paragraph that explains things they already know.**

The page has one job: **get the team to submit.** Replit uses those submissions to rate projects and distribute credits. That's the entire point.

### Audience

Brazilian devs and founders who are already inside the STBR ecosystem. They read PT-BR, they want direct copy, they do not want to scroll through an explainer.

### The whole page — 5 sections, no filler

#### 1. Top bar
- Sticky, low height, cream background.
- Left: `Superteam Brasil × Replit` logo lockup (small `×`).
- Right: `Inscrever →` button (emerald fill). That's the whole nav. No menu links.

#### 2. Hero
- Cream background. One STBR organic shape anchoring a corner. Nothing else decorative.
- Eyebrow (Inter caps, small): `Frontier · Brazil Track · 2026`
- Headline (Archivo Semi Expanded, huge, max 2 lines): ***"Inscreva seu time no hackathon."***
- Sub (Inter, one line, ~15 words): "$10.000 USDC pelos 10 primeiros + créditos Replit em cima de cada colocação."
- Primary CTA: `Inscrever →` (emerald fill, cream text, large) — smooth-scrolls to `#inscrever`.
- Dates, one row, three small flat cards (Inter): `Início · [TBD]` · `Submissões até · [TBD]` · `Resultado · [TBD]`.
- **That's the entire hero.** No second paragraph. No "what is this." No stats band.

#### 3. Premiação
- Dark anchor section (STBR near-black background, cream text). This is the only dark section on the page.
- Eyebrow: `Premiação`
- Headline (Archivo, large): ***"$10.000 USDC + créditos Replit."***
- One-line sub: "USDC pela Superteam Brasil. Créditos Replit distribuídos pelo time da Replit conforme a colocação e a avaliação do projeto."
- **The prize table** — 10 rows, 3 columns (`Posição · USDC · Créditos Replit`):
  - 1º · **$3.000** · + **$500**
  - 2º · **$2.500** · + **$350**
  - 3º · **$1.750** · + **$250**
  - 4º · **$1.000** · + **$200**
  - 5º · **$500** · + **$150**
  - 6º–10º · **$250 cada** · + **$110 cada**
- That's the whole section. No founder logos, no "Colosseum em números," no side stack.

#### 4. Inscrição (anchor `#inscrever`) — **the point of the page**
- Cream background. One form, one column, centered, generous padding. No cards. No decoration around it.
- Eyebrow: `Inscrição`
- Headline (Archivo, large): ***"Inscreva seu time."***
- One-line sub: "Menos de dois minutos. A Replit usa essas informações pra acompanhar e distribuir os créditos depois."
- **Fields** (in this exact order):
  1. Nome do time
  2. Nome completo (contato principal)
  3. Email
  4. WhatsApp
  5. Tamanho do time (`1` · `2` · `3` · `4+`)
  6. Categoria do projeto (`DeFi` · `Consumer` · `Infra` · `AI / agentes` · `Gaming` · `Outro`)
  7. Ideia em uma linha *(opcional)*
  8. Discord *(opcional)*
  9. **Quais programas?** (checkbox group, multiple allowed, **Hackathon pré-marcado**):
     - `[x] Hackathon — Frontier Brazil Track`
     - `[ ] The Garage — residência presencial 3 semanas, Solana House SP (~100 vagas)`
- Submit button: `Enviar inscrição →` (emerald fill, cream text, large).
- **On submit**: the form writes one row per checked program to the database (`hackathon_submissions` and/or `garage_submissions`). Single confirmation card replaces the form: ***"Inscrição recebida. A gente fala com você no Discord."*** — with a small link below: `Voltar pra ver a premiação →` (back to top).
- **No secondary forms, no joint-vs-single architecture, no side-by-side layouts.** One form with checkboxes handles both programs.

#### 5. FAQ *(keep to 3 questions, nothing more)*
- Cream background. Simple two-column: question on left, answer on right. No accordion.
- Headline: ***"Perguntas frequentes."***
- Questions:
  1. ***Como funcionam os créditos Replit?*** — O time da Replit avalia os projetos dos top 10 colocados após a submissão no Colosseum e distribui os créditos conforme a tabela acima.
  2. ***O que é o The Garage?*** — Residência presencial de 3 semanas no Solana House em São Paulo. ~100 vagas. Marque o checkbox na inscrição se quiser participar.
  3. ***Preciso ser brasileiro?*** — Sim. Indique BR no Colosseum na hora de submeter o projeto final.

#### 6. Footer
- Dark green background, cream text, single low row.
- Left: `© 2026 Superteam Brasil`
- Right: `superteam.com.br` · `replit.com` · `X` · `Discord`

---

### Aesthetic — minimal, direct, STBR-branded

- **Palette**: strictly from the STBR brand pack. Cream `#f5e8ca` base · emerald `#008b4c` primary · dark green `#306c40` deep · yellow `#ffd23f` as a highlighter only (not a fill) · near-black `#1b231d` for the Premiação section only.
- **Replit orange**: appears only in the "Créditos Replit" column of the prize table. Nowhere else.
- **Typography**: **Archivo Semi Expanded** for headlines, **Inter** for everything else. No third typeface, no monospace, no serif.
- **Organic shapes**: use the SVGs from the brand pack sparingly — one in the hero, maybe one in the footer. **Not** every section. Most of the page is typography + whitespace.
- **No decoration that isn't earning its place**: no gradients, no shadows, no glow, no animations beyond smooth-scroll, no stats band, no ticker, no founder logo clusters, no "o que é" explainers, no metric cards, no parallax.
- **Generous whitespace**. The page should feel confident in how little it says.

### References — what the bar looks like

- [linear.app](https://linear.app) — confident, direct, generous whitespace
- [superteam.fun](https://superteam.fun) — sibling tone, restrained palette

### Anti-references — what this is NOT

- **[devpost.com](https://devpost.com)** and every hackathon-platform landing page — dense card grids, generic templates
- **Marketing-funnel LPs** with 12 sections explaining what the partnership is, who each brand is, why it matters, and three testimonial cards. **We are not selling a product.** Users already decided to participate before they got here. The page's only job is the form.

### Output spec

- Single scrollable page, standalone HTML file, in-page smooth-scroll on all anchor jumps (`scroll-behavior: smooth`).
- Responsive: on mobile, the prize table collapses to a single-column stack, the form remains one column, everything else already is.
- WCAG AA contrast, real `<label>` / `<input>` pairs, focus-visible states, semantic landmarks.
- No third-party scripts beyond strict necessity. Must feel instant.

### Summary

A 5-section page. Top bar → Hero (two lines + CTA) → Premiação (dark, one table) → **Form** (the point) → FAQ (3 questions) → Footer. Everything that doesn't move a visitor toward `Enviar inscrição →` has been cut. Copy is declarative, short, PT-BR. The visual system is cream + STBR brand, Archivo + Inter, one dark section, zero decoration. Replit team uses the submissions in the database to rate projects and distribute credits — the LP is the intake, nothing more.
