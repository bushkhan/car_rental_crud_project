import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CreateCar() {
    const [owner, setOwner] = useState();
    const [model, setModel] = useState();
    const [seats, setSeats] = useState();
    const [available, setAvailable] = useState();
    const navigate = useNavigate()


    const Submit = (e) => {
        e.preventDefault();
        axios.post("https://car-rental-crud-project-api.vercel.app/createCar",{owner, model, seats, available})
        .then(result =>{ 
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Car</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Owner Name</label>
                        <input type='text' placeholder='Enter Name' className='form-control'
                            onChange={(e) => setOwner(e.target.value)}
                        />

                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Model</label>
                        <input type='text' placeholder='Enter Model' className='form-control'
                            onChange={(e) => setModel(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Seats</label>
                        <input type='text' placeholder='Enter Seats' className='form-control'
                            onChange={(e) => setSeats(e.target.value)}
                        ></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Available</label>
                        <input type='text' placeholder='Enter Name' className='form-control'
                            onChange={(e) => setAvailable(e.target.value)}>
                        </input>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCar