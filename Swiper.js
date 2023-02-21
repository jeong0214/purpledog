var swiper = new Swiper(".menu_swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  initialSlide: 2,
  centeredSlides: true,
  rewind: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1180: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
  navigation: {
    nextEl: ".menu_next",
    prevEl: ".menu_prev",
  },
});
var swiper = new Swiper(".subscribe_slide_br", {
  rewind: true,
  navigation: {
    nextEl: ".br_next",
    prevEl: ".br_prev",
  },
});
