// Import the 'express' library to create and manage the application
const express = require('express');

// Define the port number for the server to listen on, using the environment variable or a default value
const port = process.env.PORT || 8000;

// Import the database configuration
const db = require('./config/mongoose');

// Import the 'body-parser' middleware for parsing request bodies
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Use 'body-parser' middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define routes and middleware

// Use the routes defined in the './routes' file for all incoming requests at the '/products' path.
app.use('/products', require('./routes'));

// Start the server and make it listen on the specified port
app.listen(port, (err) => {
    // Check for any errors that occurred during server startup. If an error occurs, log the error message.
    if (err) {
        console.log(`Error while running the server: ${err}`);
    } else {
        // If the server starts successfully, log a success message along with the port number.
        console.log(`Server is running successfully at port ${port}`);
    }
});
