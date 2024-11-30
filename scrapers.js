const kijiji = require("kijiji-scraper");
const fs = require('fs');

const options = {
    maxResults: 3
};

const params = {
    locationId: 1700185,  // Same as kijiji.locations.ONTARIO.OTTAWA_GATINEAU_AREA.OTTAWA
    categoryId: 27,  // Same as kijiji.categories.CARS_AND_VEHICLES
    sortByName: "priceAsc"  // Show the cheapest listings first
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
        });
    }
}

kijiji.search(params, options, callback);

//process.exit();

/*fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data written to file');
});*/