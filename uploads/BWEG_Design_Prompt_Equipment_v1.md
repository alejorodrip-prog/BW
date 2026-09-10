# Blue Water Equipment Group: prompt de diseño, página de Equipment (v2)

Cómo usarlo: pegá el bloque de abajo en una conversación nueva de Claude (o Claude Design), junto con el prompt del home (`BWEG_Design_Prompt_v2.md`) para que comparta paleta, tipografía y el mismo header/nav, y adjuntá también `BWEG_Equipment_Data_v1.json` (las 28 unidades reales en un formato que el filtro y el buscador pueden leer directamente). No hace falta adjuntar fotos: cada unidad lleva un placeholder de imagen hasta que tengamos fotos reales o generemos las secuencias 360°.

**Qué es esto:** la página interna de Equipment (antes "Inventory": el cliente pidió copiar casi exacto la estructura de floridacoasteq.com, y ahí el nav dice "Equipment," así que renombramos el nav y esta página para que coincidan; "inventory" sigue apareciendo como palabra normal en el copy), con las 28 unidades reales del wholegoods audit del cliente, agrupadas igual que en `BWEG_Kubota_Content_Structure_v1.xlsx`. Es la primera página interna con contenido real (no placeholder de texto), para que el resto del sitio deje de depender solo del home.

**Sobre la referencia a Florida Coast Equipment (actualizado):** esta vez sí entramos en vivo a su página real de listado (con el navegador, no solo el sitemap) y quedó todo verificado: los filtros de Categoría con conteo en vivo, Sort By, buscador, paginación, y la tarjeta real de cada unidad (imagen, categoría, nombre, link "Details," botón de acción). La estructura de PAGE STRUCTURE y CARD ANATOMY de abajo ya refleja eso, no un patrón genérico.

---

