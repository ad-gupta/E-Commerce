const mongoose = require('mongoose')

const connectDb = async ()=> {
    mongoose.connect('mongodb://127.0.0.1:27017/ECommerce').then(()=> {
        console.log('Connected to DB')
    }).catch((err)=> {
        console.log(err)
    })
}

module.exports = connectDb