const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  speed: 600,

  // control slider with arrows
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
