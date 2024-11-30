const express = require("express");
const kijiji = require("kijiji-scraper");
const app = express();
const port = 3000;

const options = {
    maxResults: 3
};

const params = {
    locationId: 1700212,  // Kitchener/Waterloo
    categoryId: 36,
    sortByName: "priceAsc"  // Show the cheapest listings first
};

// Scrape using optional callback parameter
// API endpoint to serve the ads
app.get("/api/ads", (req, res) => {
    kijiji.search(params, options, (err, ads) => {
        if (!err) {
            const formattedAds = ads.map(ad => ({
                title: ad.title,
                description: ad.description,
                url: ad.url,
                price: ad.attributes.price,
            }));
            res.json(formattedAds); // Send the formatted ads as JSON
        } else {
            res.status(500).json({ error: "Failed to fetch ads" });
        }
    });
});

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});