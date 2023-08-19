const Product = require('../models/product');


module.exports.displayProducts = async (req, res) => {
    Product.find({})
    .then((products) => {
        let productList = []
        products.forEach(element => {
            let product = {
                id: element._id,
                name: element.name,
                quantity: element.quantity
            }
            productList.push(product)
        });

        
        return res.status(200).json({
            data: {
                product: productList,
            },
        })
    })
    .catch((error) => {
        return res.status(500).json({
            error: `Error while finding the product in the database ${error}`,
        })
    })
}


exports.createProduct = async (req, res) => {
    const newProduct = req.body.product

    Product.findOne({name: req.body.product.name})
    .then((product) => {
        if(product){
            return res.status(301).json({
                error: `${req.body.product.name} already exists`,
            })
        } else {
            Product.create(newProduct)
            .then((product) => {
                return res.status(200).json({
                    data: {
                        product: newProduct,
                    },
                })
            })
            .catch((error) => {
                return res.status(500).json({
                    error: `An error occurred while creating the product. ${error}`,
                });
            })
        }
    })
    .catch((error) => {
        return res.status(500).json({
            error: `Error while finding the product in the database ${error}`,
        })
    })
};


module.exports.updateProduct = async (req, res) => {
    
}