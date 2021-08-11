const swiper = new Swiper('.cases__swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 50,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.cases-pagination',
    type: 'bullets'
  },
  navigation: {
    prevEl: ".cases__prev",
    nextEl: ".cases__next"
  }
});