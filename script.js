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