```
ROLE
You are the same senior brand and product designer/frontend engineer from the
homepage build. Build the Equipment listing page for Blue Water Equipment Group
(BWEG), as a second page in the same site. Reuse the brand tokens, typography, header
and footer defined in BWEG_Design_Prompt_v2.md exactly. Do not restate or redesign
them here; this prompt only covers what's specific to the Equipment page.

PAGE PURPOSE
This is the page "Equipment" in the header nav links to (renamed from "Inventory" to
match floridacoasteq.com's real nav label, per the client's instruction to mirror
FCE's structure closely; see BWEG_Design_Prompt_v2.md section 1). It lists every unit
BWEG currently has in stock, filterable by category, so a visitor can go from "what
do you carry" to a specific unit in a few clicks. The filter and card mechanics below
are verified live against floridacoasteq.com's real listing page, not a generic
guess: a Filter control with category checkboxes and live counts, a Sort By control,
a search box, and pagination once volume needs it.

PAGE STRUCTURE
1) Header and nav: same as the homepage, "Equipment" shown active.
2) Page header band: headline "Browse Our Equipment," short subhead ("28 units in
   stock across Tractors, Mowers, Utility Vehicles, and Attachments. Every one
   available to buy."), breadcrumb "Home / Equipment."
3) Filter bar, matching FCE's real mechanism: a "Filter" button opens a panel with
   Category checkboxes, one per CONFIRMED GROUP below (Tractors, Mowers, Utility
   Vehicles, Attachments), each showing a live count pulled from the data; a "Sort
   By" control (Featured, Most Recent, Name A-Z, Name Z-A); a keyword search box; a
   "Clear All" / reset action. Skip FCE's separate Manufacturer and Model filter
   controls: BWEG is 100% Kubota, so a manufacturer filter has nothing to filter, and
   28 units don't need a model-level filter on top of category and search. "All" is
   the default view.
4) Results grid: 3 columns on desktop, 1 on mobile. Each card uses the CARD ANATOMY
   below. Sort by group, then subcategory, then series, matching the order in
   CONFIRMED INVENTORY below, so the grid reads the same way every time regardless of
   filter state. Add pagination once the page needs more than one screen; at 28 units
   a single page is likely fine, but build the pagination component so it's ready.
5) Empty state (for a filter combination with 0 units): "No units currently match
   this filter. Try a different category, or ask our AI Advisor what's available."

CARD ANATOMY (repeats for every unit in the grid; matches FCE's real card: image,
category label, name, a "Details" link, and one primary action button)
- Image placeholder: labeled rectangle, aspect ratio matches the eventual product
  photo (4:3), with a short caption identifying what should replace it (e.g. "Photo
  pending: Kubota BX23S, sub-compact TLB"). Never use generic stock photography here.
- Category badge (e.g. "SUB-COMPACT TRACTOR," "STAND-ON MOWER").
- Display name (from CONFIRMED INVENTORY below).
- One-line configuration note where relevant (deck size, fuel/drivetrain, cab or
  open-station).
- Live-availability tag ("In Stock" with the pulsing green dot from MOTION
  PRINCIPLES).
- A "Details" link to the unit's own page (placeholder link for now; the field
  template for that page is already confirmed in BWEG_Kubota_Content_Structure_v1.xlsx,
  tab "Product Detail Fields"). Its eventual URL should follow the pattern verified
  live on floridacoasteq.com: /equipment/kubota/{category-slug}/{subcategory-slug}/
  {model-slug}/overview (e.g. /equipment/kubota/tractors/sub-compact/bx23s/overview).
- CTA button: "Request a Quote" (primary), matching the client's instruction to drop
  pricing entirely. This is the sale-side CTA; the Rentals page uses "Rental Request"
  instead, see BWEG_Design_Prompt_v2.md's RENTALS section.

CONFIRMED INVENTORY, GROUPED FOR THIS PAGE
Every unit below comes directly from the client's wholegoods audit. Descriptions are
general, well-established facts about each Kubota series, not invented specs. Where a
numeric spec isn't confirmed (horsepower, dig depth, lift capacity, and similar), the
card should not show a number at all; use the configuration note instead (deck size,
fuel type, cab). Full spec tables are a later pass once we can verify them against
live Kubota/FCE product pages, tracked in the xlsx's Open Items tab.

TRACTORS

  Sub-Compact, BX Series
  BX-series tractors are Kubota's smallest platform, built for homeowners and small
  property work: mowing, light loader work, and snow or debris clearing.
  - Kubota BX23S (Tractor-Loader-Backhoe). Diesel. A combo unit built around a
    front loader and backhoe on one compact chassis, for digging and grading jobs a
    plain tractor can't do. [Photo pending]
  - Kubota BX2380. Diesel. Loader and mower-deck package. [Photo pending]
  - Kubota BX2380. Diesel. Mower-deck configuration. [Photo pending]

  Compact, B Series
  - Kubota B2601. Diesel/HST. Kubota's compact platform for small acreage and hobby
    farms, a step up in size and power from the BX line. [Photo pending]

  Compact, L Series
  - Kubota L2502. Diesel/HST. Mid-size compact tractor for general property and
    light agricultural work. [Photo pending]

  Compact, LX Series
  - Kubota LX2620. Diesel/HST. Kubota's higher-spec compact line, built for owners
    who want more comfort and capability at the top of the compact range.
    [Photo pending]

  Utility, MX Series
  BWEG's largest tractor platform in current stock, for heavier acreage, hay, and
  general farm work.
  - Kubota MX6000 (Cab). Diesel/HST, enclosed cab. [Photo pending]
  - Kubota MX6000. Diesel/HST, open-station. [Photo pending]

MOWERS

  Diesel, ZD Series
  Kubota's diesel zero-turn line, built for commercial and high-hour production
  mowing.
  - Kubota ZD1011. 54" deck. [Photo pending]
  - Kubota ZD1211. 60" deck. [Photo pending]
  - Kubota ZD1211L. 72" deck, the larger-deck variant of the ZD1211. [Photo pending]

  Gas, Residential, Z200 Series
  Kubota's entry zero-turn line, sized for properties under about 5 acres.
  - Kubota Z232. 42" deck. [Photo pending]
  - Kubota Z252. 54" deck. [Photo pending]
  - Kubota Z242. 48" deck. [Photo pending]

  Gas, Prosumer, Z400 Series
  A step up from the Z200 line, for larger residential properties or light
  commercial use.
  - Kubota Z422X. 54" deck. [Photo pending]
  - Kubota Z412. 48" deck. [Photo pending]
  - Kubota Z452 (EFI). 54" deck, fuel-injected engine. [Photo pending]
  - Kubota Z452 (Turbo EFI). 60" deck, turbocharged fuel-injected engine.
    [Photo pending]

  Gas, Commercial, Z700 Series
  Kubota's commercial-duty gas zero-turn line, built for landscaping crews and
  daily, high-hour use.
  - Kubota Z726X. 60" deck. [Photo pending]
  - Kubota Z724X. 54" deck. [Photo pending]

  Gas, Commercial (Grand), ZG Series
  Kubota's "Zero-Turn Grand" line, the top of its commercial gas mower range.
  - Kubota ZG227. 60" deck. [Photo pending]

  Stand-On, SZ Series
  A stand-on platform aimed at commercial crews who value a smaller footprint and
  faster on/off transitions between properties.
  - Kubota SZ26. 61" deck. [Photo pending]

UTILITY VEHICLES

  RTV-X Series
  Kubota's utility vehicle line, built for job-site and property transport, hauling,
  and towing.
  - Kubota RTV-X (Cab). Diesel, enclosed cab. Exact trim to confirm with the client
    before publishing. [Photo pending]

ATTACHMENTS

  Loaders, LA Series
  Front loaders sized to match specific Kubota tractor series, for lifting,
  loading, and material handling.
  - Kubota LA535 Loader. Compatible tractor series to confirm. [Photo pending]
  - Kubota LA1065A Loader. Compatible tractor series to confirm. [Photo pending]
  - Kubota LA526 Loader. Compatible tractor series to confirm. [Photo pending]
  - Kubota LA344S Loader. Compatible tractor series to confirm. [Photo pending]

  Backhoes, BH Series
  - Kubota BH77 Backhoe. Compatible tractor series to confirm. [Photo pending]

TECHNICAL REQUIREMENTS
- Same responsive, mobile-first, single-file approach as the homepage. No horizontal
  scroll at any breakpoint.
- Accessibility matches the homepage prompt: 4.5:1 contrast minimum, visible focus
  states, alt text on every image placeholder describing what it will eventually
  show, semantic headings.
- Do not invent real facts: no fabricated horsepower, dig depth, lift capacity, price,
  or availability count beyond what's listed above. Where a spec isn't confirmed,
  leave it out rather than estimating one.
- Filter, sort, and search must be functional, not decorative: load the 28 units
  from the attached `BWEG_Equipment_Data_v1.json` at page init (a `<script>`-embedded
  array or a fetch of the file, either is fine) and have the Category filter, Sort By,
  and the search box actually filter/sort/search that array and re-render the grid.
  This is a real client-side implementation against real data, not a backend
  integration and not a static mock. Field names in the JSON (`group`, `subcategory`,
  `series`, `display_name`, `category_badge`, `fuel_drivetrain`,
  `deck_or_loader_size`, `configuration_notes`, `availability`) map directly to the
  CARD ANATOMY fields above; use `group` for the Category filter's 4 options and
  their live counts.

DELIVERABLE
Produce the full desktop-width Equipment page first, matching PAGE STRUCTURE above,
with all 28 units from CONFIRMED INVENTORY represented as cards. Use the same DRAFT
tagging convention as the homepage prompt for any copy on this page that's new
(the page header band and empty state), since the unit data itself is confirmed
inventory, not draft copy. After that, note in a short comment block any mobile
layout adjustments needed beyond standard stacking.
```
