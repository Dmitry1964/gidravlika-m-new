const actionMenuList = document.querySelector('.action-menu__list');
const actionsList = document.querySelector('.actions__list');

const initChetraAction = () => {
  if (!actionMenuList || !actionsList) {
    return;
  }

  const actionMenuLinks = actionMenuList.querySelectorAll('.action-menu__link');
  const actionMenuItems = actionMenuList.querySelectorAll('.action-menu__item');
  const actionsItems = actionsList.querySelectorAll('.actions__item');

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


  actionMenuLinks.forEach((item) => {
    item.addEventListener('click', handleMenuLink);
  });
};

export {initChetraAction};
