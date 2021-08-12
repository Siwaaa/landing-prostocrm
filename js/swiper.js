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
const swiperAdvantages = new Swiper('.advantages__body--swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 50,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.advantages__nav-pagination',
    type: 'bullets'
  },
  navigation: {
    prevEl: ".advantages__nav-prev",
    nextEl: ".advantages__nav-next"
  }
});
let perGroup = 2;

if (document.documentElement.clientWidth < 650) {
  perGroup = 1;
}

const swiperTarif = new Swiper('.tarifs__rozniza--swiper', {
  // Optional parameters
  slidesPerView: perGroup,
  slidesPerGroup: perGroup,
  spaceBetween: 30,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.rozniza__nav-pagination',
    type: 'bullets'
  },
  navigation: {
    prevEl: ".rozniza__nav-prev",
    nextEl: ".rozniza__nav-next"
  }
});
const swiperTarifOpt = new Swiper('.tarifs__opt--swiper', {
  // Optional parameters
  slidesPerView: perGroup,
  slidesPerGroup: 1,
  spaceBetween: 30,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.opt__nav-pagination',
    type: 'bullets'
  },
  navigation: {
    prevEl: ".opt__nav-prev",
    nextEl: ".opt__nav-next"
  }
});