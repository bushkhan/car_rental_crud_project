const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const CarModel = require("./models/Cars.js")
const UserModel = require("./models/Users.js")
const CarDataModel = require("./models/Cardata.js")
const path = require('path');

const multer = require('multer');

const { DBURL, APP_PORT } = require('./config/index.js')




const app = express()
app.use(cors(
    // {
    //     origin: 'https://car-rental-crud-project-frontend.vercel.app',
    //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //     credentials: true
    // }
))

app.use(express.json())

 
mongoose.connect(DBURL)

app.post('/createCar', (req, res) => {
    CarModel.create(req.body)
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

app.options('/register', cors()); // Respond to preflight requests

app.post('/register',(req, res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login',(req, res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json({
                    status: "Success",
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        // Add other user details you want to include
                    }
                })
            }else{
                res.json("Incorrect Passowrd.")
            }
        }else{
            res.json("User does not exist.")
        }
    })
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); 
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post('/addCar', upload.array('carImages', 5), async (req, res) => {
    try {
      const { carName, carModel, carLocation } = req.body;
  
      const carImages = req.files.map((file) => file.path);
  
      const newCar = new CarDataModel({
        carName,
        carModel,
        carLocation,
        carImages,
      });
  
      const savedCar = await newCar.save();
  
      res.json(savedCar);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = app;




const carImagesDirectory = path.join(__dirname, 'carImages');

app.get('/carImages/:location/:car', (req, res) => {
  const { location, car } = req.params;

  const imagesPath = path.join(carImagesDirectory, location, car);

  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      // Handle the error and send a meaningful response
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(files);
    }
  });
});


app.get('/caraData', (req, res) => {
    CarDataModel.find({})
        .then(results => res.json(results))
        .catch(err => res.json(err))
})

app.listen(APP_PORT, () => {
    console.log("Server Running...");
})


// 1.user
// login
// registeration
// view cars
// view car details
// view booking details
// make booking
// my bookings - history
// cancel booking
// update booking details
// user profile

// 2.lesser
// add details
// update details
// details details
// view bookings

// 3.admin


// 1. **User Authentication:**
//    - Allow users to register and log in to their accounts.
//    - Implement roles and permissions (e.g., regular users, admins).

// 2. **Car Listings:**
//    - Display a catalog of available cars with details like make, model, year, and photos.
//    - Include a search and filter functionality for users to find specific cars.

// 3. **Booking System:**
//    - Enable users to select rental dates and times.
//    - Implement a booking system that prevents double bookings.

// 4. **User Profiles:**
//    - Allow users to manage their profiles, including personal information and booking history.

// 5. **Admin Panel:**
//    - Create an admin dashboard to manage cars, user accounts, and bookings.
//    - Provide the ability to add, edit, or remove cars from the catalog.

// 6. **Payment Integration:**
//    - Integrate a secure payment gateway for handling rental transactions.

// 7. **Reviews and Ratings:**
//    - Enable users to leave reviews and ratings for the cars they've rented.

// 8. **Notifications:**
//    - Implement email or SMS notifications for booking confirmations, reminders, and updates.

// 9. **Map Integration:**
//    - Include a map to display the location of rental offices or drop-off points.

// 10. **Responsive Design:**
//     - Ensure that your website is mobile-friendly to accommodate users on different devices.

// 11. **Security:**
//     - Implement secure authentication practices and protect against common web vulnerabilities.

// 12. **Feedback and Support:**
//     - Include a contact form or chat support for users to reach out with questions or issues.

// 13. **Terms and Conditions:**
//     - Clearly outline terms of service, rental policies, and any legal disclaimers.

// 14. **Social Media Integration:**
//     - Allow users to share their rental experiences on social media platforms.

// 15. **Analytics:**
//     - Integrate analytics to gather insights into user behavior, popular cars, and other metrics.
