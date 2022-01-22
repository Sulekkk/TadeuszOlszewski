const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__burger');
const menuItems = document.querySelectorAll('.menu-item')

const handleMenu = () => {
    menu.classList.toggle('menu-active');
    burger.classList.toggle('is-active');
    document.body.classList.toggle('stop-scroll');

    menuItems.forEach(menuItem =>{
      menuItem.addEventListener('click', ()=>{
        menu.classList.remove('menu-active');
        burger.classList.remove('is-active');
        document.body.classList.remove('stop-scroll');
      })
    })
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
    autoplay: {
      delay: 10000,
    },
  });

  console.log(menuItems);