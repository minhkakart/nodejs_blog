const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8edu')
        console.log('Connect successfully!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect }