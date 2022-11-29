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
let bluredBack = document.querySelector("body")
burger.addEventListener("click", openMenu);
function openMenu(event){
  burgerContent.classList.toggle("burger-content-show");
  bluredBack.classList.toggle("body-blur-show");
 }
 exitBurger.addEventListener("click", closeBurger);
 function closeBurger(event){
   burgerContent.classList.toggle("burger-content-show");
   bluredBack.classList.toggle("body-blur-show");
    }

body.addEventListener("click", (event) => {
     burgerContent.classList.remove("burger-content-show");
     body.classList.remove("body-blur-show");
 }
);
