const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
 
const app = express();
const PORT = 8085;
 
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
// Serve static files from the 'html' directory
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'html')));
 
// Serve static files from the 'css' directory with correct MIME type
app.use('/css', express.static(path.join(__dirname, '..', 'Frontend', 'css'), { 'extensions': ['css'], 'Content-Type': 'text/css' }));
 
// Serve static files from the 'images' directory with correct MIME type
app.use('/images', express.static(path.join(__dirname, '..', 'Frontend', 'images'), { 'extensions': ['jpg', 'png', 'gif'], 'Content-Type': 'image/*' }));
 
// In-memory storage for cart (you might replace this with a database)
let cart = [];
 
// Handle POST request to add item to cart
app.post('/add-to-cart', (req, res) => {
    // Extract item information from request body
    const { itemName, itemPrice, quantity } = req.body;
 
    // Add item to cart
    cart.push({ itemName, itemPrice, quantity });
 
    // Send response indicating success
    res.send('Item added to cart successfully');
});
 
// Handle POST request to submit order
app.post('/submit-order', (req, res) => {
    // Process the order (you can implement your logic here)
    // For demonstration purposes, let's clear the cart
    cart = [];
 
    // Send response indicating success
    res.send('Order submitted successfully');
});
 
// Server listening
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});