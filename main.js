let button = document.querySelector('.button');
let nav = document.querySelector('nav');
let bar = document.querySelectorAll('span');

button.addEventListener('click', function(){
    nav.classList.toggle('menu-open');

    for (let i = 0; i < bar.length; i++) {
        bar[i].classList.toggle('menu-open');
        
    }
})


//smoothScroll
const trigger = document.querySelectorAll('a[href^="#"]');


//for (let i = 0; i < trigger.length; i++) {
//    trigger[i].addEventListener('click', function(e) {
//
//        //ターゲットの位置を取得
//        e.preventDefault();
//        let href = trigger[i].getAttribute('href');
//        let targetElement = document.getElementById(href.replace('#', ''));
//
//        const rect = targetElement.getBoundingClientRect().top;
//        const offset = window.pageYOffset; 
//
//        const gap = 0; // 固定ヘッダー分の高さ
//        const target = rect + offset - gap; 
//
//
//        window.scrollTo({
//            top: target,
//            behavior: 'smooth',
//        });
//    })
//    
//}


