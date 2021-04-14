$(document).ready(function () {
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

  // code mobile menu button
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  // code for modal window
  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // code for closign modal window by pressing Esc
  $(document).keyup(function (event) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    if (event.key == "Escape") {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

  //code for phone mask
  $(".phone-mask").inputmask("+7(999)999-99-99");
  //code for modal form processing
  $(".form").each(function () {
    $(this).validate({
      messages: {
        name: {
          minlength: "Name should be at least 3 symbols",
        },
        email: {
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
});

// rule for phone validation
$.validator.addMethod("checkMaskPhone", function (value, element) {
  return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
});
// take our form by class
$(".form").each(function () {
  $(this).validate();
  // put validation for phone input by class
  $.validator.addClassRules({
    "phone-mask": {
      checkMaskPhone: true,
    },
  });
});
