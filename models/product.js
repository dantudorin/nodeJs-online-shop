const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id : Number,
    product_name : String,
    description : String,
    price : Number,
});

module.exports = mongoose.model('Product', productSchema);