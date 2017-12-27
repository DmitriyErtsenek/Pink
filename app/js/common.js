var navMain   = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle');



navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

  }
});


$(document).ready(function(){
  $(".preview__slider").owlCarousel({
    singleItem:true,
    animateOut: 'fadeOut',
    touchDrag: false,
    loop:true, //Зацикливаем слайдер
    margin:10, //Отступ от картино если выводите больше 1
    nav:false, //Отключил навигацию
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:2000, //Время смены слайда
    responsive:{ //Адаптация в зависимости от разрешения экрана
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
});

$(document).ready(function(){
  $(".comments__slider").owlCarousel({
    dots:true,
    singleItem:true,
    autoHeight:true,
    touchDrag: true,
    loop:true, //Зацикливаем слайдер
    margin:10, //Отступ от картино если выводите больше 1
    nav:true, //Отключил навигацию
    autoplay:false, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:7000, //Время смены слайда
    responsive:{ //Адаптация в зависимости от разрешения экрана
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
});

$(document).ready(function(){
  $(".price__slider").owlCarousel({
    dots:true,
    singleItem:true,
    touchDrag:true,
    loop:true, //Зацикливаем слайдер
    margin:0, //Отступ от картино если выводите больше 1
    nav:false, //Отключил навигацию
    autoplay:false, //Автозапуск слайдера
    responsive:{ //Адаптация в зависимости от разрешения экрана
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
});

$('.app-editor__range-input').jRange({
    from: 0,
    to: 100,
    step: 1,
    theme: false,
    showScale: false,
    showLabels: false,
    format: '%s',
    width: 240,
    showLabels: true,
    snap: true
});

$('.app-editor__range-crop-input').jRange({
    from: 0,
    to: 100,
    step: 1,
    theme: false,
    showScale: false,
    showLabels: false,
    format: '%s',
    width: 202,
    showLabels: true,
    snap: true
});

$('.app-editor__range-fill-input').jRange({
    from: 0,
    to: 100,
    step: 1,
    theme: false,
    showScale: false,
    showLabels: false,
    format: '%s',
    width: 202,
    showLabels: true,
    snap: true
});

$('.app-editor__range-contrast-input').jRange({
    from: 0,
    to: 100,
    step: 1,
    theme: false,
    showScale: false,
    showLabels: false,
    format: '%s',
    width: 202,
    showLabels: true,
    snap: true
});






      