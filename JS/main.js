// $(window).scroll(function () {
//     if ($(document).scrollTop() > 1000) {
//       $(".nav").addClass("color-change");
//     } else {
//       $(".nav").removeClass("color-change");
//     }
//   });

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

    menu.onclick = () =>{
      menu.classList.toggle('fa-times');
      menu.classList.toggle('active');
    }