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

let cardsContainer = document.getElementById("cards");

let newListingCardDiv = document.createElement('div');
newListingCardDiv.classList.add('listing-card');
            
let newListingCardImgDiv = document.createElement('div');
newListingCardImgDiv.classList.add('listing-card-img');
            
let newListingImg = document.createElement('img');
newListingImg.src = ads[i].image;
newListingImg.alt = "Image of housing location";

let newViewListingButton = document.createElement('a');
newViewListingButton.classList.add('view-listing-button');
newViewListingButton.href = ads[i].url;
newViewListingButton.target = '_blank';
newViewListingButton.innerHTML = 'View Listing';

let newListingCardContent = document.createElement('div');

