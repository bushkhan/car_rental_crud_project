const mongoose = require('mongoose');

const CarDataSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  carLocation: {
    type: String,
    required: true,
  },
  carImages: [
    {
      type: String, // Assuming you store image URLs or paths as strings
    },
  ],
});

const CarDataModel = mongoose.model('CarData', CarDataSchema);

module.exports = CarDataModel;
