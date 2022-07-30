import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const body = document.querySelector('body');

navbarToggler.addEventListener('click', (e)=>{
    navbarToggler.classList.toggle('active')
    body.classList.toggle('hidden')
})

const accordion = document.querySelectorAll('.accordion-item');
const accordionCollapse = document.querySelectorAll('.accordion-collapse');

if(accordionCollapse.forEach(element => {
    
});){
    accordion.classList.toggle('active')
}