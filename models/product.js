// Import the 'mongoose' library for working with MongoDB
const mongoose = require('mongoose');

// Define the schema for the 'Product' collection in the database
const productSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },          // Name of the product
    quantity: { type: Number, required: true },      // Quantity of the product available
}, { timestamps: true });  // Enable automatic timestamp generation for creation and updates

// Create a 'Product' model using the defined schema
const Product = mongoose.model('Product', productSchema);

// Export the 'Product' model to be used in other parts of the application
module.exports = Product;
