const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  speed: 600,
});

// control slider with arrows
document.onkeydown = function (event) {
  if (event.keyCode == 37) {
    // left arrow
    $(".slider-button--prev").click();
  } else if (event.keyCode == 39) {
    // right arrow
    $(".slider-button--next").click();
  } else if (event.keyCode == 38) {
    // right arrow
    alert(
      "Yuppie, congratulations you found the secret message! Type as answer 'I did it'"
    );
  }
};
