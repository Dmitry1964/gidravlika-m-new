const actionMobileList = document.querySelector('.action-mobile__list');

const initActionMobile = () => {

  if (!actionMobileList) {
    return;
  }

  const actionMobileItems = actionMobileList.querySelectorAll('.action-mobile__item');
  const actionMobileLinks = actionMobileList.querySelectorAll('.action-mobile__link');

  const handleMobileLink = (evt) => {
    evt.preventDefault();
    actionMobileItems.forEach((item) => {
      item.classList.remove('active-mobile');
    });
    const currentItem = evt.target.closest('.action-mobile__item');
    currentItem.classList.add('active-mobile');
  };


  actionMobileLinks.forEach((link) => {
    link.addEventListener('click', handleMobileLink);
  });
};

export {initActionMobile};
