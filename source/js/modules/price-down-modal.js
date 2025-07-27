const priceDownSection = document.querySelector('.price-down');
const priceDownContent = document.querySelector('.price-down__content-desc');


const preceDownModal = () => {

  if (!priceDownSection || !priceDownContent) {
    return;
  }

  const modal = priceDownSection.querySelector('.modal')


  const closeBtn = modal.querySelector('.modal__close-btn');

  const handlePriceDownContent = (evt) => {
    const priceDownText = evt.target.textContent;
    const modalContent = priceDownSection.querySelector('.modal__content')
    if (!modalContent) {
      return
    }
    const element = document.createElement('span');
    element.classList.add('element-active');
    element.textContent = priceDownText;
    modalContent.prepend(element);
    modal.classList.add('is-active');
  }

  const handleCloseBtn = () => {
    const element = modal.querySelector('.element-active');
    element.remove();
    modal.classList.remove('is-active');
  }

  priceDownContent.addEventListener('click', handlePriceDownContent);
  closeBtn.addEventListener('click', handleCloseBtn);
}

export {preceDownModal}
