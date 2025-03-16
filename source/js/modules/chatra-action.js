const actionMenuList = document.querySelector('.action-menu__list');

const initChetraAction = () => {
  if (!actionMenuList) {
    return;
  }

  const actionMenuLinks = actionMenuList.querySelectorAll('.action-menu__link');
  const actionMenuItems = actionMenuList.querySelectorAll('.action-menu__item');

  const handleMenuLink = (evt) => {
    if (!evt) {
      return;
    }
    evt.preventDefault();
    const activeItem = evt.target.closest('.action-menu__item');
    if (activeItem.classList.contains('active-link')) {
      return;
    }
    actionMenuItems.forEach((item) => {
      item.classList.remove('active-link');
    });
    activeItem.classList.add('active-link');
  };

  actionMenuLinks.forEach((item) => {
    item.addEventListener('click', handleMenuLink);
  });
};

export {initChetraAction};
