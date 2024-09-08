const navbar = document.querySelector(".navbar");
window.addEventListener("scroll" , function (){
  if (this.window.scrollY > 0){
    navbar.classList.add("scrolled");
  } else{
    navbar.classList.remove("scrolled");
  }
}
)

const effect = document.querySelectorAll(".hovered");

effect.forEach(element => {
  element.addEventListener("click", function() {
    element.classList.add("hovered-hover");
  
    setTimeout(() => {
      element.classList.remove("hovered-hover");
    }, 1000);  
  });
});


const hamBtn = document.getElementById("hamburger");
const hamMenu = document.getElementById("ham-menu");

hamBtn.addEventListener("click", function() {
    if (hamMenu.classList.contains("slide-in")) {
        hamMenu.classList.remove("slide-in");
        hamMenu.classList.add("slide-out");
    } else {
        hamMenu.classList.remove("slide-out");
        hamMenu.classList.add("slide-in");
    }
});
