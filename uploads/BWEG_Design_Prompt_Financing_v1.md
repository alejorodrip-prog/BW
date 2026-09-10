# Blue Water Equipment Group: prompt de diseño, página de Apply For Financing (v1)

Cómo usarlo: pegá el bloque de abajo en una conversación nueva de Claude (o Claude Design), junto con el prompt del home (`BWEG_Design_Prompt_v2.md`), para que comparta paleta, tipografía, header, footer, y el AI Advisor funcional.

**Qué es esto:** la página interna a la que llevan "Apply For Financing" del nav y "Check My Rate" del home. Sin datos reales de tasas ni prestamistas todavía, así que esta página es simple: invita a financiar y tiene un formulario real. Nada de tasas, plazos, ni proveedores de financiamiento inventados.

---

```
ROLE
You are the same senior brand and product designer/frontend engineer from the
homepage build. Build the Apply For Financing page for Blue Water Equipment Group
(BWEG), as another page in the same site. Reuse the brand tokens, typography, header
and footer defined in BWEG_Design_Prompt_v2.md exactly. Do not restate or redesign
them here; this prompt only covers what's specific to this page.

PAGE PURPOSE
This is the page the nav's "Apply For Financing" link and the homepage's "Check My
Rate" CTA lead to. Keep it simple: a short pitch for why to finance through BWEG,
and a real, working application/contact form. No specific rates, terms, or lender
partners are confirmed yet, so don't invent any.

PAGE STRUCTURE
1) Header and nav: same as the homepage, "Apply For Financing" shown active.
2) Page header band: headline "Financing Built Around Your Season," subhead
   ("Buying or renting, get started in minutes. [Specific rates, terms, and lender
   partners pending confirmation.]"), breadcrumb "Home / Apply For Financing."
3) Why finance with BWEG (3 short value cards, DRAFT, generic and honest, no
   invented numbers):
   - Works for both purchases and rentals
   - No obligation to check your options
   - A local specialist reviews every application, not a call center
4) Financing form (the actual functional element of this page):
   - Name (required)
   - Email (required)
   - Phone (required)
   - What are you financing? (dropdown: Equipment Purchase / Rental / Not sure yet)
   - Equipment of interest (optional text field; can autocomplete against
     BWEG_Equipment_Data_v1.json's display_name field if useful)
   - Estimated amount needed (optional)
   - Preferred location (dropdown: BWEG's 2 confirmed locations, bracketed pending
     final city names, see BWEG_Design_Prompt_v2.md's LOCATIONS section)
   - Notes (optional textarea)
   - Submit button: "Get Started"
   - On submit (front-end mock is fine, no backend required yet): show a
     confirmation state ("Thanks, a financing specialist will follow up shortly.")
     in place of the form.
5) A short trust line reusing the homepage's Credibility Close tone (Blue Water
   Advisors backing), one sentence, no new claims and no CTA button here.

TECHNICAL REQUIREMENTS
- Same responsive, mobile-first, single-file approach as the homepage. No
  horizontal scroll at any breakpoint.
- Accessibility matches the homepage prompt: 4.5:1 contrast minimum, visible focus
  states, alt text on every image, semantic headings, a properly labeled form
  (label elements tied to inputs, required-field indication that isn't
  color-only).
- Do not invent real facts: no fabricated APR, term lengths, lender names, or
  approval odds. Where a fact isn't confirmed, leave it out or bracket it rather
  than estimating one.
- The form can be a working client-side mock (validation and a confirmation state)
  rather than a real backend integration.

DELIVERABLE
Produce the full desktop-width Apply For Financing page first, matching PAGE
STRUCTURE above, with the working form (including its mocked submit/confirmation
behavior). Use the same DRAFT tagging convention as the homepage prompt for any new
copy. After that, note in a short comment block any mobile layout adjustments
needed beyond standard stacking.
```
