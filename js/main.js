// slider hotel section
const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  speed: 600,

  // control slider with arrows
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// slider reviews section
const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  speed: 600,

  // control slider with arrows
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// code for map
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [7.89082817, 98.29456143],
      zoom: 15,
      controls: [],
    },
    {
      searchControlProvider: "yandex#search",
      draggable: true,
    }
  );

  myMap.geoObjects.add(
    new ymaps.Placemark(
      [7.89082817, 98.29456143],
      {
        iconCaption: "Grande Hilton Hotel",
      },
      {
        iconColor: "#EC1F46",
      }
    )
  );
}
