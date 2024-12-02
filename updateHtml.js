// Getting data from json file
import ads from '../data.json' with { type: 'json' };
console.log(ads);

// Updating HTML
for (let i = 0; i < ads.length; i++) {
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
    newListingCardContent.classList.add('listing-card-content');
    let newListingCardContentH1 = document.createElement('h1');
    newListingCardContentH1.innerHTML = `${ads[i].attributes.price}/month`
    let newListingCardContentP = document.createElement('p');
    newListingCardContentP.innerHTML = '2,503 Sq Ft.  •  5 Beds  •  3 Baths'; // UPDATE THIS

    let newListingCardContentAddress = document.createElement('div');
    newListingCardContentAddress.classList.add('listing-card-content-address');
    let newListingCardContentAddressP = document.createElement('p');
    newListingCardContentAddressP.innerHTML = ads[i].attributes.location.mapAddress;


}



