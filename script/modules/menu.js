const menu = document.querySelector('.header__item--menu');
// const navMenu = document.querySelector('.header__item--btns');
const elemOfMenu = document.querySelector('.header__list-nav');
const callBack = document.querySelector('.header__item--call');
const headerImage = document.querySelector('.header__image');

const overlay = document.createElement('div');

let opacity = 0;

const hideOverlay = () => {
    opacity += 0.02
    elemOfMenu.style.opacity = opacity;
    callBack.style.opacity = opacity;
    if( opacity > 0 && opacity <= 1) {
        requestAnimationFrame(hideOverlay)
    } 
}


menu.addEventListener('click', () => {
    setTimeout(hideOverlay);
    elemOfMenu.classList.toggle('header__flex');
    callBack.classList.toggle('header__flex');
    if (headerImage.getAttribute('src') === 'css/header/image/menu_burger.png'){
        headerImage.setAttribute('src', 'css/header/image/close.svg');
    } else {
        headerImage.setAttribute('src', 'css/header/image/menu_burger.png');
    }
});

