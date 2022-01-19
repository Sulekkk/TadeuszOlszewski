const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__burger');

const handleMenu = () => {
    menu.classList.toggle('menu-active');
    burger.classList.toggle('is-active');
}

burger.addEventListener('click', handleMenu);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });