let btnContainer = document.getElementById("active-links");
let btns = btnContainer.getElementsByClassName("active-link");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active-nav");
    current[0].className = current[0].className.replace(" active-nav", "");
    this.className += " active-nav";
  });
}