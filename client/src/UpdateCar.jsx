import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


function UpdateCar() {
    const {id} = useParams()
    const [owner, setOwner] = useState();
    const [model, setModel] = useState();
    const [seats, setSeats] = useState();
    const [available, setAvailable] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://car-rental-crud-project-api.vercel.app/getCar/'+id)
            .then(result => {
                {console.log(result)
                    setOwner(result.data.owner)
                    setModel(result.data.model)
                    setSeats(result.data.seats)
                    setAvailable(result.data.available)

                }
            })
            .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("https://car-rental-crud-project-api.vercel.app/updateCar/"+id,{owner, model, seats, available})
        .then(result =>{ 
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))

    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>Update Car</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Owner Name</label>
                        <input type='text' placeholder='Enter Name' className='form-control' 
                        value={owner} onChange={(e) => setOwner(e.target.value)}></input>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Model</label>
                        <input type='text' placeholder='Enter Model' className='form-control'
                        value={model} onChange={(e) => setModel(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Seats</label>
                        <input type='text' placeholder='Enter Seats' className='form-control'
                        value={seats} onChange={(e) => setSeats(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Available</label>
                        <input type='text' placeholder='Enter Name' className='form-control'
                        value={available} onChange={(e) => setAvailable(e.target.value)}></input>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateCar