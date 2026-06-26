/* =========================================================================
   Renders the whole site from the PORTFOLIO object in data.js.
   You normally never need to touch this file — edit data.js instead.
   ========================================================================= */
(function () {
  const D = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* ---- SVG icons ---- */
  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 016 0C17.3 4.9 18.3 5.2 18.3 5.2c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    playstore: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.8 13 11.2 3.9 20.3a2 2 0 0 1-.3-1V2.8c0-.4.1-.7.3-1zm10.9 10.9 2.7 2.7-9.3 5.3 6.6-8zm3.9-1.3 2.4 1.4c1 .6 1 2 0 2.6l-2.4 1.4-3-3 3-2.4zM5 1.5l9.5 5.4-2.7 2.7L5 1.5z"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
  };

  /* ===================== HERO ===================== */
  $("heroName").textContent = D.profile.name;
  $("heroTagline").textContent = D.profile.tagline;
  $("availability").textContent = D.profile.availability;
  $("heroPhoto").src = D.profile.photo;
  $("heroPhoto").alt = D.profile.name;
  document.title = `${D.profile.name} · ${D.profile.role}`;

  // Resume links
  [$("heroResume"), $("navResume")].forEach((a) => {
    a.href = D.profile.resume;
    a.setAttribute("download", `${D.profile.name.replace(/\s+/g, "_")}_Resume.pdf`);
  });

  // Hero social
  const hs = $("heroSocial");
  const social = [
    { url: D.contact.github, icon: "github", label: "GitHub" },
    { url: D.contact.linkedin, icon: "linkedin", label: "LinkedIn" },
    { url: `mailto:${D.contact.email}`, icon: "email", label: "Email" },
  ];
  social.forEach((s) => {
    if (!s.url) return;
    const a = el("a", null, ICONS[s.icon]);
    a.href = s.url; a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", s.label);
    hs.appendChild(a);
  });

  // Stats
  const statsWrap = $("stats");
  D.stats.forEach((s) => {
    const node = el("div", "stat");
    node.appendChild(el("div", "stat__value", s.value));
    node.appendChild(el("div", "stat__label", s.label));
    statsWrap.appendChild(node);
  });

  /* ===================== ABOUT ===================== */
  $("aboutHeading").textContent = D.about.heading;
  const at = $("aboutText");
  D.about.paragraphs.forEach((p) => at.appendChild(el("p", null, p)));

  /* ===================== SKILLS ===================== */
  const sg = $("skillsGrid");
  D.skills.forEach((cat) => {
    const card = el("div", "skill-card");
    card.appendChild(el("h3", null, cat.group));
    const chips = el("div", "chips");
    cat.items.forEach((i) => chips.appendChild(el("span", "chip", i)));
    card.appendChild(chips);
    sg.appendChild(card);
  });

  /* ===================== EXPERIENCE ===================== */
  const tl = $("timeline");
  D.experience.forEach((job) => {
    const item = el("div", "tl-item");
    const head = el("div", "tl-head");
    head.appendChild(el("span", "tl-role", job.role));
    head.appendChild(el("span", "tl-company", "@ " + job.company));
    if (job.current) head.appendChild(el("span", "badge-now", "Current"));
    item.appendChild(head);

    const meta = el("div", "tl-meta");
    meta.appendChild(el("span", null, "📅 " + job.period));
    if (job.location) meta.appendChild(el("span", null, "📍 " + job.location));
    item.appendChild(meta);

    const ul = el("ul", "tl-points");
    job.points.forEach((p) => ul.appendChild(el("li", null, p)));
    item.appendChild(ul);
    tl.appendChild(item);
  });

  /* ===================== PROJECTS ===================== */
  const pg = $("projectsGrid");
  D.projects.forEach((p) => {
    const card = el("div", "proj");
    const top = el("div", "proj__top");
    const left = el("div");
    left.appendChild(el("div", "proj__name", p.name));
    left.appendChild(el("div", "proj__type", p.type));
    top.appendChild(left);
    if (p.role) top.appendChild(el("span", "proj__role", p.role));
    card.appendChild(top);

    card.appendChild(el("p", "proj__desc", p.description));

    if (p.tags && p.tags.length) {
      const tags = el("div", "proj__tags");
      p.tags.forEach((t) => tags.appendChild(el("span", "chip", t)));
      card.appendChild(tags);
    }

    const links = el("div", "proj__links");
    (p.links || []).forEach((l) => {
      const a = el("a", "proj__link", (ICONS[l.type] || ICONS.link) + "<span>" + l.label + "</span>");
      a.href = l.url; a.target = "_blank"; a.rel = "noopener";
      links.appendChild(a);
    });
    card.appendChild(links);
    pg.appendChild(card);
  });

  /* ===================== EDUCATION / CERTS / ACHIEVEMENTS ===================== */
  const edu = $("educationList");
  D.education.forEach((e) => {
    const c = el("div", "cred-card");
    c.appendChild(el("h4", null, e.degree));
    c.appendChild(el("div", "sub", e.school));
    c.appendChild(el("div", "det", [e.period, e.detail].filter(Boolean).join(" · ")));
    edu.appendChild(c);
  });

  const certs = $("certList");
  D.certifications.forEach((e) => {
    const c = el("div", "cred-card");
    c.appendChild(el("h4", null, e.name));
    c.appendChild(el("div", "sub", e.issuer));
    if (e.detail) c.appendChild(el("div", "det", e.detail));
    certs.appendChild(c);
  });

  const ach = $("achievementsList");
  D.achievements.forEach((a) => ach.appendChild(el("li", null, a)));

  /* ===================== CONTACT ===================== */
  $("contactEmail").href = `mailto:${D.contact.email}`;
  const cl = $("contactLinks");
  const contactItems = [
    { url: `mailto:${D.contact.email}`, icon: "email", text: D.contact.email },
    { url: `tel:${D.contact.phone.replace(/\s/g, "")}`, icon: "phone", text: D.contact.phone },
    { url: D.contact.github, icon: "github", text: "GitHub" },
    { url: D.contact.linkedin, icon: "linkedin", text: "LinkedIn" },
  ];
  contactItems.forEach((c) => {
    if (!c.url) return;
    const a = el("a", null, ICONS[c.icon] + "<span>" + c.text + "</span>");
    a.href = c.url;
    if (c.url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    cl.appendChild(a);
  });

  /* ===================== FOOTER ===================== */
  $("footerName").textContent = `© ${new Date().getFullYear()} ${D.profile.name}`;
  $("footerNote").textContent = D.footer.note;

  /* ===================== ROTATING TITLES ===================== */
  (function rotate() {
    const node = $("rotator");
    const words = D.profile.rotatingTitles;
    let wi = 0, ci = 0, deleting = false;
    function tick() {
      const word = words[wi];
      node.textContent = deleting ? word.slice(0, --ci) : word.slice(0, ++ci);
      let delay = deleting ? 45 : 90;
      if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 350; }
      setTimeout(tick, delay);
    }
    tick();
  })();

  /* ===================== INTERACTIONS ===================== */
  const nav = $("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
    $("toTop").classList.toggle("show", window.scrollY > 500);
  });

  // Mobile menu
  const toggle = $("navToggle"), links = $("navLinks");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => { toggle.classList.remove("open"); links.classList.remove("open"); })
  );

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
  // Stagger-reveal generated cards
  document.querySelectorAll(".skill-card, .proj, .tl-item, .cred-card, .achievements li").forEach((n, i) => {
    n.classList.add("reveal");
    n.style.transitionDelay = (i % 6) * 60 + "ms";
    io.observe(n);
  });

  // Active nav link on scroll
  const sections = [...document.querySelectorAll("main section[id]")];
  const navMap = {};
  document.querySelectorAll(".nav__links a").forEach((a) => (navMap[a.getAttribute("href").slice(1)] = a));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        Object.values(navMap).forEach((a) => a.classList.remove("active"));
        if (navMap[e.target.id]) navMap[e.target.id].classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));
})();
