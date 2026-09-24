const WA = "https://wa.me/381612321222";
const ENERGY_NOTE = "Energetski tretmani ne zamenjuju lečenje. Ne radimo ih u akutnoj krizi, kod težih psihičkih bolesti ni pod dejstvom alkohola i supstanci.";

// Treatment catalogue - prices from studiobodyrelax.rs
const TREATMENTS = {
  masaze: [
    {
      id: "relax", title: "Relax masaža", sub: "45-120 min", img: "relax.jpg", pos: "0% 100%", zoom: 1.55, wide: true,
      lead: "Spori, ritmični pokreti za dan kad vam je svega dosta.",
      body: `<p>Radimo nežnim, ritmičnim pokretima po celom telu. Disanje se produbi, a ramena i vrat popuste.</p>
             <p>Trajanje birate vi, od 45 do 120 minuta.</p>`,
      prices: [
        { title: "Pojedinačno", rows: [["45 min", "3.000"], ["60 min", "4.000"], ["90 min", "6.500"], ["120 min", "9.000"]] },
        { title: "Paket 2+1 · važi 30 dana", rows: [["45 min", "7.000"], ["60 min", "10.000"], ["90 min", "17.000"], ["120 min", "24.000"]] },
        { title: "Paket 5+1 · važi 90 dana", rows: [["45 min", "15.000"], ["60 min", "17.500"], ["90 min", "33.000"], ["120 min", "45.000"]] }
      ]
    },
    {
      id: "antistres", title: "Antistres masaža", sub: "60 / 90 min", img: "antistres.jpg",
      lead: "Relax tehnika za celo telo, plus ciljani rad na vratu, ramenima i leđima.",
      body: `<p>Počinjemo laganim pokretima da smirimo nervni sistem. Onda prelazimo na terapeutske pokrete tamo gde se stres skuplja: vrat, ramena i leđa.</p>
             <p>Dobra je za ljude koji ceo dan sede, rade pod pritiskom i uveče imaju ukočen vrat.</p>`,
      prices: [
        { title: "Pojedinačno", rows: [["60 min", "4.500"], ["90 min", "7.000"]] },
        { title: "Paket 2+1 · važi 30 dana", rows: [["60 min", "11.000"], ["90 min", "18.000"]] },
        { title: "Paket 5+1 · važi 90 dana", rows: [["60 min", "22.500"], ["90 min", "35.000"]] }
      ]
    },
    {
      id: "terapeutska", title: "Terapeutska masaža leđa", sub: "30 / 45 min", img: "terapeutska.jpg",
      lead: "Za bol i ukočenost u vratu, ramenima i kičmi.",
      body: `<p>Radimo precizno i ciljano, samo leđa ili leđa i noge. Opuštamo mišiće i pokrećemo cirkulaciju.</p>
             <p>Preporučujemo je ljudima koji mnogo sede, rade za računarom ili rade fizički. Po potrebi dodajemo ventuze ili bioenergiju.</p>`,
      prices: [
        { title: "Leđa · 30 min", rows: [["Pojedinačno", "3.000"], ["Paket 3+1 · 45 dana", "10.000"], ["Paket 5+1 · 60 dana", "12.500"]] },
        { title: "Leđa i noge · 45 min", rows: [["Pojedinačno", "3.500"], ["Paket 3+1 · 45 dana", "11.500"], ["Paket 5+1 · 60 dana", "17.500"]] }
      ]
    },
    {
      id: "sportska", title: "Sportska masaža", sub: "50 / 60 min", img: "sportska.jpg",
      lead: "Intenzivna, dubinska masaža za oporavak mišića.",
      body: `<p>Pojačava dotok krvi u mišiće, ubrzava izbacivanje mlečne kiseline i smanjuje rizik od povrede.</p>
             <p>Za sportiste i rekreativce, i za svakog ko je ukočen posle napornog dana.</p>`,
      prices: [{ title: "Cena", rows: [["50 min", "4.500"], ["60 min", "5.000"]], small: "Za ovu masažu nemamo paket" }]
    },
    {
      id: "podlakticom", title: "Deep Relax podlakticom", sub: "60 min", img: "deep-relax.webp",
      lead: "Masaža podlakticom umesto dlanovima, za širi i ravnomeran pritisak.",
      body: `<p>Podlaktica pokriva veću površinu od dlana. Zato su pokreti širi, a pritisak ravnomeran i prijatno težak.</p>
             <p>Dobar izbor ako vam klasična relax masaža deluje previše lagano.</p>`,
      prices: [{ title: "Cena", rows: [["60 min", "4.500"]], small: "Za ovu masažu nemamo paket" }]
    },
    {
      id: "soft", title: "Soft masaža", sub: "60 min", img: "soft.webp",
      lead: "Najblaži dodir koji radimo.",
      body: `<p>Lagani, tečni pokreti bez pritiska. Smiruju disanje i nervni sistem.</p>
             <p>Izaberite je ako ste osetljivi na dodir, iscrpljeni ili vam jak pritisak ne prija.</p>`,
      prices: [{ title: "Cena", rows: [["60 min", "4.500"]], small: "Za ovu masažu nemamo paket" }]
    },
    {
      id: "celulit", title: "Celulit masaža", sub: "30 min", img: "celulit.jpg",
      lead: "Ciljana masaža za butine, zadnjicu, stomak i bokove.",
      body: `<p>Radimo intenzivnim pokretima i pritiskom. Tako ubrzavamo cirkulaciju, razbijamo masne naslage i zatežemo kožu.</p>
             <p>Rezultat vidite posle serije tretmana. Zato imamo pakete 5+1 i 10+4.</p>`,
      prices: [{ title: "Cena", rows: [["30 min", "3.000"], ["Paket 5+1", "12.500"], ["Paket 10+4", "20.000"]], small: "Oba paketa važe 30 dana" }]
    },
    {
      id: "ventuze", title: "Masaža ventuzama", sub: "Vakum terapija", img: "ventuze.webp",
      lead: "Vakum terapija za leđa i celulit.",
      body: `<p>Ventuze stvaraju vakum koji podiže kožu i mišić. Koristimo ih kod bolova u leđima i u tretmanu celulita.</p>
             <p>Terapija ne boli. Posle nje osetite da vam je koža zategnutija.</p>`,
      prices: [{ title: "Cena", rows: [["Uz terapeutsku ili celulit masažu", "na upit"]] }]
    }
  ],

  rituali: [
    {
      id: "sveca", title: "Masaža svećom", sub: "60 min", img: "sveca.jpg", pos: "45% 40%", wide: true,
      lead: "Topao, mirisan vosak sveće umesto ulja.",
      body: `<p>Palimo posebnu masažnu sveću. Istopljeni vosak postaje toplo ulje kojim radimo masažu.</p>
             <p>Pokreti su spori, a koža posle ostaje mekana i mirisna.</p>`,
      prices: [{ title: "Cena", rows: [["60 min", "5.000"]], small: "Za ovaj tretman nemamo paket" }]
    },
    {
      id: "cokolada", title: "Masaža toplom čokoladom", sub: "60 min", img: "cokolada.jpg",
      lead: "Topla čokolada koja hrani kožu.",
      body: `<p>Čokolada hidrira kožu, a blagi pokreti opuštaju telo. Miris ostaje na koži satima posle tretmana.</p>`,
      prices: [{ title: "Cena", rows: [["60 min", "5.000"]], small: "Za ovaj tretman nemamo paket" }]
    },
    {
      id: "piling", title: "Piling masaža", sub: "60 min", img: "piling.webp",
      lead: "Nežna masaža i prirodni piling u jednom tretmanu.",
      body: `<p>Piling skida mrtve ćelije, a masaža pokreće cirkulaciju. Koža posle ostaje glatka i sjajna.</p>
             <p>Posebno je dobra pred leto, pre sunčanja.</p>`,
      prices: [{ title: "Cena", rows: [["60 min", "5.000"]], small: "Za ovaj tretman nemamo paket" }]
    },
    {
      id: "kamen", title: "Masaža vulkanskim kamenom", sub: "Hot stone · 60 min", img: "galerija-2.jpg", pos: "50% 40%",
      lead: "Toplo vulkansko kamenje za duboko opuštanje.",
      body: `<p>Zagrejano kamenje stavljamo na telo i njime radimo masažu. Toplina opušta mišiće i skida napetost.</p>`,
      prices: [{ title: "Cena", rows: [["60 min", "5.000"]], small: "Za ovaj tretman nemamo paket" }]
    },
    {
      id: "sauna", title: "Finska sauna", sub: "30 min", img: "sauna.jpg", pos: "50% 92%",
      lead: "Suva toplota koja izbacuje toksine i opušta telo.",
      body: `<p>Finska sauna radi na suvoj toploti i visokoj temperaturi. Znojenje izbacuje toksine i pokreće cirkulaciju.</p>
             <p>Preporučujemo je pre masaže, dok se mišići zagreju.</p>`,
      prices: [{ title: "Cena", rows: [["30 min", "1.000"]] }]
    }
  ],

  energetski: [
    {
      id: "lavita", title: "La Vita program", sub: "Reset tela i uma", img: "lavita-tretmani.jpg", contain: true, wide: true,
      lead: "Program za hronični stres, napetost u telu i mentalni umor.",
      body: `<ol>
               <li><span><b>Otključavanje tela.</b> Dubokim dodirom i bioenergijom topimo grč u leđima i vratu.</span></li>
               <li><span><b>Smirivanje uma.</b> Radimo na svesnom disanju koje gasi osećaj panike.</span></li>
               <li><span><b>Emotivno pražnjenje.</b> Kroz vođenu meditaciju i rad sa telom oslobađamo potisnut stres.</span></li>
               <li><span><b>Unutrašnji mir.</b> Stabilizujemo nervni sistem, da vas svakodnevni stres manje izbacuje iz koloseka.</span></li>
             </ol>
             <p>Na sesijama dobijate tehnike koje posle koristite sami, kod kuće ili na poslu. Više o programu pročitajte na <a href="http://lavita.co.rs" target="_blank" rel="noopener">lavita.co.rs</a>.</p>
             <p class="note">La Vita tretmani ne zamenjuju lečenje. Ne radimo ih kod teških psihijatrijskih stanja, pod dejstvom alkohola ili supstanci, kod teških srčanih bolesti i nestabilnog pritiska, ni u akutnoj krizi.</p>`,
      prices: [
        { title: "La Vita tretmani · grupe 3-5 osoba", rows: [["60 min", "5.500"], ["Paket 4 dolaska · 30 dana", "16.000"]] },
        { title: "Program i lična meditacija", rows: [["Put tihe transformacije · 75 min", "5.500"], ["Lična meditacija · 20-30 min", "7.500"]], small: "Lična meditacija: anksioznost, umor, nesanica, samopouzdanje, miran san" }
      ]
    },
    {
      id: "bodytouch", title: "BODY TOUCH i bioenergija", sub: "30-60 min", img: "body-touch.jpg",
      lead: "Masaža i energetski rad sa vulkanskim kamenom i kristalima.",
      body: `<p>BODY TOUCH spaja Reiki i ajurvedsku masažu. Radimo ga sa vulkanskim kamenom i kristalima, da otklonimo energetske blokade.</p>
             <p>Bioenergija je rad sa životnom energijom tela. Pokreti su lagani i spori, a napetost i unutrašnji pritisak popuštaju.</p>
             <p class="note">${ENERGY_NOTE}</p>`,
      prices: [{ title: "Cena", rows: [["BODY TOUCH · 60 min", "5.000"], ["Relax masaža sa bioenergijom · 60 min", "4.500"], ["Leđa sa bioenergijom · 30 min", "3.000"]] }]
    },
    {
      id: "cakre", title: "Otvaranje čakri", sub: "Masaža sa kristalima", img: "cakre.jpg",
      lead: "Masaža sa toplim i hladnim kristalima za sedam energetskih centara.",
      body: `<p>Kristale vodimo po telu, a uz njih koristimo aromatična ulja. Cilj je da otpustimo napetost i blokade.</p>
             <p>Izaberite ga ako vam treba mir i energija, a ne rad na bolnim mišićima.</p>
             <p class="note">${ENERGY_NOTE}</p>`,
      prices: [{ title: "Cena", rows: [["Cena", "na upit"]], small: "Pozovite nas ili pošaljite poruku" }]
    },
    {
      id: "meditacija", title: "Vođena meditacija", sub: "Uživo, u grupi", img: "galerija-3.jpg", pos: "8% 50%",
      lead: "Vođena meditacija uživo, u grupi od 3 do 5 osoba.",
      body: `<p>Glasom vas vodimo kroz disanje i opuštanje tela. Ne morate ništa da zamišljate ni da znate unapred. Dovoljno je da slušate.</p>
             <p>Radimo i ličnu meditaciju, za anksioznost, nesanicu ili samopouzdanje.</p>`,
      prices: [{ title: "Uživo vođena meditacija", rows: [["Grupna sesija · 75 min", "1.500"], ["Paket za mesec dana", "4.500"]], small: "Grupe od 3 do 5 osoba" }]
    },
    {
      id: "hipno", title: "Hipnoterapija", sub: "60 min", img: "hipnoterapija.jpg", pos: "50% 30%",
      lead: "Duboko opuštanje u kom je um otvoreniji za promenu.",
      body: `<p>Sve vreme ste svesni i imate kontrolu. Hipnoterapija nije gubitak svesti, nego usmerena pažnja.</p>
             <p>Klijenti dolaze sa ovim temama:</p>
             <ul>
               <li>stres, napetost i anksioznost</li>
               <li>loše navike, poput prejedanja ili pušenja</li>
               <li>samopouzdanje, strahovi i blokade</li>
               <li>fokus, koncentracija i kontrola bola</li>
             </ul>
             <p class="note">Ne radimo hipnoterapiju kod ozbiljnih psihijatrijskih stanja, teških zavisnosti i kod epilepsije bez saglasnosti lekara.</p>`,
      prices: [{ title: "Cena", rows: [["60 min", "4.000"]] }]
    }
  ]
};

