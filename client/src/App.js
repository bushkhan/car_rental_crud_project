import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cars from './Cars';  // Make sure this is the correct path
import CreateCar from './CreateCar';
import UpdateCar from './UpdateCar';
import Signup from './Signup';
import SignIn from './SignIn';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cars/>}></Route>
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<SignIn/>}></Route>
          <Route path='/create' element={<CreateCar/>}></Route>
          <Route path='/update/:id' element={<UpdateCar/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
