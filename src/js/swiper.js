const swiper = new Swiper('.partners__slider', {
  // Optional parameters
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 40,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: ".partners__prev",
    nextEl: ".partners__next",
  },
});
