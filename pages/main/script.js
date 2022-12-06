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
let overlay = document.querySelector(".overlay")

burger.addEventListener("click", openMenu);
function openMenu(event){
  burgerContent.classList.add("burger-content-show");
    overlay.classList.add("active");
 }
 exitBurger.addEventListener("click", closeBurger);
 function closeBurger(event){
   burgerContent.classList.remove("burger-content-show");
   overlay.classList.remove("active");
       }

       let blocks = document.querySelectorAll(".feedback-block");

       overlay.addEventListener("click", ()=>{burgerContent.classList.remove("burger-content-show");
       overlay.classList.remove("active");
      firstPopup.classList.remove("feedback-block-popup-show");
      secondPopup.classList.remove("feedback-block-popup-show");
      thirdPopup.classList.remove("feedback-block-popup-show");
          });


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
let child1 = document.querySelector(`#first`);
let child2 = document.querySelector(`#second`);
let child3 = document.querySelector(`#third`);
let child4 = document.querySelector(`#fourth`);
let child5 = document.querySelector(`#fifth`);
let child6 = document.querySelector(`#sixth`);
let child7 = document.querySelector(`#seventh`);
let child8 = document.querySelector(`#eight`);
let child9 = document.querySelector(`#nineth`);
let child10 = document.querySelector(`#tenth`);
let child11 = document.querySelector(`#eleventh`);

range.addEventListener("input", rangeValue);
function rangeValue(event){
if(range.value == 1){
  child1.style.display = "block";
  child2.style.display = "block";
  child3.style.display = "block";
  child4.style.display = "block";
  child5.style.display = "none";
  child6.style.display = "none";
  child7.style.display = "none";
  child8.style.display = "none";
  child9.style.display = "none";
  child10.style.display = "none";
  child11.style.display = "none";
}
if(range.value == 2){
  child1.style.display = "none";
  child2.style.display = "block";
  child3.style.display = "block";
  child4.style.display = "block";
  child5.style.display = "block";
  child6.style.display = "none";
  child7.style.display = "none";
  child8.style.display = "none";
  child9.style.display = "none";
  child10.style.display = "none";
  child11.style.display = "none";
}
if(range.value == 3){
  child1.style.display = "none";
  child2.style.display = "none";
  child3.style.display = "block";
  child4.style.display = "block";
  child5.style.display = "block";
  child6.style.display = "block";
  child7.style.display = "none";
  child8.style.display = "none";
  child9.style.display = "none";
  child10.style.display = "none";
  child11.style.display = "none";
}
if(range.value == 4){
  child1.style.display = "none";
  child2.style.display = "none";
  child3.style.display = "none";
  child4.style.display = "block";
  child5.style.display = "block";
  child6.style.display = "block";
  child7.style.display = "block";
  child8.style.display = "none";
  child9.style.display = "none";
  child10.style.display = "none";
  child11.style.display = "none";
}
if(range.value == 5){
  child1.style.display = "none";
  child2.style.display = "none";
  child3.style.display = "none";
  child4.style.display = "none";
  child5.style.display = "block";
  child6.style.display = "block";
  child7.style.display = "block";
  child8.style.display = "block";
  child9.style.display = "none";
  child10.style.display = "none";
  child11.style.display = "none";
}
if(range.value == 6){
  child1.style.display = "none";
  child2.style.display = "none";
  child3.style.display = "none";
  child4.style.display = "none";
  child5.style.display = "none";
  child6.style.display = "block";
  child7.style.display = "block";
  child8.style.display = "block";
  child9.style.display = "block";
  child10.style.display = "none";
  child11.style.display = "none";
}
if(range.value == 7){
  child1.style.display = "none";
  child2.style.display = "none";
  child3.style.display = "none";
  child4.style.display = "none";
  child5.style.display = "none";
  child6.style.display = "none";
  child7.style.display = "block";
  child8.style.display = "block";
  child9.style.display = "block";
  child10.style.display = "block";
  child11.style.display = "none";
}
if(range.value == 8){
  child1.style.display = "none";
  child2.style.display = "none";
  child3.style.display = "none";
  child4.style.display = "none";
  child5.style.display = "none";
  child6.style.display = "none";
  child7.style.display = "none";
  child8.style.display = "block";
  child9.style.display = "block";
  child10.style.display = "block";
  child11.style.display = "block";
}
}


//Testimonial popup


let firstFeedback = document.getElementById("first");
let secondFeedback = document.getElementById("second");
let thirdFeedback = document.getElementById("third");

let firstPopup = document.getElementById("first-popup");
let secondPopup = document.getElementById("second-popup");
let thirdPopup = document.getElementById("third-popup");

let crossPopupFeedback = document.querySelectorAll(".cross-popup-feedback");



  firstFeedback.addEventListener("click", ()=>{
    if(window.screen.width < 641){
      firstPopup.classList.toggle("feedback-block-popup-show");
      overlay.classList.toggle("active");
  }});

  secondFeedback.addEventListener("click", ()=>{
    if(window.screen.width < 641){
     secondPopup.classList.add("feedback-block-popup-show");
     overlay.classList.add("active");
  }});

  thirdFeedback.addEventListener("click", ()=>{
    if(window.screen.width <= 641){
     thirdPopup.classList.add("feedback-block-popup-show");
     overlay.classList.add("active");
  }});

  for(let cross of crossPopupFeedback){
    cross.addEventListener("click", ()=>{
    cross.closest(".feedback-block-popup").classList.remove("feedback-block-popup-show");
    overlay.classList.remove("active");
  });
  }



