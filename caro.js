
const carousel = document.querySelector(".carosel");
let arrowIcons = document.querySelectorAll(".pointer"); 

let firstImg = carousel.querySelectorAll("img")[0]
let isDragStart = false, prevPageX, prevScrollLeft
let firstImageWidth = firstImg.clientWidth + 14
let scrollWidthCaro = carousel.scrollWidth - carousel.clientWidth

const showHiddenIcons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidthCaro ? "none" : "block";
} 

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth
        setTimeout(()=> showHiddenIcons(), 60) 
    })
}) 

const dragStart = (e)=>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft
    
}

const dragging = (e)=>{
    if(!isDragStart){
        return;
    }
    e.preventDefault();
    carousel.classList.add("dragging")
    let positionDiff =  e.pageX - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHiddenIcons()
}

const dragEnd = (e) => {
    isDragStart = false
    carousel.classList.remove("dragging")
    
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragEnd);

