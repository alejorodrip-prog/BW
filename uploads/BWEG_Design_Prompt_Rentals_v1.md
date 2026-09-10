# Blue Water Equipment Group: prompt de diseño, página de Rentals (v1)

Cómo usarlo: pegá el bloque de abajo en una conversación nueva de Claude (o Claude Design), junto con el prompt del home (`BWEG_Design_Prompt_v2.md`), para que comparta paleta, tipografía y el mismo header/nav.

**Qué es esto:** la página interna a la que llega el botón "Explore Rentals" del home. Por feedback del cliente (2026-09-07), se simplificó: en vez del catálogo completo tipo floridacoasteq.com con cinco páginas de apoyo, esta página reutiliza el mismo filtro de categoría de Equipment y agrega un formulario de solicitud de renta. No hay flota de renta confirmada todavía, así que las unidades quedan como placeholders entre corchetes.

---

```
ROLE
You are the same senior brand and product designer/frontend engineer from the
homepage build. Build the Rentals page for Blue Water Equipment Group (BWEG), as
another page in the same site. Reuse the brand tokens, typography, header and footer
defined in BWEG_Design_Prompt_v2.md exactly. Do not restate or redesign them here;
this prompt only covers what's specific to the Rentals page.

PAGE PURPOSE
This is the page "Explore Rentals" and the nav's "Rentals" link lead to. Per client
feedback, keep it simpler than the Equipment page's full catalog pattern: a category
filter (reusing the same four confirmed groups as Equipment) so a visitor can browse
what's rentable by type, plus one rental request form as the actual conversion
point, instead of a per-unit "Rental Request" button and a separate detail page for
each unit. The client has not yet confirmed which specific units are available to
rent, so treat every unit shown here as a bracketed placeholder.

PAGE STRUCTURE
1) Header and nav: same as the homepage, "Rentals" shown active.
2) Page header band: headline "Rent What You Need, When You Need It," subhead
   ("Rent by the day, week, or month. [Fleet details pending confirmation.]"),
   breadcrumb "Home / Rentals."
3) Filter bar: four category pills or tabs, one per confirmed group (Tractors,
   Mowers, Utility Vehicles, Attachments), matching the same interaction pattern as
   the Equipment page's filter (reuse that component rather than designing a new
   one). "All" is the default view.
4) Results grid: 3 columns on desktop, 1 on mobile. Since no specific rental fleet
   is confirmed yet, show one bracketed placeholder card per group (e.g.
   "[Tractor available to rent, pending confirmation]"), with an image placeholder,
   the group label, and a "Request This" button that scrolls to and pre-fills the
   rental request form below with that group selected. Do not invent specific
   models, counts, or rates for this grid.
5) A short note above the form: "Full rental fleet coming soon. Tell us what you
   need below and we'll follow up with availability." This keeps the page from
   reading as broken while the real fleet data is pending.
6) Rental Request form (the actual functional conversion point of this page):
   - Name (required)
   - Email (required)
   - Phone (required)
   - What do you need to rent? (dropdown: the four confirmed groups, plus "Not
     sure, help me decide"; pre-filled if the visitor clicked "Request This" on a
     card above)
   - Rental length (radio: Day / Week / Month)
   - Desired start date (date picker)
   - Notes (optional textarea, e.g. job details, acreage, delivery needs)
   - Submit button: "Send Rental Request"
   - On submit (front-end mock is fine, no backend required yet): show a
     confirmation state ("Thanks, we'll be in touch shortly to confirm
     availability.") in place of the form.

TECHNICAL REQUIREMENTS
- Same responsive, mobile-first, single-file approach as the homepage. No
  horizontal scroll at any breakpoint.
- Accessibility matches the homepage prompt: 4.5:1 contrast minimum, visible focus
  states, alt text on every image placeholder, semantic headings, a properly
  labeled form (label elements tied to inputs, required-field indication that
  isn't color-only).
- Do not invent real facts: no fabricated rental units, rates, or availability.
  Where a fact isn't confirmed, leave it bracketed rather than estimating one.
- The form can be a working client-side mock (validation and a confirmation state)
  rather than a real backend integration.

DELIVERABLE
Produce the full desktop-width Rentals page first, matching PAGE STRUCTURE above,
with the filter, the four placeholder cards, and the working rental request form
(including its mocked submit/confirmation behavior). Use the same DRAFT tagging
convention as the homepage prompt for any new copy. After that, note in a short
comment block any mobile layout adjustments needed beyond standard stacking.
```
