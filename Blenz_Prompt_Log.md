# Blenz Prompt Log

---

## 2026-02-25 - Full Site Restructure & Redesign

**Category:** Architecture / Feature Request / Core Logic

**Instruction:**
> "Font change — Syne too wide, not corporate enough. Redesign the landing page as a purely corporate page focused on product information via the menu. Rename supply chain to 'Strategic Logistics as a Service'. Oscar is a contact management and productivity app (AI-enhanced contacts). Landing page should highlight Oscar primarily, with about + contact info. Products dropdown in nav. Each product gets its own page (oscar.html, logistics.html). Privacy policy must be strategic — no IP exposure, no internal logic visible (competitors like Popl don't expose this). Must include India DPDPA 2023 and Apple App Store compliance. Oscar is in beta; a bigger product (mini CRM for working professionals) is coming."

**Outcome:**
- Replaced Syne font with Plus Jakarta Sans across all pages
- Redesigned index.html: corporate, products dropdown nav, about section, contact form
- Created oscar.html: Oscar product page with features, pricing, beta notice, coming soon
- Created logistics.html: Logistics service page (overseas agent, sourcing, warehousing, plug-and-play)
- Rewrote privacy.html: No ML Kit / Gemini / confidence threshold / quota mechanics mentioned; generic "on-device text recognition", "AI-powered processing", "payment provider" language; India DPDPA 2023 + Apple compliance sections added
- Updated terms.html: Apple App Store clause, DPDPA 2023 age requirement (18), Apple refund policy note
- All pages use shared nav (Products dropdown), shared footer, shared style.css



---

## 2026-02-25 - Landing Page Build (Initial)

**Category:** Feature Request / Architecture

**Instruction:**
> "Create a landing page for my company, Blenz, right now 2 services:
> 1. Strategic supply chain as a service (for indian and overseas customers involved in exim trade)
> 2. AI products/saas helping professionals and companies in business communication, networking, outreach and CRM needs (Codename: Oscar)
>
> You're not building a generic website; you're building a credibility + conversion asset for a consulting + AI company. The landing page must do three jobs:
> - establish authority
> - clearly separate your two verticals
> - drive inquiry/demo conversations"

**Outcome:** Built `index.html`, `style.css`, `script.js` — full landing page with:
- Dark premium design (Syne + Inter, gold/violet dual accent system)
- Hero with animated gradient glows and dual CTAs
- Two vertical cards (Supply Chain / Oscar AI) with distinct visual identities
- Deep-dive sections per vertical with feature breakdowns and audience tags
- Why Blenz authority section (4 differentiators)
- Process section with tabbed steps (SC vs Oscar)
- Contact/inquiry form with service pre-selection deep links
- Responsive mobile nav + layout

---

## 2026-03-06 - Light Theme + Theme Toggle

**Category:** Feature Request

**Instruction:**
> "make light theme view as well and put a toggle to switch dark/light."

---

## 2026-03-06 - Toggle placement + Oscar CTA highlight

**Category:** Feature Request

**Instruction:**
> "put toggle on menu bar
> highlight book call button for oscar similar to LOaaS"

---

## 2026-03-06 - Theme toggle in menu + Oscar CTA

**Category:** Feature Request

**Instruction:**
> "put toggle on menu bar
> highlight book call button for oscar similar to LOaaS"

---

## 2026-03-09 - Route move into Oscar and LOaaS folders

**Category:** Architecture / Feature Request

**Instruction:**
> "Separate Oscar and LOaaS into their own folder trees, move root URLs to the new destinations, keep Oscar privacy and terms inside the same `AI-SaaS` tree, and improve the light-theme structure while preserving the public routes through redirects."

---

## 2026-03-09 - Clean root redirect pages

**Category:** Feature Request

**Instruction:**
> "Clean up these files so each contains ONLY a minimal redirect page and no leftover original content after the closing `</html>`:
> - oscar.html -> ./AI-SaaS/oscar.html
> - privacy.html -> ./AI-SaaS/privacy.html
> - terms.html -> ./AI-SaaS/terms.html
> - logistics.html -> ./logistics/solutions.html"
