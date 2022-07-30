import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".about__swiper", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    breakpoints:{
        1200:{
            slidesPerView: 4,
        },
        992:{
            slidesPerView: 3,
        },
        576:{
            slidesPerView: 2,
        }
    },
  });

  
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const body = document.querySelector('body');

navbarToggler.addEventListener('click', (e)=>{
    navbarToggler.classList.toggle('active')
    navbarCollapse.classList.toggle('active')
    body.classList.toggle('hidden')
})

