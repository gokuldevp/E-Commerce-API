// Import the 'express' library to create and manage routes
const express = require('express');

// Create an instance of the Express router
const router = express.Router();


const controller = require('../controllers/controller');


router.get("/",controller)




// Export the router to be used in the main application
module.exports = router;