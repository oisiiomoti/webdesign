// JavaScript
// const open = document.querySelector('#btn-open');
// const close = document.querySelector('#btn-close');
// const menu = document.querySelector('#menu');
// const items = document.querySelectorAll('.item');

// const options = {
//   duration: 600,
//   easing: 'ease',
//   fill: 'forwards',
// }

// const menuOpen = () => {
//   const keyframes = {
//     visibility: ['hidden','visible'],
//     opacity: [0,1]
//   }
//   menu.animate(keyframes,options);

//   items.forEach((item,index) => {
//     item.animate({opacity:[0,1]},{
//       duration: 600,
//       easing: 'ease',
//       fill: 'forwards',
//       delay: index * 200,
//     });
//   });

// }
// open.addEventListener('click',menuOpen);

// const menuClose = () => {
//   const keyframes = {
//     visibility: ['visible','hidden'],
//     opacity: [1,0]
//   }
//   menu.animate(keyframes,options);

//   items.forEach((item) => {
//     item.animate({opacity:[1,0]},{
//       duration: 600,
//       easing: 'ease',
//       fill: 'forwards',
//     });
//   });

// }
// close.addEventListener('click',menuClose);

$(document).ready(function(){
  $('.slider4').bxSlider({
    slideWidth: 400,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10
  });
});

// $(function(){
//     $('.bxslider').bxSlider({
//       mode: 'fade',
//       captions: true,
//       auto: true,
//       speed: 1500,
//       pause: 4000,
//     });
//   });


  // $(function(){
  //   $('.ye2').bxSlider({
  //     mode: 'fade',
  //     captions: true,
  //     auto: true,
  //     speed: 1500,
  //     pause: 4000,
  //   });
  // });