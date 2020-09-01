const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});

// animation on scroll
window.sr = ScrollReveal(); // from the CDN we've added in HTML

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "10rem", //means it'll go 10rem to the right as its beginning position, then come to original position from there after 600ms
  delay: 600,
});

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "10rem", //means it'll go 10rem to the left as its beginning position
  delay: 600,
});
