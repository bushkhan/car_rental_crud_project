import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserHome() {
  const [locations, setLocations] = useState(['Dharavi', 'Chembur', 'CST', 'Dadar', 'Thane', 'Kurla']);
  const [cars, setCars] = useState(['SUV', 'BMW', 'Tata', 'Audi']);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [carImages, setCarImages] = useState([]);

//   useEffect(() => {
//     // Fetch cars when the component mounts
//     fetchCars();
//   }, []);

//   const fetchCars = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/caraData');
//       console.log(response);
//       setCars(response.data);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   };

//   const handleLocationChange = (event) => {
//     setSelectedLocation(event.target.value);
//   };

//   const handleCarChange = (event) => {
//     setSelectedCar(event.target.value);
//   };
//   const handleGetData = async () => {
//     if (selectedLocation && selectedCar) {
//       try {
//         const response = await axios.get(`http://localhost:3001/carImages/${selectedLocation}/${selectedCar}`);
//         console.log(response);
  
//         // Assuming the response.data is an object with keys like 'carImages'
//         if (response.data && response.data.carImages && Array.isArray(response.data.carImages)) {
//           setCarImages(response.data.carImages);
//         } else {
//           console.error('Invalid response structure:', response.data);
//           // Handle the invalid response structure
//         }
//       } catch (error) {
//         console.error('Error fetching car images:', error);
//         // Handle the error and display a user-friendly message
//         // ...
//       }
//     }
//   };
  
  

  return (
    <div>
      <h2>Welcome, User!</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Select Location:
          </label>
          <select
            className="form-select"
            id="location"
            value={selectedLocation}
            // onChange={handleLocationChange}
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="car" className="form-label">
            Select Car:
          </label>
          <select
            className="form-select"
            id="car"
            value={selectedCar}
            // onChange={handleCarChange}
          >
            <option value="">Select Car</option>
            {cars.map((car) => (
              <option key={car} value={car}>
                {car}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="btn btn-primary" 
        // onClick={handleGetData}
        >
          Get Data
        </button>
      </form>
      <div className="mt-4">
        <h3>Car Images</h3>
        <div>
        {carImages.map((image, index) => (
          <img
            key={index} // Use index as the key if the images don't have unique IDs
            src={`http://localhost:3001/carImages/${selectedLocation}/${selectedCar}/${image}`}
            alt={image}
            style={{ width: '150px', marginRight: '10px', marginBottom: '10px' }}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default UserHome;
