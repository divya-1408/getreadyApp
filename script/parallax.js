const parallaxImg = document.querySelector(".fade-right");

window.addEventListener("scroll", () => {
  if (!parallaxImg) return;

  const scrollY = window.scrollY;
  parallaxImg.style.transform = `translateY(${scrollY * 0.08}px)`;
});
