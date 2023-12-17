

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/Cars.js')
const CarModel = require("./models/Cars.js")
const { APP_PORT, DB_NAME, DB_PASSWORD, DB_USERNAME } = require('./config');
console.log(`App Port: ${APP_PORT}`);
console.log(`DB Name: ${DB_NAME}`);
console.log(`DB Username: ${DB_USERNAME}`);
console.log(`DB Password: ${DB_PASSWORD}`);
const app = express()
app.use(cors(
    {
        origin:["https://car-rental-crud-project-frontend.vercel.app"],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
    }
))
app.use(express.json())

// const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.47apsm5.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
// mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true});


// const db = mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',()=>{
//     console.log('DB connected...');
// });

mongoose.connect("mongodb+srv://Bushra:Bushra123@cluster0.47apsm5.mongodb.net/crud?retryWrites=true&w=majority")

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
