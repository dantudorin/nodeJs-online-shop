const productController = require('../controllers/product');

exports.getMainPage = (req, res, next) => {
    productController.getAllProducts(products => {
        console.log(products);
        res.status(200).render('default-page', {
            pageTitle : 'default-page',
            path : '/',
            products : products
        });
    });
};