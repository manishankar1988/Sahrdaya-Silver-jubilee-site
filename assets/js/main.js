/* ============================================================================
   Sahrdaya Silver Jubilee — behaviour
   Vanilla JS, no dependencies. Reads everything from assets/js/data.js (SITE).
   ========================================================================== */
(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* ---- Icons ----------------------------------------------------------- */
  var ICONS = {
    pillar: '<path d="M4 20h16M6 20V9m12 11V9M9 20V9m6 11V9M3 9h18L12 3 3 9Z"/>',
    book: '<path d="M12 7c-1.6-1.6-4-2-6-2H4v13h2c2 0 4.4.4 6 2 1.6-1.6 4-2 6-2h2V5h-2c-2 0-4.4.4-6 2Zm0 0v13"/>',
    community: '<path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1m1-6h1a5 5 0 0 1 5 5v1"/>',
    cap: '<path d="M12 4 2 9l10 5 10-5-10-5Zm7 7v5c0 1.7-3.1 3-7 3s-7-1.3-7-3v-5"/>',
    spark: '<path d="M12 3v4m0 10v4m9-9h-4M7 12H3m14.5-6.5-2.8 2.8M9.3 14.7l-2.8 2.8m11 0-2.8-2.8M9.3 9.3 6.5 6.5M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/>',
    pin: '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
    phone: '<path d="M21 16.9v2.2a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3 19.2 19.2 0 0 1-5.9-5.9 19.5 19.5 0 0 1-3-8.6A2 2 0 0 1 3.4 3h2.2a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L6.9 10.6a16 16 0 0 0 6 6l1-1.1a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m4 17 5-5 4 4 3-3 4 4"/>',
    arrow: '<path d="M12 19V5m0 0-7 7m7-7 7 7"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4m8-4v4M3 11h18"/>'
  };

  function icon(name, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---- Navigation ------------------------------------------------------ */
  function initNav() {
    var nav = $("#nav");
    if (!nav) return;
    var toggle = $(".nav__toggle", nav);

    function onScroll() {
      nav.classList.toggle("is-stuck", window.scrollY > 24);
      var bar = $("#progress");
      if (bar) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
      }
      var top = $("#toTop");
      if (top) top.classList.toggle("is-visible", window.scrollY > 600);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      $$(".nav__links a", nav).forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    var top = $("#toTop");
    if (top) {
      top.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      });
    }

    // highlight the section currently in view
    var links = $$('.nav__links a[href^="#"]', nav);
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (l) {
      var el = document.getElementById(l.getAttribute("href").slice(1));
      if (el) map[el.id] = l;
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove("is-active"); });
        if (map[e.target.id]) map[e.target.id].classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { spy.observe(document.getElementById(id)); });
  }

  /* ---- Scroll reveal --------------------------------------------------- */
  function initReveal() {
    var items = $$(".reveal");
    if (!items.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var delay = parseInt(e.target.dataset.delay || "0", 10);
        setTimeout(function () { e.target.classList.add("is-in"); }, delay);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  function stagger(container, step) {
    $$(".reveal", container).forEach(function (el, i) {
      el.dataset.delay = String(i * (step || 60));
    });
  }

  /* ---- Countdown ------------------------------------------------------- */
  function initCountdown() {
    var box = $("#countdown");
    if (!box) return;
    var target = new Date(SITE.inauguration.iso).getTime();
    var units = [
      { key: "days", label: "Days" },
      { key: "hours", label: "Hours" },
      { key: "mins", label: "Minutes" },
      { key: "secs", label: "Seconds" }
    ];

    box.innerHTML =
      '<div class="countdown__label">Countdown to the Grand Inauguration</div>' +
      '<div class="countdown__grid">' +
      units.map(function (u) {
        return '<div class="cd"><div class="cd__num" data-cd="' + u.key + '">--</div>' +
          '<div class="cd__unit">' + u.label + "</div></div>";
      }).join("") + "</div>";

    function pad(n) { return n < 10 ? "0" + n : String(n); }

    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        box.innerHTML = '<div class="countdown__label">The Silver Jubilee year is under way</div>' +
          '<p style="color:var(--text-muted);margin-top:6px">Celebrating through to August 2027.</p>';
        clearInterval(timer);
        return;
      }
      var s = Math.floor(diff / 1000);
      var vals = {
        days: Math.floor(s / 86400),
        hours: Math.floor((s % 86400) / 3600),
        mins: Math.floor((s % 3600) / 60),
        secs: s % 60
      };
      Object.keys(vals).forEach(function (k) {
        var el = box.querySelector('[data-cd="' + k + '"]');
        if (el) el.textContent = k === "days" ? String(vals[k]) : pad(vals[k]);
      });
    }

    tick();
    var timer = setInterval(tick, 1000);
  }

  /* ---- Animated counters ----------------------------------------------- */
  function initStats() {
    var host = $("#stats");
    if (!host) return;
    host.innerHTML = SITE.stats.map(function (s) {
      return '<div class="stat reveal"><div class="stat__num" data-to="' + s.value + '" data-suffix="' +
        esc(s.suffix) + '">' + s.value + esc(s.suffix) + '</div><div class="stat__label">' + esc(s.label) + "</div></div>";
    }).join("");
    stagger(host, 90);

    var nums = $$(".stat__num", host);
    if (reduceMotion || !("IntersectionObserver" in window)) {
      nums.forEach(function (n) { n.textContent = n.dataset.to + n.dataset.suffix; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, to = parseFloat(el.dataset.to), t0 = performance.now(), dur = 1400;
        (function step(now) {
          var p = Math.min((now - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(to * eased) + el.dataset.suffix;
          if (p < 1) requestAnimationFrame(step);
        })(t0);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---- Static content blocks ------------------------------------------- */
  function initPillars() {
    var host = $("#pillars");
    if (!host) return;
    host.innerHTML = SITE.pillars.map(function (p) {
      return '<div class="pillar">' + icon(p.icon) + "<b>" + esc(p.title) + "</b><span>" + esc(p.sub) + "</span></div>";
    }).join("");
  }

  function initHighlights() {
    var host = $("#highlights");
    if (!host) return;
    host.innerHTML = SITE.highlights.map(function (h, i) {
      return '<article class="card reveal">' +
        '<div class="card__index">' + (i + 1 < 10 ? "0" : "") + (i + 1) + "</div>" +
        "<h3>" + esc(h.title) + "</h3><p>" + esc(h.text) + "</p></article>";
    }).join("");
    stagger(host, 55);
  }

  function initProgrammes() {
    var host = $("#programmes-grid");
    var filters = $("#programme-filters");
    if (!host) return;

    var scopes = ["All", "Institution", "Department"];
    var current = "All";

    if (filters) {
      filters.innerHTML = scopes.map(function (s) {
        return '<button class="chip' + (s === current ? " is-active" : "") + '" type="button" data-scope="' + s + '">' +
          (s === "All" ? "All programmes" : s + "-level") + "</button>";
      }).join("");
      filters.addEventListener("click", function (ev) {
        var chip = ev.target.closest(".chip");
        if (!chip) return;
        current = chip.dataset.scope;
        $$(".chip", filters).forEach(function (c) { c.classList.toggle("is-active", c === chip); });
        render();
      });
    }

    function render() {
      var list = SITE.programmes.filter(function (p) { return current === "All" || p.scope === current; });
      host.innerHTML = list.map(function (p) {
        return '<article class="card reveal' + (p.featured ? " card--featured" : "") + '">' +
          "<h3>" + esc(p.title) + "</h3><p>" + esc(p.text) + "</p>" +
          '<div class="card__meta"><span class="tag">' + esc(p.category) + "</span>" +
          '<span class="tag">' + esc(p.scope) + "</span>" +
          (p.featured && p.category !== "Flagship"
            ? '<span class="tag" style="color:var(--pink);border-color:rgba(240,171,252,.45)">Featured</span>' : "") +
          "</div></article>";
      }).join("");
      stagger(host, 40);
      initReveal();
    }

    render();
  }

  function initTimeline() {
    var host = $("#timeline");
    if (!host) return;
    host.innerHTML = SITE.timeline.map(function (t) {
      return '<div class="tl-item reveal"><div class="tl-item__label">' + esc(t.label) + "</div>" +
        "<h3>" + esc(t.title) + "</h3><p>" + esc(t.text) + "</p></div>";
    }).join("");
    stagger(host, 90);
  }

  function initCulmination() {
    var host = $("#culmination");
    if (!host) return;
    host.innerHTML = SITE.culmination.map(function (c, i) {
      return '<article class="day-card reveal"><span class="day-card__day">' + (i + 1) + "</span>" +
        "<b>" + esc(c.day) + "</b><h3>" + esc(c.title) + "</h3><p>" + esc(c.text) + "</p></article>";
    }).join("");
    stagger(host, 90);
  }

  /* ---- Flyers + lightbox ----------------------------------------------- */
  function flyerCard(f, i) {
    return '<article class="flyer reveal" data-flyer="' + i + '" tabindex="0" role="button" ' +
      'aria-label="Open poster: ' + esc(f.title) + '">' +
      '<div class="flyer__frame">' +
      (f.tag ? '<span class="flyer__tag">' + esc(f.tag) + "</span>" : "") +
      '<img src="' + esc(f.src) + '" alt="' + esc(f.title) + '" loading="lazy">' +
      '<div class="flyer__placeholder" hidden>' + icon("image") +
      "<span>Drop the image at</span><code>" + esc(f.src) + "</code></div>" +
      "</div><div class=\"flyer__body\">" +
      (f.date ? '<div class="flyer__date">' + esc(f.date) + "</div>" : "") +
      "<h3>" + esc(f.title) + "</h3></div></article>";
  }

  function initFlyers() {
    var hosts = $$("[data-flyers]");
    if (!hosts.length) return;

    hosts.forEach(function (host) {
      var mode = host.dataset.flyers; // "all" | "featured"
      var list = SITE.flyers.slice();
      if (mode === "featured") {
        var feat = list.filter(function (f) { return f.featured; });
        list = (feat.length ? feat : list).slice(0, 3);
      }
      if (!list.length) {
        host.innerHTML = '<div class="empty-note">No flyers published yet. Add one in <code>assets/js/data.js</code>.</div>';
        return;
      }
      host.innerHTML = list.map(function (f) {
        return flyerCard(f, SITE.flyers.indexOf(f));
      }).join("");
      // show a friendly placeholder when the image file is not there yet
      $$(".flyer", host).forEach(function (card) {
        var img = $("img", card);
        var ph = $(".flyer__placeholder", card);
        function missing() {
          if (ph) ph.hidden = false;
          if (img) img.hidden = true;
          card.classList.add("is-empty");
        }
        if (!img) return missing();
        // note: a lazy image that has not started loading also reports complete
        if (img.complete && img.naturalWidth === 0 && img.loading !== "lazy") missing();
        img.addEventListener("error", missing);
      });
      stagger(host, 70);
    });

    var box = $("#lightbox");
    if (!box) return;
    var boxImg = $(".lightbox__img", box);
    var boxCap = $(".lightbox__cap", box);

    function open(f) {
      boxImg.src = f.src;
      boxImg.alt = f.title;
      boxCap.textContent = f.title + (f.date ? " — " + f.date : "");
      box.classList.add("is-open");
      document.body.style.overflow = "hidden";
      $(".lightbox__close", box).focus();
    }

    function close() {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    document.addEventListener("click", function (ev) {
      var card = ev.target.closest("[data-flyer]");
      if (card) {
        var f = SITE.flyers[parseInt(card.dataset.flyer, 10)];
        if (f && !card.classList.contains("is-empty")) open(f);
        return;
      }
      if (ev.target.closest(".lightbox__close") || ev.target === box) close();
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") close();
      var card = document.activeElement && document.activeElement.closest && document.activeElement.closest("[data-flyer]");
      if (card && !card.classList.contains("is-empty") && (ev.key === "Enter" || ev.key === " ")) {
        ev.preventDefault();
        open(SITE.flyers[parseInt(card.dataset.flyer, 10)]);
      }
    });
  }

  /* ---- Text bound to the data file ------------------------------------- */
  function initBindings() {
    $$("[data-bind]").forEach(function (el) {
      var path = el.dataset.bind.split(".");
      var val = SITE;
      for (var i = 0; i < path.length && val != null; i++) val = val[path[i]];
      if (val != null) el.textContent = val;
    });
    $$("[data-bind-href]").forEach(function (el) {
      var path = el.dataset.bindHref.split(".");
      var val = SITE;
      for (var i = 0; i < path.length && val != null; i++) val = val[path[i]];
      if (val != null) el.setAttribute("href", val);
    });
    $$("[data-icon]").forEach(function (el) {
      el.innerHTML = icon(el.dataset.icon) + el.innerHTML;
    });
    var year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---- Boot ------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    initBindings();
    initNav();
    initCountdown();
    initPillars();
    initStats();
    initHighlights();
    initProgrammes();
    initTimeline();
    initCulmination();
    initFlyers();
    initReveal();
  });
})();
