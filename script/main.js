// Navbar toggle
const navToggler = document.querySelector(".navbar-toggler");
const navCollapse = document.querySelector("#navbarScroll");
navToggler && navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("show");
});

// Auto slider
const slides = document.querySelectorAll(".carousel-item");
let currentSlide = 0;
function showSlide(idx) {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === idx);
  });
}
if (slides.length) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);
}

// Dropdowns
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('show');
  });
});
