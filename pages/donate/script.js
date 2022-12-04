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
let burgerContent = document.getElementById("popup");
let exitBurger = document.querySelector(".burger-red-cross");
let headerBlock = document.querySelector("header");
let mainBlock = document.querySelector("main");
let panda = document.querySelector(".panda-img");
let footer = document.querySelector("footer");

burger.addEventListener("click", openMenu);
function openMenu(event){
  burgerContent.classList.add("burger-content-show");
  blur();
 }
 exitBurger.addEventListener("click", closeBurger);
 function closeBurger(event){
   burgerContent.classList.remove("burger-content-show");
   unBlur()
       }

 function blur(){
  headerBlock.classList.add("blur");
  mainBlock.classList.add("blur");
  panda.classList.add("blur");
  footer.classList.add("blur");
  burger.classList.add("blur");
 }

  function unBlur(){
   headerBlock.classList.remove("blur");
    mainBlock.classList.remove("blur");
    panda.classList.remove("blur");
    footer.classList.remove("blur");
    burger.classList.remove("blur");
  }

  mainBlock.addEventListener("click", closeOutside);
  footer.addEventListener("click", closeOutside);
  panda.addEventListener("click", closeOutside);
  headerBlock.addEventListener("click", closeOutside);



  function closeOutside (event) {
     if (burgerContent.classList.contains("burger-content-show")) {
          burgerContent.classList.remove("burger-content-show");
 unBlur();
        }
      };



//Amount input
let checks = document.querySelectorAll(".check");
let value = document.getElementById("range");
console.log(typeof(range.value));

let amountField = document.getElementById("pay-input-id");
amountField.value = 100;
let valueSighs = document.querySelectorAll(".item");
value.addEventListener("change", ()=>{
  if (range.value === "1"){amountField.value = 5000;
    for(let i of valueSighs){
      i.classList.remove("item-checked");
    }
    valueSighs[0].classList.add("item-checked");
  }
  if (range.value === "2"){amountField.value = 2000;
    for(let i of valueSighs){
      i.classList.remove("item-checked");
    }
    valueSighs[1].classList.add("item-checked");
  }
  if (range.value === "3"){amountField.value = 1000;
    for(let i of valueSighs){
      i.classList.remove("item-checked");
    }
    valueSighs[2].classList.add("item-checked");}
  if (range.value === "4"){amountField.value = 500;
    for(let i of valueSighs){
      i.classList.remove("item-checked");
    }
    valueSighs[3].classList.add("item-checked");}
    if (range.value === "5"){amountField.value = 250;
      for(let i of valueSighs){
        i.classList.remove("item-checked");
      }
      valueSighs[4].classList.add("item-checked");}
    if (range.value === "6"){amountField.value = 100;
      for(let i of valueSighs){
        i.classList.remove("item-checked");
      }
      valueSighs[5].classList.add("item-checked");}
    if (range.value === "7"){amountField.value = 50;
      for(let i of valueSighs){
        i.classList.remove("item-checked");
      }
      valueSighs[6].classList.add("item-checked");}
    if (range.value === "8"){amountField.value = 25;
      for(let i of valueSighs){
        i.classList.remove("item-checked");
      }
      valueSighs[7].classList.add("item-checked");}

})


for(let i of checks){
  if(i.checked){
    amountField.setAttribute("value", `${i.value}`);
  }

}
