const fadeElements = document.querySelectorAll(
  ".fade-left, .fade-right"
);

const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

fadeElements.forEach(el => fadeObserver.observe(el));
