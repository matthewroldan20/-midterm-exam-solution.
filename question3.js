// Import the express module
const express = require('express');

// Initialize an Express app
const app = express();

// Define a route to handle requests to /test
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Write your full name' });
});

// Make the server listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});