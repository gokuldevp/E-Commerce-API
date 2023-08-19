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
                        product: {
                            name: product.name,
                            quantity: product.quantity
                        },
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


module.exports.updateQuantity = async (req, res) => {
    const _id = req.params.id;
    const quantity = parseInt(req.query.number);
    Product.findOneAndUpdate({_id},{quantity}, { new: true })
    .then((product) => {
        if(product) {

            let productDetails = {
                id: product._id,
                name: product.name,
                quantity: product.quantity
            }
            return res.status(200).json({
                data: {
                    product: productDetails,
                    message: "updated successfully"
                }
            });
        } else {
            return res.status(200).json({
                data: {
                    product: [],
                    message: "Product not available in the database!"
                }
            }); 
        }
    })
    .catch((error) => {
        return res.status(500).json({
            error: `Error while finding and updating the quality in the database ${error}`,
        })
    })
}

module.exports.deleteProduct = async (req, res) => {
    const _id = req.params.id;
    res.send(_id);
}