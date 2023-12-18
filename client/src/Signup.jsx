import { useState } from "react";

import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const URL = require("./.env")

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()
    const navigate = useNavigate()


    const handleSubmit =(e)=>{
        if(role == "Vendor"){

        }


        e.preventDefault()
        axios.post('https://car-rental-crud-project-api.vercel.app/register', {name, email, password, role})
        .then(result =>{
            console.log(result)
            navigate("/login")
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>

            <div>
                Register As :  
                <input
                type="radio"
                name="UserType"
                value="User"
                onChange={(e)=> setRole(e.target.value)}>
                </input>
                User

                <input
                type="radio"
                name="UserType"
                value="Vendor"
                onChange={(e)=> setRole(e.target.value)}>
                </input>
                Vendor
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">
                        <strong>Name</strong>
                    </label>
                    <input
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="off"
                    name="name"
                    className="form-control rounded-0"
                    onChange={(e)=>setName(e.target.value)}>
                    </input>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e)=>setEmail(e.target.value)}>
                    </input>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input
                    type="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e)=>setPassword(e.target.value)}>
                    </input>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Register
                </button>
                </form>
                <p>Alreaddy Have and Account</p>
                <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            
        </div>

    </div>
  )
}

export default Signup