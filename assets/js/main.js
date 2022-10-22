// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [toTopBtn, links, sections] = [
  _("toTopBtn"),
  qsa(".navbar a"),
  qsa("section"),
];

window.addEventListener("scroll", () => {
  toTopBtn.classList.toggle("active", window.scrollY > 500);
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function activeMenu() {
  let sectionLength = sections.length;
  while (--sectionLength && scrollY < sections[sectionLength].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[sectionLength].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".home .content, .heading", {
  delay: 200,
  origin: "left",
});

ScrollReveal().reveal(".home .image", {
  delay: 400,
  origin: "top",
});

ScrollReveal().reveal(".about .content", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".box, .form", {
  delay: 300,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".newsletter .content", {
  delay: 500,
  origin: "bottom",
});

ScrollReveal().reveal(".contact .image, .about .image", {
  delay: 500,
  origin: "left",
});
