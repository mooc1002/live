//let button = document.querySelector('.button');
let burg = document.querySelector('.nav-bar');
let bar = document.querySelectorAll('span');
let nav = document.querySelector('nav');

burg.addEventListener('click', function(){
    nav.classList.toggle('menu-open');

    for (let i = 0; i < bar.length; i++) {
        bar[i].classList.toggle('menu-open');
        
    }
})



