const offerInfoList = document.querySelector('.offer__info-list');
const offerButtonsList = document.querySelector('.offer__buttons');
const offerInfoElements = offerInfoList.querySelectorAll('.offer__info-item');
const offerButtonElements = offerButtonsList.querySelectorAll('.offer__button');
const buttonPrev = document.querySelector('[data-button="button-prev"]');
const buttonNext = document.querySelector('[data-button="button-next"]');

const BUTTON_PREV = 'button-prev';
const BUTTON_NEXT = 'button-next';
let count = 0;

const changeInfoElement = (indexBtn) => {
  if (offerInfoElements.length > 0) {
    offerInfoElements.forEach((item) => {
      item.classList.remove('offer__info-item--current');
    });
    offerInfoElements.forEach((item, index) => {
      if (index === indexBtn) {
        item.classList.add('offer__info-item--current');
      }
    });
  }
};

const onOfferButtonClick = (evt, index) => {
  const buttonEl = evt.target.closest('.offer__button');
  if (offerButtonElements.length > 0) {
    offerButtonElements.forEach((item) => {
      item.classList.remove('offer__button--current');
    });
    buttonEl.classList.add('offer__button--current');
    changeInfoElement(index);
  }
};

const initOffer = () => {
  if (offerInfoElements.length > 0) {
    offerInfoElements[0].classList.add('offer__info-item--current');
    offerButtonElements[0].classList.add('offer__button--current');
  }

  offerButtonElements.forEach((item, index) => {
    item.addEventListener('click', (evt) => onOfferButtonClick(evt, index));
  });

  const getCount = (data) => {
    if (data === BUTTON_NEXT) {
      count = count + 1;
    }
    if (data === BUTTON_PREV) {
      count = count - 1;
    }
    return count;
  };

  const onBtnPrevClick = (evt) => {
    const buttonEl = evt.target.closest('button');
    if (buttonEl) {
      buttonNext.removeAttribute('disabled');
      buttonNext.classList.remove('offer__slider-btn--disabled');
      const data = buttonEl.getAttribute('data-button');
      const countPrev = getCount(data);
      if (countPrev === 0) {
        buttonPrev.setAttribute('disabled', true);
        buttonPrev.classList.add('offer__slider-btn--disabled');
      }
      changeInfoElement(countPrev);
    }
  };

  const onBtnNextClick = (evt) => {
    const buttonEl = evt.target.closest('button');
    if (buttonEl) {
      buttonPrev.removeAttribute('disabled');
      buttonPrev.classList.remove('offer__slider-btn--disabled');
      const data = buttonEl.getAttribute('data-button');
      const countNext = getCount(data);
      if (countNext === offerInfoElements.length - 1) {
        buttonNext.setAttribute('disabled', true);
        buttonNext.classList.add('offer__slider-btn--disabled');
      }
      changeInfoElement(countNext);
    }
  };

  buttonPrev.setAttribute('disabled', true);
  buttonPrev.classList.add('offer__slider-btn--disabled');

  buttonPrev.addEventListener('click', (evt) => onBtnPrevClick(evt));
  buttonNext.addEventListener('click', (evt) => onBtnNextClick(evt));

};

export {
  initOffer
};
