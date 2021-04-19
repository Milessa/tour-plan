document.addEventListener("touchstart", onTouchStart, { passive: true });
$(document).ready(function () {
  new Swiper(".hotel-slider", {
    loop: !0,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    speed: 600,
    keyboard: { enabled: !0, onlyInViewport: !1 },
  }),
    new Swiper(".reviews-slider", {
      loop: !0,
      navigation: {
        nextEl: ".reviews-slider__button--next",
        prevEl: ".reviews-slider__button--prev",
      },
      speed: 600,
      keyboard: { enabled: !0, onlyInViewport: !1 },
    });
  $(".menu-button").on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });
  var e = $('[data-toggle="modal"]'),
    a = $(".modal__close");
  e.on("click", function () {
    var e = $(".modal__overlay"),
      a = $(".modal__dialog");
    e.addClass("modal__overlay--visible"), a.addClass("modal__dialog--visible");
  }),
    a.on("click", function (e) {
      e.preventDefault();
      var a = $(".modal__overlay"),
        o = $(".modal__dialog");
      a.removeClass("modal__overlay--visible"),
        o.removeClass("modal__dialog--visible");
    }),
    $(document).keyup(function (e) {
      var a = $(".modal__overlay"),
        o = $(".modal__dialog");
      "Escape" == e.key &&
        (a.removeClass("modal__overlay--visible"),
        o.removeClass("modal__dialog--visible"));
    }),
    $(".phone-mask").inputmask("+7(999)999-99-99"),
    $(".form").each(function () {
      $(this).validate({
        messages: {
          name: { minlength: "Name should be at least 3 symbols" },
          email: {
            email:
              "Your email address must be in the format of name@domain.com",
          },
        },
      });
    });
}),
  $.validator.addMethod("checkMaskPhone", function (e, a) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(e);
  }),
  $(".form").each(function () {
    $(this).validate(),
      $.validator.addClassRules({ "phone-mask": { checkMaskPhone: !0 } }),
      AOS.init();
  });
