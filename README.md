# BWEG Professional Homepage

Marketing site for BlueWater Southwest Group (Kubota dealer network — Florida).

## Structure
- `index.html` — main homepage (also available as `BWEG Homepage v2.dc.html`)
- `support.js` — Design Component runtime (required next to the HTML)
- `assets/bluewater-logo.png` — brand logo
- `assets/sequences/hero/` — 82 hero animation frames
- `assets/sequences/product-01/` — 60 tractor 360° frames
- `assets/sequences/product-02/` — 60 excavator 360° frames

## Deploy (Vercel)
Static site — no build step. Vercel serves `index.html` as the entry point.
Configuration is in `vercel.json`.
