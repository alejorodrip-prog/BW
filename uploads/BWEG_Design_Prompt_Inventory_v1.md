# Blue Water Equipment Group: prompt de diseño, página de Inventory (v1)

Cómo usarlo: pegá el bloque de abajo en una conversación nueva de Claude (o Claude Design), junto con el prompt del home (`BWEG_Design_Prompt_v2.md`) para que comparta paleta, tipografía y el mismo header/nav. No hace falta adjuntar fotos: cada unidad lleva un placeholder de imagen hasta que tengamos fotos reales o generemos las secuencias 360°.

**Qué es esto:** la página interna de Inventory, con las 28 unidades reales del wholegoods audit del cliente, agrupadas igual que en `BWEG_Kubota_Content_Structure_v1.xlsx`. Es la primera página interna con contenido real (no placeholder de texto), para que el resto del sitio deje de depender solo del home.

**Nota sobre la referencia a Florida Coast Equipment:** su página de listado de inventario carga por JavaScript y no pude capturarla en detalle esta vez (el acceso directo al sitio también quedó bloqueado). La estructura de filtros y tarjetas de abajo sigue el patrón estándar de este tipo de sitio de dealer, más el template de campos de "View Details" que sí verificamos en vivo contra floridacoasteq.com/equipment/bx1880. Si más adelante conseguimos ver el listado real, ajustamos el layout de filtros contra eso.

---

```
ROLE
You are the same senior brand and product designer/frontend engineer from the
homepage build. Build the Inventory listing page for Blue Water Equipment Group
(BWEG), as a second page in the same site. Reuse the brand tokens, typography, header
and footer defined in BWEG_Design_Prompt_v2.md exactly. Do not restate or redesign
them here; this prompt only covers what's specific to the Inventory page.

PAGE PURPOSE
This is the page "Inventory" in the header nav links to. It lists every unit BWEG
currently has in stock, filterable by category, so a visitor can go from "what do you
carry" to a specific unit in a few clicks. floridacoasteq.com's own inventory listing
loads client-side and its exact filter widget wasn't captured for this prompt, so
build against the standard pattern below: a category filter plus a card grid. If a
literal capture of FCE's filter UI becomes available later, treat that as the
tie-breaker over this spec.

PAGE STRUCTURE
1) Header and nav: same as the homepage, "Inventory" shown active.
2) Page header band: headline "Browse Our Inventory," short subhead ("28 units in
   stock across Tractors, Mowers, Utility Vehicles, and Attachments. Every one
   available to buy or, where noted, to rent."), breadcrumb "Home / Inventory."
3) Filter bar: four top-level tabs or pills, one per CONFIRMED GROUP below (Tractors,
   Mowers, Utility Vehicles, Attachments), each showing a live count pulled from the
   data. A "Series" dropdown narrows further within the selected group. A keyword
   search box sits alongside the filters. "All" is the default view.
4) Results grid: 3 columns on desktop, 1 on mobile. Each card uses the CARD ANATOMY
   below. Sort by group, then subcategory, then series, matching the order in
   CONFIRMED INVENTORY below, so the grid reads the same way every time regardless of
   filter state.
5) Empty state (for a filter combination with 0 units): "No units currently match
   this filter. Try a different category, or ask our AI Advisor what's available."

CARD ANATOMY (repeats for every unit in the grid)
- Image placeholder: labeled rectangle, aspect ratio matches the eventual product
  photo (4:3), with a short caption identifying what should replace it (e.g. "Photo
  pending: Kubota BX23S, sub-compact TLB"). Never use generic stock photography here.
- Category badge (e.g. "SUB-COMPACT TRACTOR," "STAND-ON MOWER").
- Display name (from CONFIRMED INVENTORY below).
- One-line configuration note where relevant (deck size, fuel/drivetrain, cab or
  open-station).
- Live-availability tag ("In Stock" with the pulsing green dot from MOTION
  PRINCIPLES).
- CTA: "Request a Quote" (primary), matching the client's instruction to drop
  pricing entirely.
- Clicking the card is a placeholder link for now (the individual "View Details"
  page is a separate build; see the field template already confirmed in
  BWEG_Kubota_Content_Structure_v1.xlsx, tab "Product Detail Fields").

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
- Filter and search behavior can be a working client-side mock (filtering the 28
  static units above) rather than a real backend integration.

DELIVERABLE
Produce the full desktop-width Inventory page first, matching PAGE STRUCTURE above,
with all 28 units from CONFIRMED INVENTORY represented as cards. Use the same DRAFT
tagging convention as the homepage prompt for any copy on this page that's new
(the page header band and empty state), since the unit data itself is confirmed
inventory, not draft copy. After that, note in a short comment block any mobile
layout adjustments needed beyond standard stacking.
```
