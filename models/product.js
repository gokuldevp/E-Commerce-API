const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: {type: Number, required: true, unique},
    name: { type: String, required: true},
    quantity: {type: Number, required: true},
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);4

module.exports = Product;