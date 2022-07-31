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
const popup = document.querySelectorAll('.popup');
const popupClose = document.querySelectorAll('.popup-close');
const openPopup = document.querySelectorAll('.open-popup');

openPopup.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        popup.forEach(el=>{
            el.classList.remove('active')
        })
        body.classList.toggle('hidden')
        const target = btn.getAttribute("data-target")
        document.querySelector(`#${target}`).classList.add('active')
    })
})
popupClose.forEach(close=>{
    close.addEventListener('click', (e)=>{
        body.classList.toggle('hidden')
        popup.forEach(el => {
            el.classList.remove('active')
        });
    })
})

  
const navbarToggler = document.querySelector('.navbar-toggler');
const body = document.querySelector('body');

navbarToggler.addEventListener('click', (e)=>{
    navbarToggler.classList.toggle('active')
    body.classList.toggle('hidden')
})  
