const menuButton = document.querySelector('.breadcrumbs__btn');
const asideMenu = document.querySelector('.aside-menu');
const asideMenuList = document.querySelector('.aside-menu__list');


const handleMenuButtonClick = () => {
  asideMenu.classList.add('aside-menu--mobile');
};

const closeAsideMenu = () => {
  asideMenu.classList.remove('aside-menu--mobile');
};

if (menuButton) {
  menuButton.addEventListener('click', handleMenuButtonClick);
}

if (asideMenu) {
  asideMenu.addEventListener('click', closeAsideMenu);
}

if (asideMenuList) {
  asideMenuList.addEventListener('click', (evt) => evt.stopPropagation());
}
