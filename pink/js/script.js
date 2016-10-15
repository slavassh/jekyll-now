var navMain = document.querySelector('.main-menu');
var navSwitch = document.querySelector('.main-menu__switch');

navMain.classList.remove('main-menu--no-js');

navSwitch.addEventListener('click', function() {
  if (navMain.classList.contains('main-menu--closed')) {
    navMain.classList.remove('main-menu--closed');
    navMain.classList.add('main-menu--opened');
  } else {
    navMain.classList.add('main-menu--closed');
    navMain.classList.remove('main-menu--opened');
  }
});
