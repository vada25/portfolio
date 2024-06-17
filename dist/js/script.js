//гамбургер
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      linkClose = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

const closeMenu = () => {
    menu.classList.remove('active');
};

closeElem.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
linkClose.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// подсчет строки под проценты
const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

//появление и прокрутка стрелки вверх    
$(document).ready(function() {

    // Плавное появление стрелки возврата вверх
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    // Плавная прокрутка вверх
    $("a[href^='#up']").click(function(e) {
        e.preventDefault(); // Предотвращение стандартного поведения ссылки
        const _href = $(this).attr("href");
        $('html, body').animate({ scrollTop: $(_href).offset().top }, 'slow');
    });
});