let menu = document.getElementById("burger_menu");

menu.addEventListener("click", function () {
  document.body.classList.toggle("navbar_menu");
});
let menu1 = document.getElementById("burger_menu1");

menu1.addEventListener("click", function () {
  document.body.classList.toggle("navbar_menu1");
});


window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("header");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}


let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});