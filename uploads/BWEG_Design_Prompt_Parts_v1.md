# Blue Water Equipment Group: prompt de diseño, página de Parts (v1)

Cómo usarlo: pegá el bloque de abajo en una conversación nueva de Claude (o Claude Design), junto con el prompt del home (`BWEG_Design_Prompt_v2.md`), para que comparta paleta, tipografía, header, footer, y el AI Advisor funcional.

**Qué es esto:** la página interna a la que llevan "Order Parts" y "Parts Request" del nav. No hay catálogo real de partes todavía, así que esta página usa los 4 grupos confirmados como estructura y placeholders claramente marcados, más un formulario real para pedir una parte. Nada de números de parte, precios, ni stock inventados.

---

```
ROLE
You are the same senior brand and product designer/frontend engineer from the
homepage build. Build the Parts page for Blue Water Equipment Group (BWEG), as
another page in the same site. Reuse the brand tokens, typography, header and
footer defined in BWEG_Design_Prompt_v2.md exactly. Do not restate or redesign them
here; this prompt only covers what's specific to the Parts page.

PAGE PURPOSE
This is the page both the nav's "Order Parts" and "Parts Request" links lead to
(one page today, not two separate flows, since there's one placeholder catalog and
one order form). No real parts catalog exists yet, so build a placeholder listing
organized by BWEG's confirmed equipment groups, clearly marked as pending, plus a
real, working "order a part" form as the actual functional element of the page.

PAGE STRUCTURE
1) Header and nav: same as the homepage, "Parts" shown active.
2) Page header band: headline "Genuine Kubota Parts," subhead ("Find the part for
   your machine, or tell us what you need and we'll track it down. [Live parts
   catalog pending.]"), breadcrumb "Home / Parts."
3) Placeholder parts categories: 4 tiles, one per confirmed equipment group
   (Tractor Parts, Mower Parts, Utility Vehicle Parts, Attachment Parts), each with
   an icon, the label, and a "Browse [Group] Parts" link. Each tile clearly shows a
   "Catalog coming soon" badge; clicking one scrolls to the order form below with
   that group pre-selected, rather than opening an empty listing page. Do not
   invent part numbers, prices, or stock counts anywhere on this page.
4) Order Parts form (the actual functional element of this page):
   - Name (required)
   - Email (required)
   - Phone (required)
   - Equipment model (text field; can autocomplete against
     BWEG_Equipment_Data_v1.json's display_name field, pre-filled with the group if
     the visitor clicked a category tile above)
   - Part name or number, if known (optional text field)
   - Quantity (number input, default 1)
   - Preferred location (dropdown: BWEG's 2 confirmed locations, bracketed pending
     final city names, see BWEG_Design_Prompt_v2.md's LOCATIONS section)
   - Notes (optional textarea, e.g. a description if the part number isn't known)
   - Submit button: "Send Parts Request"
   - On submit (front-end mock is fine, no backend required yet): show a
     confirmation state ("Thanks, our parts team will follow up to confirm
     availability and price.") in place of the form.
5) A short reassurance line: "Don't know the exact part? Use the form above, call
   us, or ask our AI Advisor, we'll help you find it," reinforcing the "real,
   accountable local dealer" positioning from the homepage.

TECHNICAL REQUIREMENTS
- Same responsive, mobile-first, single-file approach as the homepage. No
  horizontal scroll at any breakpoint.
- Accessibility matches the homepage prompt: 4.5:1 contrast minimum, visible focus
  states, alt text on every image/icon, semantic headings, a properly labeled form
  (label elements tied to inputs, required-field indication that isn't
  color-only).
- Do not invent real facts: no fabricated part numbers, prices, stock counts, or
  brand names beyond Kubota. Every placeholder category tile must visibly read as
  pending, not as a working catalog.
- The form can be a working client-side mock (validation and a confirmation state)
  rather than a real backend integration.

DELIVERABLE
Produce the full desktop-width Parts page first, matching PAGE STRUCTURE above,
with the 4 placeholder category tiles and the working order-parts form (including
its mocked submit/confirmation behavior). Use the same DRAFT tagging convention as
the homepage prompt for any new copy. After that, note in a short comment block any
mobile layout adjustments needed beyond standard stacking.
```
