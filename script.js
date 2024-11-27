import kijiji from "kijiji-scraper";

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

// Kijiji Scraping
const options = {
    minResults: 20
};

const params = {
    locationId: 1700212, // Waterloo/Kitchener region
    categoryId: 36,
    sortByName: "priceAsc"  // Show the cheapest listings first
};

// Scrape using optional callback parameter
function callback(err, ads) {
    if (!err) {
        // Use the ads array
        for (let i = 0; i < ads.length; ++i) {
            console.log(ads[i].title);
        }
    }
}
kijiji.search(params, options, callback);
