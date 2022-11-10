const nav = document.querySelector('.nav');
const crossIcon = document.querySelector('.cross-icon');
const menuIcon =  document.querySelector('.menu-icon');

crossIcon.addEventListener('click',function(){

    nav.classList.toggle('active');
    
})
menuIcon.addEventListener('click',function(){

    nav.classList.toggle('active');
    
})