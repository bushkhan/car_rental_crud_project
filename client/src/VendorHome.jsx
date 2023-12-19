import React, { useState } from 'react';
import axios from 'axios';

function VendorHome() {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carLocation, setCarLocation] = useState('');
  const [carImages, setCarImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setCarImages(files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
  
    const formData = new FormData();
    formData.append('carName', carName);
    formData.append('carModel', carModel);
    formData.append('carLocation', carLocation);
    for (let i = 0; i < carImages.length; i++) {
      formData.append('carImages', carImages[i]);
    }
  
    try {
      const result = await axios.post('http://localhost:3001/addCar', formData);
      console.log(result.data);
      // Handle success
  
      // Show alert
      alert('Car added successfully!');
  
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Handle error
      alert('Error adding car. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="carName" className="form-label">Car Name:</label>
          <input
            type="text"
            id="carName"
            className="form-control"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="carModel" className="form-label">Car Model:</label>
          <input
            type="text"
            id="carModel"
            className="form-control"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="carLocation" className="form-label">Car Location:</label>
          <input
            type="text"
            id="carLocation"
            className="form-control"
            value={carLocation}
            onChange={(e) => setCarLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="carImages" className="form-label">Car Images:</label>
          <input
            type="file"
            id="carImages"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
            multiple
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Adding Car...' : 'Add Car'}
        </button>
      </form>
    </div>
  );
}

export default VendorHome;
