import {modal} from './chatra-action';

const actionMobileList = document.querySelector('.action-mobile__list');

const initActionMobile = () => {

  if (!actionMobileList) {
    return;
  }
  const actionMobileItems = actionMobileList.querySelectorAll('.action-mobile__item');
  const actionMobileLinks = actionMobileList.querySelectorAll('.action-mobile__link');
  const actionItemDescs = actionMobileList.querySelectorAll('.action-mobile__desc');

  const handleMobileLink = (evt) => {
    evt.preventDefault();
    actionMobileItems.forEach((item) => {
      item.classList.remove('active-mobile');
    });
    const currentItem = evt.target.closest('.action-mobile__item');
    currentItem.classList.add('active-mobile');
  };

  const getDescElement = (text) => {
    const modalContent = document.querySelector('.modal__content');
    if (!modalContent) {
      return;
    }

    const elem = document.createElement('span');
    elem.textContent = text;
    elem.classList.add('modal__description');
    modalContent.prepend(elem);
  };


  const handleItemDesc = (evt) => {
    if (!modal) {
      return;
    }
    getDescElement(evt.target.textContent);
    modal.classList.add('is-active');
  };


  actionMobileLinks.forEach((link) => {
    link.addEventListener('click', handleMobileLink);
  });

  actionItemDescs.forEach((item) => {
    item.addEventListener('click', handleItemDesc);
  });
};

export {initActionMobile};
