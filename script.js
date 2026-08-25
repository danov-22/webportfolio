const storageKeys = { theme: "portfolio-theme" };
const navItems = ["work", "projects", "about", "timeline", "contact"];

function deviceTheme() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "light" : "dark";
}

function externalLink(link) {
  return link.startsWith("http");
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function render() {
  const copy = portfolioContent.en;
  document.documentElement.lang = "en";
  document.title = `${copy.name} — ${copy.role}`;
  document.querySelector('meta[name="description"]').content = copy.hero.supporting;
  setText("brand-name", copy.name);
  navItems.forEach((item) => setText(`nav-${item}`, copy.nav[item]));
  setText("hero-eyebrow", copy.hero.eyebrow);
  setText("hero-heading", copy.hero.headline);
  setText("hero-supporting", copy.hero.supporting);
  setText("hero-current", copy.hero.current);
  setText("hero-scroll", copy.hero.scroll);
  setText("work-label", copy.work.label);
  setText("work-heading", copy.work.heading);
  setText("projects-label", copy.projects.label);
  setText("projects-heading", copy.projects.heading);
  setText("projects-intro", copy.projects.intro);
  setText("currently-label", copy.currently.label);
  setText("about-label", copy.about.label);
  setText("about-heading", copy.about.heading);
  setText("about-copy", copy.about.copy);
  setText("areas-title", copy.about.areas);
  setText("timeline-label", copy.timeline.label);
  setText("timeline-heading", copy.timeline.heading);
  setText("timeline-copy", copy.timeline.copy);
  setText("contact-label", copy.contact.label);
  setText("contact-heading", copy.contact.heading);
  setText("contact-copy", copy.contact.copy);
  setText("footer-name", copy.name);
  setText("footer-year", new Date().getFullYear());
  setText("footer-motto", copy.footer.motto);
  setText("footer-signoff", copy.footer.signoff);

  document.getElementById("work-list").innerHTML = copy.work.items.map((item) => `
    <a class="work-row${externalLink(item.href) ? " has-preview" : ""}" href="${item.href}" ${externalLink(item.href) ? 'target="_blank" rel="noreferrer"' : ""}>
      <span class="work-number">0${copy.work.items.indexOf(item) + 1}</span>
      <span class="work-copy"><span class="work-category">${item.category}</span><strong>${item.title}</strong><span>${item.description}</span></span>
      ${externalLink(item.href) ? `<span class="work-preview" aria-hidden="true"><img src="https://image.thum.io/get/width/1200/crop/750/noanimate/${item.href}" alt="" loading="lazy"></span>` : ""}
      <span class="work-arrow" aria-hidden="true">↗</span>
    </a>`).join("");

  document.getElementById("project-list").innerHTML = copy.projects.items.map((project) => `
    <article class="project-feature">
      <a class="project-preview" href="${project.demo}" target="_blank" rel="noreferrer" aria-label="View ${project.title}">
        <img src="https://image.thum.io/get/width/1200/crop/750/noanimate/${project.demo}" alt="Preview of ${project.title}" loading="lazy">
      </a>
      <div class="project-title-row">
        <div>
          <p class="eyebrow">${project.type}</p>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
        <span class="project-year">${project.year}</span>
      </div>
      <div class="tech-list">${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}</div>
      <div class="project-links">
        <a class="text-link" href="${project.demo}" target="_blank" rel="noreferrer">View project ↗</a>
        ${project.source ? `<a class="text-link" href="${project.source}" target="_blank" rel="noreferrer">Source code ↗</a>` : ""}
      </div>
    </article>`).join("");

  document.getElementById("currently-list").innerHTML = copy.currently.items.map((item) => `<span>${item}</span>`).join("");
  document.getElementById("area-list").innerHTML = copy.about.tags.map((tag) => `<span>${tag}</span>`).join("");
  document.getElementById("timeline-list").innerHTML = copy.timeline.entries.map(([year, detail]) => `<div class="timeline-row"><span>${year}</span><strong>${detail}</strong></div>`).join("");
  const timelineLink = document.getElementById("timeline-link");
  timelineLink.textContent = `${copy.timeline.linkLabel} ↗`;
  timelineLink.href = copy.timeline.link;

  document.getElementById("contact-list").innerHTML = Object.values(copy.contact.actions).filter((action) => action.value && action.href).map((action) => `
    <a class="contact-row" href="${action.href}" ${externalLink(action.href) ? 'target="_blank" rel="noreferrer"' : ""}>
      <strong>${action.label}</strong><span>${action.value}</span><span aria-hidden="true">↗</span>
    </a>`).join("");
  const email = copy.contact.actions.email;
  const instagram = copy.contact.actions.instagram;
  const whatsapp = copy.contact.actions.whatsapp;
  document.getElementById("footer-email").textContent = email.value;
  document.getElementById("footer-email").href = email.href;
  document.getElementById("footer-instagram").href = instagram.href;
  document.getElementById("footer-whatsapp").href = whatsapp.href;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.getElementById("theme-toggle").textContent = theme === "light" ? "◐" : "☼";
  document.getElementById("theme-toggle").setAttribute("aria-label", theme === "light" ? "Use dark theme" : "Use light theme");
}

const savedTheme = localStorage.getItem(storageKeys.theme);
let currentTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : deviceTheme();

render();
applyTheme(currentTheme);

document.getElementById("theme-toggle").addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem(storageKeys.theme, currentTheme);
  applyTheme(currentTheme);
});
