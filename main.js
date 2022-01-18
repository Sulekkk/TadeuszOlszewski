const burger = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu__burger');

const handleMenu = () => {
    menu.classList.toggle('menu-active');
}

burger.addEventListener('click', handleMenu);