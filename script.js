let menuItems = document.getElementById("menu-items");
let hamburger = document.getElementById("hamburger");
hamburger.onclick = openCloseMenu;

function myFunction(x) {
    if (x.matches) {
        menuItems.classList.add("active");
        hamburger.classList.remove("hidden");
    } else {
        menuItems.classList.remove("active");
        hamburger.classList.add("hidden");
    }
}

function openCloseMenu() {
    menuItems.classList.toggle("open");
}

let x = window.matchMedia("(max-width: 1000px)");

myFunction(x);
x.addEventListener("change", myFunction);