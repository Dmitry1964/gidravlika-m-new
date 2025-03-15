
const mksmUnitImages = document.querySelector('.mksm-unit__images');
const mksmUnitInteriors = document.querySelector('.mksm-unit__interiors');

// eslint-disable-next-line no-undef
const mksmUnitSlider = new Swiper(mksmUnitImages, {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});

// eslint-disable-next-line no-undef
const mksmInteriorSlider = new Swiper(mksmUnitInteriors, {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});


export {mksmUnitSlider, mksmInteriorSlider};
