# BWEG Professional Homepage

Marketing site for Blue Water Equipment Group (Kubota dealer — Greer, SC).

## Structure
- `index.html` — homepage (source component: `BWEG Homepage v4.dc.html`)
- `BWEG Equipment / Rentals / Service / Parts / Financing / Company .dc.html` — subpages
- `support.js` — Design Component runtime (required next to the HTML)
- `bweg-advisor.js` — AI Advisor answer engine
- `assets/sequences/hero-v2/001.jpg … 081.jpg` — 81 hero scroll frames
- `assets/sequences/l2502/001.jpg … 100.jpg` — Kubota L2502 360° frames
- `assets/sequences/zd1211/001.jpg … 100.jpg` — Kubota ZD1211 360° frames
- `assets/catalog/` — equipment photos used by the homepage and Equipment page

## Image assets — important
The site loads **only the `.jpg` frames**. The original PNG frames (~350 MB total)
are gitignored on purpose: they exceed practical GitHub/Vercel deployment limits,
which is what previously caused the 360° sequences to fail on the live site.
If you regenerate frames, keep them optimized (hero ≈ 1600px wide, products 1280×720,
JPEG quality ~0.8) and commit the `.jpg` versions only.
`uploads/` is also gitignored — nothing the site loads may live there.

## Deploy (Vercel)
Static site — no build step. Vercel serves `index.html` as the entry point.
Configuration is in `vercel.json`.
