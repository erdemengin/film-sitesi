const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
console.log(arrows)
arrows.forEach((arrow, i)=>{
    arrow.addEventListener("click",function(){
        `translateX(${movieLists[i].computedStyeMap().get("transform")[0].x.value - 300}px)`
    });

    
});


