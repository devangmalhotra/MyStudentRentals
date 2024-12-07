const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: '127.0.0.1',  // Localhost since Cloud SQL Proxy is running
    user: 'root',       // Replace with your MySQL username
    password: 'Test@123', // Replace with your MySQL password
    database: 'rental_listings' // Your database name
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database!');
});

// POST route to create a new listing
app.post('/create-listing', (req, res) => {
    const {
        propertyType, bedrooms, bathrooms, price, location,
        description, squareFootage, washerDryer, parkingType,
        airConditioning, photos, video
    } = req.body;

    const query = `
        INSERT INTO listings (
            property_type, bedrooms, bathrooms, price, location,
            description, square_footage, washer_dryer, parking_type,
            air_conditioning, photos, video_url
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [
        propertyType, bedrooms, bathrooms, price, location,
        description, squareFootage, washerDryer, parkingType,
        airConditioning, photos, video
    ], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error creating listing');
        }
        res.status(200).send('Listing created successfully!');
    });
});

// GET route to fetch all listings
app.get('/listings', (req, res) => {
    const query = 'SELECT * FROM listings';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).send('Error fetching listings');
        }
        res.status(200).json(results);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});