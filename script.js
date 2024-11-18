let menubarList = document.getElementById("menubar-list");
let hamburger = document.getElementById("hamburger");
function myFunction(x) {
    if (x.matches) {
        menubarList.classList.add("hidden");
        hamburger.classList.remove("hidden");
    } else {
        menubarList.classList.remove("hidden");
        hamburger.classList.add("hidden");
    }
}

let x = window.matchMedia("(max-width: 1000px)");

myFunction(x);
x.addEventListener("change", myFunction);