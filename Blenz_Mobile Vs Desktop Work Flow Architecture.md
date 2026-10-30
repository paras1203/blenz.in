# 2026-02-25 - Mobile vs Desktop: Workflow Architecture

---

## 1. Current State

### 1.1 Route Structure
Single HTML file (`index.html`). No routing library. Sections navigated via anchor scroll.

### 1.2 Layout & Shell
- **Header:** Fixed top nav. Desktop: inline links + CTA. Mobile: hamburger → slide-down overlay.
- **Main content:** CSS Grid/Flex-based, responsive breakpoints at 1024px and 768px.
- **Footer:** Flexbox row on desktop, stacked column on mobile.

### 1.3 What Is Shared
- All content sections
- All JS logic (scroll observer, process tabs, form, nav)
- CSS custom properties / design tokens
- Font stack (Syne + Inter)

### 1.4 What Is Duplicated / Divergent
- Nav: different display modes (inline vs. mobile overlay)
- Vertical cards: 2-col grid (desktop) → 1-col stack (mobile)
- Split layout (Supply Chain): 2-col → 1-col
- Oscar feature grid: 3-col → 2-col → 1-col
- Why grid: 2×2 → 1-col
- Contact: 2-col → 1-col
- Service toggle: horizontal row → vertical stack on very small screens

---

## 2. Workflow Differences (Current)

### 2.1 Conversion Flow (Desktop)
Hero dual CTA → Vertical section → Deep dive section (SC or Oscar) → Why Blenz → Contact form

### 2.2 Conversion Flow (Mobile)
Hamburger nav → Anchor scroll to section → Contact form (full width, single column)

---

## 3. Target Architecture: Single Workflow, Two Layouts

### 3.1 Principles
- One codebase, responsive CSS only
- No separate mobile routes
- Feature parity between breakpoints

### 3.2 Suggested Structure
```
index.html          ← single source of truth
style.css           ← all responsive styles via media queries
script.js           ← shared JS, no platform detection
```

### 3.3 Layout Detection
Pure CSS media queries (no JS device detection):
- `> 1024px`: desktop multi-column
- `768px–1024px`: tablet hybrid
- `< 768px`: mobile single column
- `< 480px`: extra-small adjustments (buttons stack)

### 3.4 Shared Workflow Modules
- Navigation module (desktop/mobile variants via CSS)
- Scroll animation (IntersectionObserver)
- Process tab component
- Service form toggle
- Anchor scroll with nav offset

---

## 4. Implementation Checklist

- [x] Responsive nav with mobile hamburger
- [x] Scroll-triggered animations
- [x] Process tabs (SC / Oscar)
- [x] Service pre-selection via CTA deep links
- [x] Form submission mock (needs real endpoint)
- [ ] Backend/form endpoint integration (Formspree / EmailJS / custom)
- [ ] Oscar waitlist integration
- [ ] Analytics (GA4 / Posthog)
- [ ] OG meta tags / SEO
- [ ] Favicon

---

## 5. Route Mapping (Unified)

| URL / Anchor      | Section              | Desktop Layout         | Mobile Layout       |
|-------------------|----------------------|------------------------|---------------------|
| `#hero`           | Hero                 | Full viewport          | Full viewport       |
| `#verticals`      | Two Verticals        | 2-col card grid        | 1-col stacked       |
| `#supply-chain`   | Supply Chain         | 2-col split            | 1-col stacked       |
| `#oscar`          | Oscar AI             | 3-col feature grid     | 1-col stacked       |
| `#why-blenz`      | Why Blenz            | 2×2 card grid          | 1-col stacked       |
| `#process`        | Process              | Tabbed step list       | Tabbed step list    |
| `#contact`        | Contact / Form       | 2-col (copy + form)    | 1-col stacked       |

---

## 6. Summary

Landing page is a single-file, responsive design. No mobile/desktop workflow divergence in logic — only in layout. All CTAs, forms, and interactions are shared. The design system uses CSS custom properties for consistent theming across breakpoints.

---

## 2026-03-06 - # Mobile vs Desktop: Workflow Architecture

## 1. Current State
### 1.1 Route Structure
- Multi-page static site:
  - `index.html` (company landing)
  - `oscar.html` (Oscar product page)
  - `logistics.html` (LOaaS page)
  - `privacy.html`, `terms.html` (legal)
- Shared assets: `style.css`, `script.js`

### 1.2 Layout & Shell
- **Header**: Fixed top nav with shared shell; desktop inline links + CTA, mobile hamburger menu.
- **Theme**: Global **dark + light** themes via CSS variables; theme is applied with `html[data-theme]` and persisted in `localStorage` (`blenz-theme`).

### 1.3 What Is Shared
- Shared header + footer layout patterns
- Shared JS (nav behavior, animations, form behavior) and now **theme toggle logic**
- Shared design tokens in `style.css`

### 1.4 What Is Duplicated / Divergent
- Page content differs by page (Oscar vs LOaaS vs legal), but **theme + nav shell are shared**.

## 2. Workflow Differences (Current)

### 2.1 Conversion Flow (Desktop)
Header (theme toggle available) → navigate between `index.html` / product pages → CTAs → `index.html#contact` form

