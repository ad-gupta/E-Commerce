const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id : String,
    url: String,
    detailUrl: String,
    title: {
        shortTitle : String,
        longTitle : String
    },
    price: {
        mrp: Number,
        cost: Number,
        discount: String
    },
    description: String,
    discount: String, 
    tagline: String
})

module.exports = mongoose.model('Product-Deals', productSchema)