const icon = id => `<svg><use href="#${id}"/></svg>`;
const grid = document.getElementById("grid");
let current = null; // id of open treatment

function renderGrid(cat) {
  const list = TREATMENTS[cat];
  current = null;
  grid.innerHTML = list.map((t, i) => `
    <button class="tile${t.wide ? " wide" : ""}${t.contain ? " contain" : ""}" data-id="${t.id}"
            aria-expanded="false" aria-controls="detail" style="animation-delay:${i * 45}ms">
      <img src="images/${t.img}" alt="" loading="lazy" style="${t.pos ? `object-position:${t.pos};` : ""}${t.zoom ? `scale:${t.zoom};transform-origin:0 100%;` : ""}">
      <span class="tile-label">
        <span><strong>${t.title}</strong><small>${t.sub}</small></span>
        <span class="tile-plus">${icon("plus")}</span>
      </span>
    </button>`).join("");
  // odd number of cells on the 2‑column mobile grid → stretch the last tile
  const cells = list.reduce((n, t) => n + (t.wide ? 2 : 1), 0);
  grid.toggleAttribute("data-odd", cells % 2 === 1);
}

function detailHTML(t) {
  const prices = t.prices.map(p => `
    <div class="price-box">
      <h4>${p.title}</h4>
      ${p.rows.map(([a, b]) => `<div class="price-row"><span>${a}</span><span>${b}${/\d/.test(b) ? " rsd" : ""}</span></div>`).join("")}
      ${p.small ? `<small>${p.small}</small>` : ""}
    </div>`).join("");
  const msg = encodeURIComponent(`Zdravo, želim da zakažem: ${t.title}.`);
  return `
    <div class="detail-clip">
      <div class="detail-card">
        <button class="detail-close" aria-label="Zatvori opis">${icon("close")}</button>
        <div class="detail-body">
          <h3>${t.title}</h3>
          <p class="lead">${t.lead}</p>
          ${t.body}
        </div>
        <div class="detail-side">
          ${prices}
          <div class="detail-actions">
            <a class="btn btn-dark" href="${WA}?text=${msg}" target="_blank" rel="noopener">Zakaži ovaj tretman <span class="ico">${icon("arrow")}</span></a>
            <a class="btn btn-outline" href="tel:+381612321222">061 232 1222</a>
          </div>
        </div>
      </div>
    </div>`;
}

