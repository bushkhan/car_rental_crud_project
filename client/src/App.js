import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cars from './Cars';  // Make sure this is the correct path
import CreateCar from './CreateCar';
import UpdateCar from './UpdateCar';
import Signup from './Signup';
import SignIn from './SignIn';
import UserHome from './UserHome';
import VendorHome from './VendorHome';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Cars/>}></Route>
          <Route path='/userHome' element={<UserHome/>}></Route>
          <Route path='/vendorHome' element={<VendorHome/>}></Route>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/login' element={<SignIn/>}></Route>
          <Route path='/create' element={<CreateCar/>}></Route>
          <Route path='/update/:id' element={<UpdateCar/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
