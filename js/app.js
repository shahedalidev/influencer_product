// Javascript code for influencer product app

const menu = document.getElementById('mobile-menu');
const nav_item = document.getElementById('nav-item');

menu.addEventListener('click',()=>{
    nav_item.classList.toggle('active');
})