### 2.2 Conversion Flow (Mobile)
Hamburger nav (theme toggle still available in header) → same cross-page flow → `index.html#contact` form

## 3. Target Architecture: Single Workflow, Two Layouts
### 3.1 Principles
- Feature parity across breakpoints
- Theme parity across breakpoints (same token system)

### 3.2 Suggested Structure
```
index.html
oscar.html
logistics.html
privacy.html
terms.html
style.css
script.js
```

### 3.3 Layout Detection
CSS media queries (same breakpoints as before) + `html[data-theme]` for theme selection.

### 3.4 Shared Workflow Modules
- Navigation module (desktop/mobile variants via CSS)
- Theme module (toggle + persistence)
- Anchor scroll with nav offset

## 4. Implementation Checklist
- [x] Add light theme tokens + CSS variable overrides
- [x] Add theme toggle in header across pages
- [x] Persist theme across page loads

## 5. Route Mapping (Unified)
- **Pages**: `index.html` ↔ `oscar.html` ↔ `logistics.html` (+ legal pages)
- **Primary conversion target**: `index.html#contact`

## 6. Summary
Site now supports **two themes (dark/light)** with a **global toggle**. Mobile and desktop share the same behavior; only layout differs via CSS breakpoints.

### Addendum (2026-03-06)
- Theme toggle is available in **desktop menu**, **mobile top bar**, and **mobile hamburger overlay**.

---

## 2026-03-06 - # Mobile vs Desktop: Workflow Architecture

## 1. Current State
### 1.1 Route Structure
- No route changes.

### 1.2 Layout & Shell
- **Theme toggle placement**: moved into the desktop nav menu (`.nav-links`) and added to the mobile menu overlay (`.nav-mobile`) on main/product pages.
- **Oscar CTA**: header CTA now uses a filled button (`.btn.btn-violet`) for parity with LOaaS prominence.

### 1.3 What Is Shared
- Theme behavior and persistence are shared; only placement differs (desktop menu vs mobile overlay).

### 1.4 What Is Duplicated / Divergent
- None added.

## 2. Workflow Differences (Current)

### 2.1 Conversion Flow (Desktop)
Theme toggle accessible from top nav menu → product exploration → `index.html#contact`

### 2.2 Conversion Flow (Mobile)
Theme toggle accessible inside hamburger menu overlay → same flow

## 3. Target Architecture: Single Workflow, Two Layouts
### 3.1 Principles
- Keep theme toggle discoverable on both layouts.

## 4. Implementation Checklist
- [x] Toggle in desktop menu bar
- [x] Toggle in mobile menu overlay
- [x] Oscar header CTA highlighted like LOaaS (filled)

## 6. Summary
Theme toggle is now positioned in the **menu bar** on desktop and included in the **mobile menu**. Oscar’s header CTA is now visually “primary” like LOaaS (accented fill).

---

## 2026-03-09 - # Mobile vs Desktop: Workflow Architecture

## 1. Current State
### 1.1 Route Structure
- Root public routes now redirect:
  - `oscar.html` -> `AI-SaaS/oscar.html`
  - `privacy.html` -> `AI-SaaS/privacy.html`
  - `terms.html` -> `AI-SaaS/terms.html`
  - `logistics.html` -> `logistics/solutions.html`

### 1.2 Layout & Shell
- Mobile and desktop still share the same responsive behavior per destination page; the root files now act only as entry redirects.

### 1.3 What Is Shared
- Shared route behavior: old URLs remain valid through instant redirects.
- Shared legal grouping for Oscar: product page, privacy, and terms now live in one `AI-SaaS` tree.

### 1.4 What Is Duplicated / Divergent
- No new mobile/desktop logic split introduced; divergence is structural by folder only.

## 2. Workflow Differences (Current)

### 2.1 Conversion Flow (Desktop)
Root URL or direct deep link -> redirect -> destination page -> existing CTA/form flow

### 2.2 Conversion Flow (Mobile)
Same redirect-first route behavior, then the same responsive page flow

## 3. Target Architecture: Single Workflow, Two Layouts
### 3.1 Principles
- Keep legacy URLs working while consolidating pages into product-specific folders.
- Keep one behavior model across desktop and mobile.

### 3.2 Suggested Structure
```
AI-SaaS/oscar.html
AI-SaaS/privacy.html
AI-SaaS/terms.html
logistics/solutions.html
root redirect pages
```

### 3.3 Layout Detection
Unchanged: responsive CSS/layout logic remains inside the destination pages.

### 3.4 Shared Workflow Modules
- Redirect layer for backward-compatible entry points
- Shared responsive navigation/theme behavior on destination pages

## 4. Implementation Checklist
- [x] Move Oscar-facing routes under `AI-SaaS/`
- [x] Move logistics destination under `logistics/solutions.html`
- [x] Preserve root routes with redirects

## 5. Route Mapping (Unified)
- `oscar.html` -> `AI-SaaS/oscar.html`
- `privacy.html` -> `AI-SaaS/privacy.html`
- `terms.html` -> `AI-SaaS/terms.html`
- `logistics.html` -> `logistics/solutions.html`

## 6. Summary
Route organization is now product-tree based, but user-facing behavior remains shared across mobile and desktop. Legacy root URLs still resolve correctly through redirects, and Oscar legal pages now live alongside the Oscar product page.
