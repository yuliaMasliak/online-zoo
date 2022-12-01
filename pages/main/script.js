//Active nav link switching
let header = document.getElementById("active-links");
let btns = header.getElementsByClassName("active-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

let footerNav = document.getElementById("active-links-footer");
let footerBtns = footerNav.getElementsByClassName("active-btn");
for (let i = 0; i < footerBtns.length; i++) {
footerBtns[i].addEventListener("click", handleClick);

  function handleClick(event) {
   event.preventDefault();
  };
}

//burger menu
let burger = document.querySelector(".burger");
let burgerContent = document.querySelector(".burger-content");
let exitBurger = document.querySelector(".burger-red-cross");
let headerBlock = document.querySelector("header");
let mainBlock = document.querySelector("main");
let panda = document.querySelector(".panda-img");
let section = document.querySelectorAll("section");
let footer = document.querySelector("footer");

burger.addEventListener("click", openMenu);
function openMenu(event){
  burgerContent.classList.add("burger-content-show");
  headerBlock.classList.add("blur");
  mainBlock.classList.add("blur");
  panda.classList.add("blur");
  footer.classList.add("blur");
  burger.classList.add("blur");
  section.forEach((sec)=>{sec.classList.add("blur")});

 }
 exitBurger.addEventListener("click", closeBurger);
 function closeBurger(event){
   burgerContent.classList.remove("burger-content-show");
   headerBlock.classList.remove("blur");
   mainBlock.classList.remove("blur");
   panda.classList.remove("blur");
   footer.classList.remove("blur");
   burger.classList.remove("blur");
   section.forEach((sec)=>{sec.classList.remove("blur")});
       }

  mainBlock.addEventListener("click", closeOutside);
  footer.addEventListener("click", closeOutside);
  panda.addEventListener("click", closeOutside);
  headerBlock.addEventListener("click", closeOutside);

  section.forEach((sec)=>{sec.addEventListener("click", closeOutside)});

  function closeOutside (event) {
     if (burgerContent.classList.contains("burger-content-show")) {
          burgerContent.classList.remove("burger-content-show");
          mainBlock.classList.remove("blur");
   panda.classList.remove("blur");
   footer.classList.remove("blur");
   headerBlock.classList.remove("blur");
   burger.classList.remove("blur");
   section.forEach((sec)=>{sec.classList.remove("blur")});
        }
      };

      //Slider gallery animal pictures

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gallery");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "grid";
}

//Feedbacks scroll
var range = document.getElementById("range");
var newValue = range.value;

let carousel = document.getElementById("carousel");

range.addEventListener("input", rangeValue);
function rangeValue(event){

  let child = document.querySelector(`#carousel :nth-of-type(${range.value})`);
      child.classList.toggle("pos-1");
}

//Testimonial popup

let feedbackClick = document.querySelectorAll(".feedback-block");
let feedbacksPopup = document.querySelectorAll(".feedback-block-popup");

if(window.screen.width < 641){
for(let i=0; i<feedbackClick.length; i++){
  let point =  feedbackClick[i];
 point.addEventListener("click", showPopup);
  function showPopup(event){

    feedbacksPopup[i].classList.toggle("feedback-block-popup-show");
  }
}}



