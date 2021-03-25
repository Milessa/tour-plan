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