// Last tile sharing the clicked tile's row, the panel slides open right after it
function rowEnd(tile) {
  const tiles = [...grid.querySelectorAll(".tile")];
  const top = tile.offsetTop;
  return tiles.filter(t => Math.abs(t.offsetTop - top) < 4).pop();
}

function closeDetail(instant) {
  const panel = grid.querySelector(".detail");
  grid.querySelectorAll(".tile[aria-expanded=true]").forEach(t => t.setAttribute("aria-expanded", "false"));
  current = null;
  if (!panel) return Promise.resolve();
  if (instant) { panel.remove(); return Promise.resolve(); }
  panel.classList.remove("open");
  return new Promise(res => setTimeout(() => { panel.remove(); res(); }, 420));
}

async function openDetail(tile) {
  const cat = document.querySelector(".tab[aria-selected=true]").dataset.cat;
  const t = TREATMENTS[cat].find(x => x.id === tile.dataset.id);
  const existing = grid.querySelector(".detail");
  const sameRow = existing && existing.previousElementSibling === rowEnd(tile);

  if (existing && !sameRow) await closeDetail();
  grid.querySelectorAll(".tile").forEach(x => x.setAttribute("aria-expanded", "false"));
  tile.setAttribute("aria-expanded", "true");
  current = t.id;

  let panel = grid.querySelector(".detail");
  if (panel) {
    panel.innerHTML = detailHTML(t);
    requestAnimationFrame(() => panel.classList.add("open"));
  } else {
    panel = document.createElement("div");
    panel.className = "detail";
    panel.id = "detail";
    panel.innerHTML = detailHTML(t);
    rowEnd(tile).after(panel);
    panel.offsetHeight; // commit the closed state before animating
    requestAnimationFrame(() => panel.classList.add("open"));
  }

  setTimeout(() => {
    const r = panel.getBoundingClientRect();
    const tr = tile.getBoundingClientRect();
    if (r.bottom > innerHeight || tr.top < 80) {
      window.scrollTo({ top: scrollY + tr.top - 100, behavior: "smooth" });
    }
  }, 380);
}

