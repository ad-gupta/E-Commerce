const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : String,
    price: String,
    Brand: String,
    NSP: String,
    MemoryStorage: String, 
    ScreenSize: String,
    Wirelessnetworktechnology: String,
    imag: Array,
    priceNum : Number,
    qty: Number
})

module.exports = mongoose.model('mobiledatas', productSchema)