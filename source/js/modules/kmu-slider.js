const kmuUnitImages = document.querySelector('.kmu-unit__slider');

// eslint-disable-next-line no-undef
const kmuUnitSlider = new Swiper(kmuUnitImages, {
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
  const optionsBaseEl = document.querySelector('.kmu-unit__options-base');
  const liftingMaxEl = document.querySelector('.kmu-unit__options-lifting--max');
  const liftingMinEl = document.querySelector('.kmu-unit__options-lifting--min');
  const radiusMaxEl = document.querySelector('.kmu-unit__options-radius--max');
  const radiusMinxEl = document.querySelector('.kmu-unit__options-radius--min');
  const optionsTopEl = document.querySelector('.kmu-unit__options-top');
  const optionsBottomEl = document.querySelector('.kmu-unit__options-bottom');
  setTimeout(() => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const baseName = activeSlide.getAttribute('data-base');
    const liftingMax = activeSlide.getAttribute('data-liftingmax');
    const liftingMin = activeSlide.getAttribute('data-liftingmin');
    const radiusMax = activeSlide.getAttribute('data-radiusmax');
    const radiusMin = activeSlide.getAttribute('data-radiusmin');
    const optionsTop = activeSlide.getAttribute('data-topmax');
    const optionsBottom = activeSlide.getAttribute('data-bottommax');
    optionsBaseEl.textContent = baseName;
    liftingMaxEl.textContent = liftingMax;
    liftingMinEl.textContent = liftingMin;
    radiusMaxEl.textContent = radiusMax;
    radiusMinxEl.textContent = radiusMin;
    optionsTopEl.textContent = optionsTop;
    optionsBottomEl.textContent = optionsBottom;
  }, 300);
};

kmuUnitSlider.on('slideChange', handleSwiperBtnClick);

export {kmuUnitSlider};
