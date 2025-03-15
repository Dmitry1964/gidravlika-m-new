const vipoUnitImages = document.querySelector('.vipo-unit__slider');

// eslint-disable-next-line no-undef
const vipoUnitSlider = new Swiper(vipoUnitImages, {
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

const handleSwiperBtnClick = () => {
  const optionsBase = document.querySelector('.vipo-unit__options-base');
  const dimensionsElem = document.querySelector('.vipo-unit__options-dimensions');
  const radiusElem = document.querySelector('.vipo-unit__options-radius');
  setTimeout(() => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const baseName = activeSlide.getAttribute('data-base');
    const dimensionsParam = activeSlide.getAttribute('data-dimensions');
    const radiusParam = activeSlide.getAttribute('data-radius');
    optionsBase.textContent = baseName;
    dimensionsElem.textContent = dimensionsParam;
    radiusElem.textContent = radiusParam;
  }, 300);
};

vipoUnitSlider.on('slideChange', handleSwiperBtnClick);

export {vipoUnitSlider};
