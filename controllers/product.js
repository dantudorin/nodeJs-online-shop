const Product = require('../models/product');

exports.getDetails = (req, res, next) => {
    Product.findById(req.params.productId)
           .then(product => {
               res.status(200).render('product-details', {
                   path : '/',
                   pageTitle : 'details',
                   product : product
               });
           })
           .catch(error => {
               console.log(error);
               res.status(500).redirect('500');
           })
};

exports.renderProductForm = (req, res, next) => {
    res.status(200).render('product-form', {
        path : '/productForm',
        pageTitle : 'product-form'
    });
};

exports.addProduct = (req, res, next) => {
    const product = new Product({
        _id : Math.random(),
        product_name : req.body.product_name,
        description : req.body.description,
        price : req.body.price,
    });

    product.save()
           .then(product => {
               res.status(200).redirect('/');
           })
           .catch(error => {
               console.log(error);
               res.status(500).redirect('500');
           })
};

exports.getAllProducts = (callBack) => {
    Product.find()
           .then(products => {
                callBack(products);
           })
           .catch(error => {
               console.log(error);
               callBack([]);
           });
}