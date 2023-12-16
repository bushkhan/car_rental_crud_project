const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    owner: String,
    model: String,
    seats: Number,
    available: String
})

const CarModel = mongoose.model('cars', CarSchema)

module.exports = CarModel