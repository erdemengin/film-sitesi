const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
console.log(arrows)
arrows.forEach((arrow, i) => {
    arrow.addEventListener("click", function () {
        `translateX(${movieLists[i].computedStyeMap().get("transform")[0].x.value - 300}px)`
    });
});

let toggle_ball = document.querySelector(".toggle-ball");
let r = document.querySelector(":root");
r.style.setProperty('--black','#000');
r.style.setProperty('--white','#fff');

toggle_ball.addEventListener("click", function () {
    if ((r.style.getPropertyValue('--black') != '#000') && (r.style.getPropertyValue('--white') != '#fff')) {
        r.style.setProperty('--black', '#000');
        r.style.setProperty('--white', '#fff');

    } else {
        r.style.setProperty('--black', '#fff');
        r.style.setProperty('--white', '#000');
    }
});
let moon = document.querySelector(".bi-moon-fill");
let sun = document.querySelector(".bi-brightness-high-fill");


toggle_ball.addEventListener("click",function(){
  toggle_ball.classList.toggle("toggle-ball-sun");
});


// slider
$(document).ready(function(){
    $(".SlickCarousel").slick({
      rtl:false, // If RTL Make it true & .slick-slide{float:right;}
      autoplay:true, 
      autoplaySpeed:5000, //  Slide Delay
      speed:800, // Transition Speed
      slidesToShow:4, // Number Of Carousel
      slidesToScroll:1, // Slide To Move 
      pauseOnHover:false,
      appendArrows:$(".Container .Head .Arrows"), // Class For Arrows Buttons
      prevArrow:'<span class="Slick-Prev"></span>',
      nextArrow:'<span class="Slick-Next"></span>',
      easing:"linear",
      responsive:[
        {breakpoint:801,settings:{
          slidesToShow:3,
        }},
        {breakpoint:641,settings:{
          slidesToShow:3,
        }},
        {breakpoint:481,settings:{
          slidesToShow:1,
        }},
      ],
    })
  });


let mobileToggle = document.getElementById("mobile-toggle");
let navbarContent = document.querySelector(".navbar-content");

mobileToggle.addEventListener("click",function(){
  navbarContent.classList.toggle("open-navbar");
});