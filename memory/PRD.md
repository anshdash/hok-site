# House of Kriyā — Landing Page PRD

## Problem Statement
Clean, minimal, fast-loading "coming soon / in motion" landing page for a new
ideas-to-businesses studio called "House of Kriyā". Premium, credible, simple.

## User Personas
- Potential partners / founders considering collaboration
- Early hires / contractors discovering the studio
- Press / curious visitors

## Core Requirements (Static)
- Soft beige background (`#F7F5F0`), dark charcoal text (`#1C1C1A`)
- Serif display (Cormorant Garamond) + Manrope body
- Subtle Devanagari accent (क्रिया) in hero + philosophy section
- Sections: Hero, Context, Status, Philosophy, CTA, Footer
- CTA + footer email resolve to `mailto:ansh@houseofkriya.com`
- Fully responsive (tested 375 & 1440)
- Minimal animation: scroll-triggered fade-ups via IntersectionObserver

## Architecture
- Frontend only (React + Tailwind + shadcn primitives available)
- Pages: `/app/frontend/src/pages/Landing.jsx` mounted at `/`
- Global styles / fonts / reveal classes: `/app/frontend/src/index.css`
- No backend routes added; template `/api/` still present but unused
- No third-party integrations

## Implemented (2025-12)
- Hero with brand, eyebrow, headline, subtitle, Devanagari backdrop
- Context, Status (I/II/III), Philosophy, CTA, Footer
- Scroll-reveal on sub-hero sections (data-reveal + IntersectionObserver)
- Mailto CTA button + underlined footer email
- data-testid on every interactive / content-bearing element
- Testing agent pass (100% frontend)

## Backlog
### P0
- None (MVP complete)

### P1
- Open Graph / Twitter card meta + favicon aligned with brand
- Light brand mark SVG (monogram) instead of text for nav

### P2
- Journal / notes sub-page for long-form updates
- Partner logos strip once partnerships go live
- Newsletter capture (e.g., Resend integration)

## Next Action Items
- Add OG image + favicon once brand assets exist
- Wire simple email-capture form if Ansh wants soft leads
