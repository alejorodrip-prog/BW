# Blue Water Equipment Group: prompt de diseño, página de Service (v1)

Cómo usarlo: pegá el bloque de abajo en una conversación nueva de Claude (o Claude Design), junto con el prompt del home (`BWEG_Design_Prompt_v2.md`), para que comparta paleta, tipografía y el mismo header/nav.

**Qué es esto:** la página interna a la que llevan el "Schedule Service" del home y el "Service" del nav. Antes ese botón no llevaba a ningún lado; esta página le da destino real. Sin datos específicos de paquetes de mantenimiento o precios del cliente todavía, así que esas partes quedan como categorías genéricas de servicio de un dealer Kubota, marcadas DRAFT, no como specs confirmadas.

---

```
ROLE
You are the same senior brand and product designer/frontend engineer from the
homepage build. Build the Service page for Blue Water Equipment Group (BWEG), as
another page in the same site. Reuse the brand tokens, typography, header and footer
defined in BWEG_Design_Prompt_v2.md exactly. Do not restate or redesign them here;
this prompt only covers what's specific to the Service page.

PAGE PURPOSE
This is the page "Schedule Service" (homepage, Parts/Service/Financing section) and
the nav's "Service" link lead to. It gives visitors a real service overview and, most
importantly, a working way to request a service appointment, since that CTA had
nowhere to go in the earlier draft.

PAGE STRUCTURE
1) Header and nav: same as the homepage, "Service" shown active.
2) Page header band: headline "Kubota Service You Can Count On," subhead ("Factory-
   trained technicians, genuine Kubota parts, and service history you can actually
   see."), breadcrumb "Home / Service."
3) Services offered (3-4 cards, DRAFT: standard dealer-service categories, not
   client-confirmed specifics; confirm before publishing):
   - Scheduled Maintenance (oil changes, filters, routine inspections)
   - Diagnostics & Repair
   - Warranty Service
   - Parts Installation
   Each card: icon, title, one-line description. Do not add specific package names,
   prices, or turnaround times unless the client confirms them.
4) Schedule Service form (the actual functional conversion point of this page):
   - Name (required)
   - Email (required)
   - Phone (required)
   - Equipment model (optional text field; can reference CONFIRMED INVENTORY from
     the homepage prompt as autocomplete suggestions if useful, but don't require
     an exact match since customers may bring in older units)
   - Preferred location (dropdown: BWEG's 2 confirmed locations, bracketed pending
     final city names, see BWEG_Design_Prompt_v2.md's LOCATIONS section)
   - Preferred date (date picker)
   - What do you need done? (required textarea)
   - Submit button: "Request Service Appointment"
   - On submit (front-end mock is fine, no backend required yet): show a
     confirmation state ("Thanks, our service team will reach out to confirm your
     appointment.") in place of the form.
5) A light closing band reusing the homepage's "Genuine Kubota parts, in stock and
   ready" line and a secondary CTA ("Order Parts") if useful, but don't over-build
   a full Parts page here: that's a separate scope.

TECHNICAL REQUIREMENTS
- Same responsive, mobile-first, single-file approach as the homepage. No
  horizontal scroll at any breakpoint.
- Accessibility matches the homepage prompt: 4.5:1 contrast minimum, visible focus
  states, alt text on every image/icon, semantic headings, a properly labeled form
  (label elements tied to inputs, required-field indication that isn't
  color-only).
- Do not invent real facts: no fabricated service packages, prices, or turnaround
  times. Where a fact isn't confirmed, leave it out or bracket it rather than
  estimating one.
- The form can be a working client-side mock (validation and a confirmation state)
  rather than a real backend integration.

DELIVERABLE
Produce the full desktop-width Service page first, matching PAGE STRUCTURE above,
with the service-category cards and the working schedule-service form (including
its mocked submit/confirmation behavior). Use the same DRAFT tagging convention as
the homepage prompt for any new copy. After that, note in a short comment block any
mobile layout adjustments needed beyond standard stacking.
```
