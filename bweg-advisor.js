/* BWEG AI Equipment Advisor — rule-based intent matching.
   Data: the 28 confirmed units (BWEG_Equipment_Data_v1.json) + COMPANY_INFO.
   No language model, no network call. Every fact in a reply comes from this file. */
(function () {
  var UNITS = [
    { name: 'Kubota RTV-X (Cab)', group: 'Utility Vehicles', sub: null, series: 'RTV-X Series', badge: 'RTV-X SERIES', fuel: 'Diesel', size: null },
    { name: 'Kubota SZ26', group: 'Mowers', sub: 'Stand-On', series: 'SZ Series', badge: 'STAND-ON', fuel: 'Gas', size: '61" deck' },
    { name: 'Kubota MX6000 (Cab)', group: 'Tractors', sub: 'Utility', series: 'MX Series', badge: 'UTILITY', fuel: 'Diesel / HST', size: null },
    { name: 'Kubota Z726X', group: 'Mowers', sub: 'Gas — Commercial', series: 'Z700 Series', badge: 'GAS — COMMERCIAL', fuel: 'Gas', size: '60" deck' },
    { name: 'Kubota LX2620', group: 'Tractors', sub: 'Compact', series: 'LX Series', badge: 'COMPACT', fuel: 'Diesel / HST', size: null },
    { name: 'Kubota ZD1011', group: 'Mowers', sub: 'Diesel', series: 'ZD Series', badge: 'DIESEL', fuel: 'Diesel', size: '54" deck' },
    { name: 'Kubota L2502', group: 'Tractors', sub: 'Compact', series: 'L Series', badge: 'COMPACT', fuel: 'Diesel / HST', size: null },
    { name: 'Kubota Z422X', group: 'Mowers', sub: 'Gas — Prosumer', series: 'Z400 Series', badge: 'GAS — PROSUMER', fuel: 'Gas', size: '54" deck' },
    { name: 'Kubota Z724X', group: 'Mowers', sub: 'Gas — Commercial', series: 'Z700 Series', badge: 'GAS — COMMERCIAL', fuel: 'Gas', size: '54" deck' },
    { name: 'Kubota Z412', group: 'Mowers', sub: 'Gas — Prosumer', series: 'Z400 Series', badge: 'GAS — PROSUMER', fuel: 'Gas', size: '48" deck' },
    { name: 'Kubota BX23S (TLB)', group: 'Tractors', sub: 'Sub-Compact', series: 'BX Series', badge: 'SUB-COMPACT', fuel: 'Diesel', size: null },
    { name: 'Kubota Z232', group: 'Mowers', sub: 'Gas — Residential', series: 'Z200 Series', badge: 'GAS — RESIDENTIAL', fuel: 'Gas', size: '42" deck' },
    { name: 'Kubota BX2380', group: 'Tractors', sub: 'Sub-Compact', series: 'BX Series', badge: 'SUB-COMPACT', fuel: 'Diesel', size: null },
    { name: 'Kubota Z252', group: 'Mowers', sub: 'Gas — Residential', series: 'Z200 Series', badge: 'GAS — RESIDENTIAL', fuel: 'Gas', size: '54" deck' },
    { name: 'Kubota ZD1211', group: 'Mowers', sub: 'Diesel', series: 'ZD Series', badge: 'DIESEL', fuel: 'Diesel', size: '60" deck' },
    { name: 'Kubota Z452 (EFI)', group: 'Mowers', sub: 'Gas — Prosumer', series: 'Z400 Series', badge: 'GAS — PROSUMER', fuel: 'Gas / EFI', size: '54" deck' },
    { name: 'Kubota Z452 (Turbo EFI)', group: 'Mowers', sub: 'Gas — Prosumer', series: 'Z400 Series', badge: 'GAS — PROSUMER', fuel: 'Gas / EFI', size: '60" deck' },
    { name: 'Kubota LA535 Loader', group: 'Attachments', sub: 'Loaders', series: 'LA Series', badge: 'LOADERS', fuel: null, size: null },
    { name: 'Kubota Z242', group: 'Mowers', sub: 'Gas — Residential', series: 'Z200 Series', badge: 'GAS — RESIDENTIAL', fuel: 'Gas', size: '48" deck' },
    { name: 'Kubota ZD1211L', group: 'Mowers', sub: 'Diesel', series: 'ZD Series', badge: 'DIESEL', fuel: 'Diesel', size: '72" deck' },
    { name: 'Kubota BH77 Backhoe', group: 'Attachments', sub: 'Backhoes', series: 'BH Series', badge: 'BACKHOES', fuel: null, size: null },
    { name: 'Kubota LA1065A Loader', group: 'Attachments', sub: 'Loaders', series: 'LA Series', badge: 'LOADERS', fuel: null, size: null },
    { name: 'Kubota LA526 Loader', group: 'Attachments', sub: 'Loaders', series: 'LA Series', badge: 'LOADERS', fuel: null, size: null },
    { name: 'Kubota LA344S Loader', group: 'Attachments', sub: 'Loaders', series: 'LA Series', badge: 'LOADERS', fuel: null, size: null },
    { name: 'Kubota BX2380', group: 'Tractors', sub: 'Sub-Compact', series: 'BX Series', badge: 'SUB-COMPACT', fuel: 'Diesel', size: null },
    { name: 'Kubota ZG227', group: 'Mowers', sub: 'Gas — Commercial (Grand)', series: 'ZG Series', badge: 'GAS — COMMERCIAL (GRAND)', fuel: 'Gas', size: '60" deck' },
    { name: 'Kubota MX6000', group: 'Tractors', sub: 'Utility', series: 'MX Series', badge: 'UTILITY', fuel: 'Diesel / HST', size: null },
    { name: 'Kubota B2601', group: 'Tractors', sub: 'Compact', series: 'B Series', badge: 'COMPACT', fuel: 'Diesel / HST', size: null }
  ];

  var COMPANY_INFO = {
    locationCount: 2,
    state: '[State]',
    cities: ['[City 1]', '[City 2]'],
    hours: 'Mon–Fri [hours]. Weekend hours vary by location.',
    phone: '(843) 555-0142',
    pages: {
      equipment: { href: 'BWEG%20Equipment.dc.html', label: 'Browse equipment →' },
      rentals: { href: 'BWEG%20Rentals.dc.html', label: 'Go to Rentals →' },
      financing: { href: 'BWEG%20Financing.dc.html', label: 'Apply for financing →' },
      parts: { href: 'BWEG%20Parts.dc.html', label: 'Go to Parts →' },
      service: { href: 'BWEG%20Service.dc.html', label: 'Schedule service →' },
      locations: { href: 'BWEG%20Homepage%20v4.dc.html#locations', label: 'See locations →' },
      contact: { href: 'BWEG%20Homepage%20v4.dc.html#contact', label: 'Contact us →' }
    },
    lines: {
      rentals: 'We rent by the day, week, or month across all four groups — Tractors, Mowers, Utility Vehicles, and Attachments. The specific rental fleet is still being confirmed, so the Rentals page takes your request and we follow up with availability.',
      financing: 'Financing works for purchases and rentals, there is no obligation to check your options, and a local specialist reviews every application. Specific rates, terms, and lender partners are pending confirmation.',
      parts: 'We handle genuine Kubota parts for every group we sell. The live catalog is still pending, so the Parts page takes your model and part details and our parts team confirms availability and price.',
      service: 'Scheduled maintenance, diagnostics and repair, warranty service, and parts installation, by factory-trained technicians. Older units are welcome, whether or not you bought them from us.'
    }
  };

  var GROUP_WORDS = [
    { group: 'Tractors', re: /tractor|acre|pasture|brush hog|till|loader tractor/ },
    { group: 'Mowers', re: /mow|mower|zero[- ]?turn|deck|turf|grass|lawn|stand[- ]?on/ },
    { group: 'Utility Vehicles', re: /utility vehicle|utv|rtv|side by side|side-by-side/ },
    { group: 'Attachments', re: /attachment|implement|loader|backhoe|bucket/ }
  ];
  var SERIES_WORDS = ['rtv-x', 'rtv', 'bx23s', 'bx2380', 'bx', 'b2601', 'lx2620', 'lx', 'l2502', 'mx6000', 'mx', 'zd1211l', 'zd1211', 'zd1011', 'zd', 'zg227', 'zg', 'sz26', 'sz', 'z726x', 'z724x', 'z452', 'z422x', 'z412', 'z252', 'z242', 'z232', 'z700', 'z400', 'z200', 'la1065a', 'la535', 'la526', 'la344s', 'la', 'bh77', 'bh'];

  function spec(u) {
    var bits = [u.badge];
    if (u.fuel) bits.push(u.fuel);
    if (u.size) bits.push(u.size);
    return u.name + ' (' + bits.join(', ') + ')';
  }

  function listUnits(matches, lead, links) {
    var uniq = [], seen = {};
    for (var i = 0; i < matches.length; i++) { if (!seen[matches[i].name]) { seen[matches[i].name] = 1; uniq.push(matches[i]); } }
    var shown = uniq.slice(0, 4).map(spec).join(' · ');
    var more = uniq.length > 4 ? ' Plus ' + (uniq.length - 4) + ' more in that group.' : '';
    return { text: lead + ' ' + shown + '.' + more + ' All of them are in stock today — the Equipment page has the full list and filters.', links: links };
  }

  function answer(question) {
    var q = String(question || '').toLowerCase().trim();
    var P = COMPANY_INFO.pages;
    if (!q) return { text: 'Ask me about a model, a category, rentals, parts, service, financing, or where we are.', links: [] };

    var wantsRent = /\brent|rental|renting\b/.test(q);

    // (1) equipment lookup — model, then series, then group
    var seriesHit = null;
    for (var s = 0; s < SERIES_WORDS.length; s++) {
      if (q.indexOf(SERIES_WORDS[s]) !== -1) { seriesHit = SERIES_WORDS[s]; break; }
    }
    if (seriesHit) {
      var m = UNITS.filter(function (u) {
        var n = u.name.toLowerCase().replace('kubota ', '');
        return n.indexOf(seriesHit) !== -1 || u.series.toLowerCase().indexOf(seriesHit) !== -1;
      });
      if (m.length) {
        if (wantsRent) return { text: 'We rent by the day, week, or month, and that group is one we cover. Which specific units are available to rent is still being confirmed, so send a request on the Rentals page and we\'ll come back with availability. For sale right now we have ' + m.length + ' matching unit(s), including ' + spec(m[0]) + '.', links: [P.rentals, P.equipment] };
        return listUnits(m, 'Here\'s what we have on that:', [P.equipment]);
      }
    }
    for (var g = 0; g < GROUP_WORDS.length; g++) {
      if (GROUP_WORDS[g].re.test(q)) {
        var gm = UNITS.filter(function (u) { return u.group === GROUP_WORDS[g].group; });
        if (wantsRent) return { text: 'Yes, ' + GROUP_WORDS[g].group.toLowerCase() + ' are one of the four groups we rent, by the day, week, or month. The specific rental fleet is still being confirmed, so tell us what you need on the Rentals page and we\'ll follow up with availability. We also have ' + gm.length + ' ' + GROUP_WORDS[g].group.toLowerCase() + ' in stock to buy.', links: [P.rentals, P.equipment] };
        return listUnits(gm, 'We have ' + gm.length + ' ' + GROUP_WORDS[g].group.toLowerCase() + ' in stock. A few of them:', [P.equipment]);
      }
    }

    // (2) rentals
    if (wantsRent) return { text: COMPANY_INFO.lines.rentals, links: [P.rentals] };
    // (3) financing
    if (/financ|apply|rate|payment|loan|credit|lease/.test(q)) return { text: COMPANY_INFO.lines.financing, links: [P.financing] };
    // (4) parts
    if (/\bpart|filter|blade|belt|oil\b/.test(q)) return { text: COMPANY_INFO.lines.parts, links: [P.parts] };
    // (5) service
    if (/service|maintenance|repair|fix|warranty|technician|broken/.test(q)) return { text: COMPANY_INFO.lines.service, links: [P.service] };
    // (6) locations / hours / contact
    if (/where|location|near|address|hours|open|closed|phone|call|contact|reach/.test(q)) {
      return {
        text: 'We have ' + COMPANY_INFO.locationCount + ' locations in ' + COMPANY_INFO.state + ' (' + COMPANY_INFO.cities.join(' and ') + ', cities pending confirmation). ' + COMPANY_INFO.hours + ' You can reach us at ' + COMPANY_INFO.phone + '.',
        links: [P.locations, P.contact]
      };
    }
    // (7) inventory size
    if (/how many|inventory|in stock|available|everything/.test(q)) {
      return { text: 'There are ' + UNITS.length + ' units in stock right now: 8 tractors, 14 mowers, 1 utility vehicle, and 5 attachments. All of them are available to buy.', links: [P.equipment] };
    }
    // (8) fallback — honest, no guessing
    return {
      text: 'I don\'t have an answer for that one yet. I can help with equipment in stock, rentals, parts, service, financing, and our locations and hours. For anything else, call ' + COMPANY_INFO.phone + ' or send us a message and a specialist will follow up.',
      links: [P.contact]
    };
  }

  window.BWEGAdvisor = {
    answer: answer,
    units: UNITS,
    company: COMPANY_INFO,
    greeting: 'Tell me the job — acreage, terrain, budget, buying or renting — and I\'ll pull real units in stock near you.',
    suggestions: ['What tractors do you have?', 'Do you rent mowers?', 'Where are you located?', 'I need a part']
  };
})();
