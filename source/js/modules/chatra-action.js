const actionMenuList = document.querySelector('.action-menu__list');
const actionsList = document.querySelector('.actions__list');
const modal = document.querySelector('.modal');

const initChetraAction = () => {
  if (!actionMenuList || !actionsList) {
    return;
  }

  const actionMenuLinks = actionMenuList.querySelectorAll('.action-menu__link');
  const actionMenuItems = actionMenuList.querySelectorAll('.action-menu__item');
  const actionsItems = actionsList.querySelectorAll('.actions__item');
  const actionItemDescs = actionsList.querySelectorAll('.actions__item-desc');


  const handleMenuLink = (evt) => {
    if (!evt) {
      return;
    }
    evt.preventDefault();
    const activeMenuItem = evt.target.closest('.action-menu__item');
    const dataActiveMenuItem = activeMenuItem.getAttribute('data-action');

    if (activeMenuItem.classList.contains('active-link')) {
      return;
    }
    actionMenuItems.forEach((item) => {
      item.classList.remove('active-link');
    });

    activeMenuItem.classList.add('active-link');
    actionsItems.forEach((item) => {
      item.classList.remove('active-item');
      if (item.getAttribute('data-action') === dataActiveMenuItem) {
        item.classList.add('active-item');
      }
    });
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

  const handleCloseBtn = () => {
    const elem = modal.querySelector('.modal__description');
    modal.classList.remove('is-active');
    elem.remove();
  };


  actionMenuLinks.forEach((item) => {
    item.addEventListener('click', handleMenuLink);
  });

  actionItemDescs.forEach((item) => {
    item.addEventListener('click', handleItemDesc);
  });

  if (modal) {
    const modalCloseBtn = modal.querySelector('.modal__close-btn');
    modalCloseBtn.addEventListener('click', handleCloseBtn);
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        handleCloseBtn();
      }
    });
  }
};

export {
  initChetraAction, modal
};