grid.addEventListener("click", e => {
  if (e.target.closest(".detail-close")) {
    const tile = grid.querySelector(`.tile[data-id="${current}"]`);
    closeDetail();
    tile && tile.focus({ preventScroll: true });
    return;
  }
  const tile = e.target.closest(".tile");
  if (!tile) return;
  if (current === tile.dataset.id) closeDetail();
  else openDetail(tile);
});

document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => {
  if (tab.getAttribute("aria-selected") === "true") return;
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", String(t === tab)));
  renderGrid(tab.dataset.cat);
}));

// Re-anchor an open panel after the layout reflows (e.g. rotation)
let rz;
addEventListener("resize", () => {
  clearTimeout(rz);
  rz = setTimeout(() => {
    const panel = grid.querySelector(".detail");
    const tile = current && grid.querySelector(`.tile[data-id="${current}"]`);
    if (!panel || !tile) return;
    panel.remove();
    rowEnd(tile).after(panel);
  }, 150);
});

document.addEventListener("keydown", e => { if (e.key === "Escape" && current) closeDetail(); });

renderGrid("masaze");

// Mobile menu
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const setMenu = open => {
  nav.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Zatvori meni" : "Otvori meni");
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("menu-open")));
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("click", e => { if (!nav.contains(e.target)) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// Active nav link on scroll
const links = [...document.querySelectorAll("#navLinks a")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
links.forEach(l => { const s = document.querySelector(l.getAttribute("href")); s && spy.observe(s); });

// Reveal on scroll
const rev = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => rev.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

// Soft ripple on click
document.addEventListener("pointerdown", e => {
  const el = e.target.closest(".btn, .tab, .quickbar a, .rules summary");
  if (!el) return;
  const r = el.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "ripple";
  dot.style.left = e.clientX - r.left + "px";
  dot.style.top = e.clientY - r.top + "px";
  dot.style.setProperty("--r", Math.ceil(Math.hypot(r.width, r.height) / 6));
  el.append(dot);
  dot.addEventListener("animationend", () => dot.remove());
});

// Back-to-top: visible as soon as the page is scrolled, hidden only at the very top
const toTop = document.getElementById("toTop");
const syncToTop = () => toTop.classList.toggle("show", scrollY > 40);
addEventListener("scroll", syncToTop, { passive: true });
syncToTop();
toTop.addEventListener("click", () => {
  toTop.classList.remove("launch");
  toTop.offsetWidth;
  toTop.classList.add("launch");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Ask / booking form → email to the studio
// FORM_ENDPOINT: URL of the email form service (e.g. Formspree); paste it here once the account is set up.
// While empty, the form falls back to opening the visitor's mail app with the message prefilled.
const FORM_ENDPOINT = "";
const STUDIO_EMAIL = "biljanica34@gmail.com";
const askForm = document.getElementById("askForm");
const msgLabel = document.getElementById("fPorukaLabel");
const msgField = document.getElementById("fPoruka");
const syncType = () => {
  const booking = askForm.tip.value === "zakazivanje";
  msgLabel.textContent = booking ? "Željeni tretman i termin" : "Vaše pitanje";
  msgField.placeholder = booking ? "Npr. relax masaža 60 min, subota posle 15h" : "Napišite šta vas zanima…";
};
askForm.querySelectorAll("input[name=tip]").forEach(r => r.addEventListener("change", syncType));

const checks = {
  ime: v => v.trim().length >= 2,
  prezime: v => v.trim().length >= 2,
  telefon: v => v.replace(/[^\d]/g, "").length >= 8,
  poruka: v => v.trim().length >= 3
};
const validate = input => {
  const ok = checks[input.name](input.value);
  input.closest(".field").classList.toggle("invalid", !ok);
  return ok;
};
Object.keys(checks).forEach(n => askForm[n].addEventListener("input", e => {
  if (e.target.closest(".field").classList.contains("invalid")) validate(e.target);
}));

askForm.addEventListener("submit", e => {
  e.preventDefault();
  const fields = Object.keys(checks).map(n => askForm[n]);
  const bad = fields.filter(f => !validate(f));
  if (bad.length) { bad[0].focus(); return; }
  const booking = askForm.tip.value === "zakazivanje";
  const data = {
    tip: booking ? "Zakazivanje termina" : "Pitanje",
    ime: askForm.ime.value.trim(),
    prezime: askForm.prezime.value.trim(),
    telefon: askForm.telefon.value.trim(),
    poruka: askForm.poruka.value.trim()
  };
  const subject = `${data.tip}: ${data.ime} ${data.prezime}`;
  const body = [
    `Vrsta upita: ${data.tip}`,
    `Ime i prezime: ${data.ime} ${data.prezime}`,
    `Telefon: ${data.telefon}`,
    `${booking ? "Tretman i termin" : "Pitanje"}: ${data.poruka}`
  ].join("\n");

  const done = document.getElementById("askDone");
  const fail = document.getElementById("askFail");
  const submit = askForm.querySelector(".ask-submit");
  done.hidden = fail.hidden = true;

  const success = () => { done.hidden = false; askForm.reset(); syncType(); };

  if (!FORM_ENDPOINT) {
    location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    success();
    return;
  }

  submit.disabled = true;
  submit.classList.add("sending");
  fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, _subject: subject })
  })
    .then(r => { if (!r.ok) throw new Error(r.status); success(); })
    .catch(() => { fail.hidden = false; })
    .finally(() => { submit.disabled = false; submit.classList.remove("sending"); });
});
