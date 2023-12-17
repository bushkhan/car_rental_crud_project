import React from 'react'
import { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from 'bootstrap';
function SignIn() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loginStatus, setLoginStatus] = useState(null);
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://car-rental-crud-project-frontend.vercel.app/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data == "Success") {
                    setLoginStatus('success');
                    navigate("/");

                } else {
                    setLoginStatus('failure');
                }

            })
            .catch(err => {
                console.log(err)
                setLoginStatus('failure');
            }
            )
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>

                {loginStatus === 'success' && (
                    <div className="alert alert-success" role="alert">
                        Login Successful.
                    </div>
                )}

                {loginStatus === 'failure' && (
                    <div className="alert alert-danger" role="alert">
                        Login Failed.
                    </div>
                )}
                <form onSubmit={handleSubmit}>

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
                            onChange={(e) => setEmail(e.target.value)}>
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
                            onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p>Don't Have an Account</p>
                <Link to='/register' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Register
                </Link>

            </div>

        </div>
    )
}

export default SignIn