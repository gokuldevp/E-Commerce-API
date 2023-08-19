// Import the 'express' library to create and manage routes
const express = require('express');

// Create an instance of the Express router
const router = express.Router();

// Import the controller module
const controller = require('../controllers/controller');

// Define routes and associate them with controller functions

// Route for displaying products
router.get("/", controller.displayProducts);

// Route for creating a new product
router.post("/create", controller.createProduct);

// Route for updating the quantity of a product
router.post("/:id/update_quantity/", controller.updateQuantity);

// Route for deleting a product
router.delete("/:id", controller.deleteProduct);

// Export the router to be used in the main application
module.exports = router;
