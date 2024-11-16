let navbar = document.getElementById("navbar");
function myFunction(x) {
    if (x.matches) {
        navbar.classList.add("hidden");
    } else {
        navbar.classList.remove("hidden");
    }
}

let x = window.matchMedia("(max-width: 1000px)");

myFunction(x);
x.addEventListener("change", myFunction);