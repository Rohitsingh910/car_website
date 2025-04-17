// Import the necessary modules
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
