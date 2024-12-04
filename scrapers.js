const kijiji = require("kijiji-scraper");
const fs = require('fs');
let counter = 0;

const options = {
    maxResults: 3
};

const params = {
    locationId: 1700212,  // Waterloo/Kitchener region
    categoryId: 36,  // Room Rentals & Roommates
    sortByName: "dateDesc",  // Most recent listings
    minPrice: 400
};

// Scrape using optional callback parameter
function callback(err, ads) {
    if (!err) {
        let jsonData = JSON.stringify(ads);
        fs.writeFile('data.json', jsonData, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Data written to file');
            counter += 1;
        });
    }
}

kijiji.search(params, options, callback);

if (counter == 1) {
    counter = 0;
    process.exit();
}

//process.exit();

/*fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data written to file');
});*/