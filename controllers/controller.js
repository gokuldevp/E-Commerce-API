const Product = require('../models/product');


module.exports.displayProducts = async (req, res) => {
    Product.find({})
    .then((product) => {
        if(product){
            return res.send(product);
        } else {
            return res.send("No Product found");
        } 
    })
    .catch((error)=> {
        return res.send(error);
    })
}