/* =========================================================
   PORTFOLIO SCRIPT
   ========================================================= */
(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA;
  if (!D) {
    console.error("data.js did not load. Check that it is in the same folder.");
    return;
  }

  const $ = (id) => document.getElementById(id);
  const lines = (text) => text.replace(/\n/g, "<br />");

  /* ---------- 1. Navigation ---------- */
  function renderNav() {
    $("navLogo").innerHTML = `${D.nav.logo}<span>.</span>`;
    $("navLinks").innerHTML = [
      ...D.nav.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
    ].join("");
  }

  /* ---------- 2. Hero ---------- */
  function renderHero() {
    const p = D.personal;

    $("masthead").textContent = p.masthead;
    $("heroEyebrow").textContent = p.eyebrow;
    $("heroGreeting").textContent = p.greeting;
    $("heroName").innerHTML = `${p.firstName}<br /><em>${p.lastName.split(" ")[0]}</em> ${p.lastName.split(" ").slice(1).join(" ")}`;
    $("heroHeadline").textContent = p.headline;
    $("heroIntro").textContent = p.intro;

    $("heroImage").src = p.photo;
    $("heroImage").alt = `Portrait of ${p.footerName}`;
    $("placeholderName").textContent = p.footerName;

    $("heroBadge").innerHTML = `<strong>${p.badge.title}</strong>${p.badge.text}`;

    $("factsStrip").innerHTML = D.facts
      .map((f) => `
        <div class="fact">
          <span>${f.label}</span>
          <strong>${f.value}</strong>
        </div>`)
      .join("");
  }

  /* ---------- 3. Education ---------- */
  function renderEducation() {
    const e = D.education;
    $("eduEyebrow").textContent = e.eyebrow;
    $("eduTitle").innerHTML = lines(e.title);
    $("eduLead").textContent = e.lead;

    $("eduGrid").innerHTML = e.items
      .map((item, i) => `
        <article class="card reveal" data-delay="${i + 1}">
          <span class="card__index">${item.index}</span>
          <p class="card__level">${item.level}</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="card__divider"></div>
          <div class="card__meta">
            ${item.meta.map((m) => `<span>${m.label}: <strong>${m.value}</strong></span>`).join("")}
          </div>
        </article>`)
      .join("");
  }

  /* ---------- 4. Certifications & Badges (No Dates) ---------- */
  function renderCertifications() {
    const eduSection = $("education");
    if (!eduSection) return;

    const certData = D.certifications;
    const section = document.createElement("section");
    section.className = "section";
    section.id = "certifications";

    section.innerHTML = `
      <div class="container">
        <div class="section__header reveal">
          <div>
            <span class="eyebrow">${certData.eyebrow}</span>
            <h2 class="section__title">${lines(certData.title)}</h2>
          </div>
          <p class="section__lead">${certData.lead}</p>
        </div>
        <div class="certs-grid">
          <div class="cert-group reveal" data-delay="1">
            <h3>Cisco NetAcad Badges</h3>
            <ul class="cert-list">
              ${certData.ciscoBadges.map(b => `
                <li class="cert-item">
                  <div><strong>${b.name}</strong></div>
                  <span>${b.issuer}</span>
                </li>
              `).join("")}
            </ul>
          </div>
          <div class="cert-group reveal" data-delay="2">
            <h3>TESDA Certificates</h3>
            <ul class="cert-list">
              ${certData.tesdaCerts.map(c => `
                <li class="cert-item">
                  <div><strong>${c.name}</strong></div>
                  <span>${c.issuer}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;

    eduSection.after(section);
  }

  /* ---------- 5. Selected Work (Projects) ---------- */
  function renderWork() {
    const w = D.work;
    $("workEyebrow").textContent = w.eyebrow;
    $("workTitle").innerHTML = lines(w.title);
    $("workLead").textContent = w.lead;

    $("workGrid").innerHTML = w.items
      .map((item, i) => `
        <article class="work-card reveal" data-delay="${(i % 2) + 1}">
          <div class="work-card__thumb" style="background:${item.color};color:${item.textColor};">
            <span class="work-card__thumb-label">${item.type}</span>
            <span class="work-card__thumb-title">${item.title}</span>
          </div>
          <div class="work-card__body">
            <span class="work-card__num">0${i + 1}</span>
            <div>
              <div class="work-card__name">${item.title}</div>
              <div class="work-card__type">${item.desc || item.type}</div>
            </div>
          </div>
        </article>`)
      .join("");
  }

  /* ---------- 6. Skills ---------- */
  function renderSkills() {
    const s = D.skills;
    $("skillsEyebrow").textContent = s.eyebrow;
    $("skillsTitle").innerHTML = lines(s.title);
    $("skillsLead").textContent = s.lead;

    $("skillsGrid").innerHTML = s.items
      .map((item, i) => `
        <article class="skill">
          <span class="skill__num">No. 0${i + 1}</span>
          <div class="skill__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">${item.icon}</svg>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="tags">
            ${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </article>`)
      .join("");
  }

  /* ---------- 7. Contact / Footer & Copy-to-Clipboard ---------- */
  function renderFooter() {
    const c = D.contact;
    const p = D.personal;

    $("contactEyebrow").textContent = c.eyebrow;
    $("contactTitle").textContent = c.title;
    $("contactLead").textContent = c.lead;

    $("footerName").innerHTML = `&copy; <span id="year"></span> ${p.footerName}`;
    $("footerSchool").textContent = p.footerSchool;

    if (D.contactLinks) {
      const socialsContainer = document.createElement("div");
      socialsContainer.className = "footer__socials";

      socialsContainer.innerHTML = D.contactLinks.map(link => {
        let svgPath = "";
        if (link.icon === "gmail") {
          svgPath = '<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>';
        } else if (link.icon === "outlook") {
          svgPath = '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H6V7h4v10zm8 0h-6V7h6v10z"/>';
        } else if (link.icon === "github") {
          svgPath = '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>';
        }

        if (link.copyText) {
          return `<button type="button" class="social-link copy-btn" data-copy="${link.copyText}"><svg viewBox="0 0 24 24">${svgPath}</svg><span class="btn-label">${link.text}</span></button>`;
        } else {
          return `<a href="${link.href}" class="social-link" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24">${svgPath}</svg>${link.text}</a>`;
        }
      }).join("");

      const oldEmail = $("footerEmail");
      if (oldEmail) {
        oldEmail.replaceWith(socialsContainer);
      }

// Attach Click-to-Copy event listeners with Outlook error handler
      document.querySelectorAll(".copy-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const textToCopy = btn.getAttribute("data-copy");

          // Trigger error popup specifically for Outlook
          if (textToCopy.includes("outlook.com")) {
            alert("Error: Failed to process request for this function. Please use Gmail instead. Hello po Ma'am Rima");
            return;
          }

          navigator.clipboard.writeText(textToCopy).then(() => {
            const labelSpan = btn.querySelector(".btn-label");
            const originalText = labelSpan.textContent;
            labelSpan.textContent = "Copied to clipboard!";
            btn.style.borderColor = "var(--accent)";
            setTimeout(() => {
              labelSpan.textContent = originalText;
              btn.style.borderColor = "";
            }, 2000);
          });
        });
      });
    }
  }

  function initNav() {
    const nav = $("nav");
    const toggle = $("navToggle");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll(".nav__links a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  function initImageFallback() {
    const img = $("heroImage");
    const wrap = $("heroImageWrap");
    if (!img) return;
    img.addEventListener("error", () => wrap.classList.add("is-missing"));
    if (img.complete && img.naturalWidth === 0) {
      wrap.classList.add("is-missing");
    }
  }

  function init() {
    renderNav();
    renderHero();
    renderEducation();
    renderCertifications();
    renderWork();
    renderSkills();
    renderFooter();

    initNav();
    initReveal();
    initImageFallback();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();