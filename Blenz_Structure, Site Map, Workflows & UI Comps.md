# 2026-02-25 - Project Structure, Site Map, Workflows & Component Inventory

---

## 1. Directory Structure (Source)

```
blenz site/
├── index.html
├── style.css
├── script.js
├── Blenz_Prompt_Log.md
├── Blenz_Structure, Site Map, Workflows & UI Comps.md
└── Blenz_Mobile Vs Desktop Work Flow Architecture.md
```

---

## 2. Site Map (Pages & Linkage)

Single-page application (SPA-style scroll). All sections on `index.html`.

| Section ID       | Label                    | Nav Link           |
|------------------|--------------------------|--------------------|
| `#hero`          | Hero                     | Logo (home)        |
| `#verticals`     | Two Verticals Overview   | —                  |
| `#supply-chain`  | Supply Chain Deep Dive   | Nav: Supply Chain  |
| `#oscar`         | Oscar AI Deep Dive       | Nav: Oscar AI      |
| `#why-blenz`     | Authority / Why Blenz    | Nav: About         |
| `#process`       | How It Works             | —                  |
| `#contact`       | Inquiry / Contact Form   | Nav: Book a Call   |

---

## 3. Workflows (Chronology)

### Desktop
Hero → Vertical cards (anchor) → Supply Chain or Oscar section → Why Blenz → Process (tabbed) → Contact form

### Mobile
Hamburger nav → same sections, stacked single column layout

---

## 4. Free vs Pro Plan Features

Not applicable at this stage (landing page only, no auth/plans).

---

## 5. Dead / Inactive / Empty Pages & Buttons

### Buttons / links with no action or placeholder
- Form submit: simulates success after 1.2s delay (no backend endpoint connected yet)
- All mailto/external links: not yet configured

### Pages that are minimal or redirect-only
- No sub-pages yet

### Incomplete / placeholder behavior
- Form submission fires a mock delay and shows success — needs real API endpoint

---

## 6. Coming Soon
- Individual service pages (Supply Chain, Oscar AI)
- Oscar waitlist/demo booking integration
- Case studies / testimonials section
- Blog / Insights section

---

## 7. Page/Screen-Wise Component List

### `index.html` — Full Page

**Header**
- Nav (logo, links, CTA button)
- Mobile hamburger nav overlay

**Hero Section**
- Background grid overlay
- Two gold/violet glow blobs (animated)
- Badge pills (Supply Chain, Oscar AI)
- H1 headline with gradient em spans
- Subtitle paragraph
- Dual CTA buttons

**Verticals Section**
- Section label
- Section title
- Two vertical cards (gold / violet)
  - Card label, icon
  - H3 title
  - Description
  - Feature list (5 items)
  - CTA link

**Supply Chain Section**
- Eyebrow label
- Split layout (2 cols)
  - Left: H2, 2x body text, CTA button
  - Right: 4 feature items (num badge + h4 + p)
- For-whom tags row

**Oscar Section**
- Eyebrow label
- Oscar header (mark with Beta badge + title + body)
- 3×2 feature grid (6 cards)
- For-whom tags row
- CTA bar (text + 2 buttons)

**Why Blenz Section**
- Eyebrow
- H2 (gradient text)
- 2×2 why-card grid

**Process Section**
- Eyebrow
- H2
- Tab switcher (Supply Chain / Oscar AI)
- 4-step process list (tabbed)

**Contact Section**
- Copy column (eyebrow, H2, body, note card)
- Form column
  - Name + Email (2-col row)
  - Company input
  - Service toggle (3 buttons)
  - Message textarea
  - Submit button
  - Success message

**Footer**
- Brand block (logo, tagline)
- Links columns (Services, Company)
- Footer bottom bar (copyright, tagline)

---

## 2026-03-06 - # Project Structure, Site Map, Workflows & Component Inventory

## 1. Directory Structure (Source)
```
blenz site/
├── index.html
├── oscar.html
├── logistics.html
├── privacy.html
├── terms.html
├── style.css
├── script.js
├── Blenz_Prompt_Log.md
├── Blenz_Structure, Site Map, Workflows & UI Comps.md
└── Blenz_Mobile Vs Desktop Work Flow Architecture.md
```

## 2. Site Map (Pages & Linkage)
- **Pages**: `index.html`, `oscar.html`, `logistics.html`, `privacy.html`, `terms.html`
- **Primary conversion**: product CTAs → `index.html#contact`

## 3. Workflows (Chronology)

### Desktop
Header (theme toggle) → browse `oscar.html` / `logistics.html` → CTA deep-link → `index.html#contact` → submit form

### Mobile
Same workflow; header shows theme toggle + hamburger for navigation.

## 4. Free vs Pro Plan Features
- **Oscar marketing**: Free vs Pro pricing/features are presented on `oscar.html` (UI only; no auth/billing flow in the website).

## 5. Dead / Inactive / Empty Pages & Buttons
### Buttons / links with no action or placeholder
- None added by the theme change.

## 6. Coming Soon
- No change from prior record (feature roadmap unchanged).

## 7. Page/Screen-Wise Component List

### Shared (all pages with header)
**Header**
- Nav logo
- Solutions dropdown (on main/product pages)
- **Theme toggle button (Dark/Light) — desktop menu + mobile top bar + mobile overlay**
- CTA button (varies by page)
- Mobile hamburger nav overlay (main/product pages)

---

## 2026-03-09 - # Project Structure, Site Map, Workflows & Component Inventory

## 1. Directory Structure (Source)
```
blenz site/
├── AI-SaaS/
│   ├── oscar.html
│   ├── privacy.html
│   └── terms.html
├── logistics/
│   └── solutions.html
├── oscar.html
├── privacy.html
├── terms.html
├── logistics.html
└── tracking docs...
```

## 2. Site Map (Pages & Linkage)
- Root public routes now redirect to product folders.
- Oscar tree: `AI-SaaS/oscar.html`, `AI-SaaS/privacy.html`, `AI-SaaS/terms.html`
- LOaaS tree: `logistics/solutions.html`

## 3. Workflows (Chronology)

### Desktop
Public root URL -> redirect page -> destination product/legal page -> existing CTA or navigation flow

### Mobile
Same route pathing and redirect behavior; responsive page flow unchanged after landing

## 4. Free vs Pro Plan Features
- No structural change to plan presentation; Oscar pricing remains in the Oscar destination page.

## 5. Dead / Inactive / Empty Pages & Buttons
### Pages that are minimal or redirect-only
- `oscar.html`
- `privacy.html`
- `terms.html`
- `logistics.html`

## 6. Coming Soon
- No new placeholders introduced by this move.

## 7. Page/Screen-Wise Component List
- Root redirect pages: meta refresh + JS redirect + fallback link
- `AI-SaaS/`: Oscar product and legal pages grouped in one source tree
- `logistics/solutions.html`: logistics solutions destination page
