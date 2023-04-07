const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    name : String,
    price: String,
    priceNum : Number,
    brand: String,
    NSP: String,
    MemoryStorage: String, 
    ScreenSize: String,
    Wirelessnetworktechnology: String,
    imag: Array,
    qty: Number
})

module.exports = mongoose.model('cart', cartSchema)