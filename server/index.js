const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/Cars.js')
const CarModel = require("./models/Cars.js")

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post('/createCar', (req, res) => {
    UserModel.create(req.body)
        .then(cars => res.json(cars))
        .catch(err => res.json(err))
})

app.get('/', (req, res) => {
    CarModel.find({})
        .then(results => res.json(results))
        .catch(err => res.json(err))
})

app.get('/getCar/:id', (req, res) => {
    const id = req.params.id;
    CarModel.findById({ _id: id })
        .then(results => res.json(results))
        .catch(err => res.json(err))
})

app.put('/updateCar/:id', (req, res) => {
    const id = req.params.id;
    CarModel.findByIdAndUpdate({ _id: id }, { 
        owner: req.body.owner, 
        model: req.body.model, 
        seats: req.body.seats, 
        available: req.body.available, 
    })
        .then(results => res.json(results))
        .catch(err => res.json(err))
})

app.delete('/deleteCar/:id', (req, res) => {
    const id = req.params.id;
    CarModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});


app.listen(3001, () => {
    console.log("Server Running...");
})