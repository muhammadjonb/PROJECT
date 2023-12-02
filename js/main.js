let menu = document.getElementById("burger_menu");

menu.addEventListener("click", function () {
  document.body.classList.toggle("navbar_menu");
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