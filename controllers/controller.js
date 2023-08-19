const e = require('express');
const Product = require('../models/product');


// Display a list of products from the database
module.exports.displayProducts = async (req, res) => {
    // Retrieve all products from the database
    Product.find({})
    .then((products) => {
        // Create an array to hold simplified product data
        let productList = [];

        // Iterate through each product and create simplified objects
        products.forEach(element => {
            // Create a simplified product object
            let product = {
                id: element._id,        // Assign the product's ID
                name: element.name,     // Assign the product's name
                quantity: element.quantity  // Assign the product's quantity
            };
            productList.push(product);   // Add the product to the productList
        });

        // Send a JSON response containing the simplified product list
        return res.status(200).json({
            product: productList,   // Include the simplified product list in the response
        });
    })
    .catch((error) => {
        // Handle errors that occur during product retrieval
        return res.status(500).json({
            error: `Error while finding the product in the database: ${error}`,
        });
    })
};



// Create a new product in the database
exports.createProduct = async (req, res) => {
    // Extract the new product details from the request body
    const newProduct = req.body.product;

    // Check if a product with the same name already exists
    Product.findOne({ name: req.body.product.name })
    .then((product) => {
        // If a product with the same name exists
        if (product) {
            return res.status(200).json({
                message: `${req.body.product.name} already exists in the database!!`,
            });
        } else {
            // If a product with the same name doesn't exist, create it
            Product.create(newProduct)
            .then((product) => {
                return res.status(200).json({
                        product: {
                            name: product.name,
                            quantity: product.quantity
                        },
                });
            })
            .catch((error) => {
                // Handle errors that occur during product creation
                return res.status(500).json({
                    error: `An error occurred while creating the product. ${error}`,
                });
            });
        }
    })
    .catch((error) => {
        // Handle errors that occur during product lookup
        return res.status(500).json({
            error: `Error while finding the product in the database ${error}`,
        });
    });
};



// Update the quantity of a product in the database
module.exports.updateQuantity = async (req, res) => {
    // Extract the product ID and quantity from request parameters and query
    const _id = req.params.id;                // Get the product's ID from the URL parameter
    const quantity = parseInt(req.query.number);  // Get the updated quantity from the query parameter

    // Find and update the product's quantity
    Product.findOneAndUpdate({ _id }, { quantity }, { new: true })
    .then((product) => {
        let productDetails = [];
        let message = "Product not available in the database!";

        // If the product exists and was updated successfully
        if (product) {
            // Create an object with updated product details
            productDetails = {
                id: product._id,
                name: product.name,
                quantity: product.quantity
            };
            message = "updated successfully";
        }

        // Send a JSON response with updated product details and message
        return res.status(200).json({
                product: productDetails,   // Include updated product details
                message: message           // Include the update message
        });
    })
    .catch((error) => {
        // Handle errors that occur during finding and updating the product
        return res.status(500).json({
            error: `Error while finding and updating the quantity in the database: ${error}`,
        });
    });
};


// Delete a product from the database
module.exports.deleteProduct = async (req, res) => {
    // Extract the product ID from the request parameter
    const _id = req.params.id;

    // Find and delete the product by ID
    Product.findOneAndDelete({ _id })
    .then((product) => {
        let message = "No product to delete in the database";

        // If a product was found and deleted
        if (product) {
            message = "Product deleted";
        }

        // Send a JSON response with the deletion message
        return res.status(200).json({
                message: message  // Include the deletion message
        });
    })
    .catch((error) => {
        // Handle errors that occur during finding and deleting the product
        return res.status(500).json({
            error: `Error while deleting item from the database: ${error}`,
        });
    });
};
