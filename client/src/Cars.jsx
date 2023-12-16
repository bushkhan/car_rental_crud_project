import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Cars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('https://car-rental-crud-project-api.vercel.app/')
            .then(result => {
                console.log(result.data);
                setCars(result.data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        console.log("hello");
        axios.delete(`https://car-rental-crud-project-api.vercel.app/deleteCar/${id}`)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Model</th>
                            <th>Seats</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        cars.length > 0 ?
                            cars.map((car) => (
                                <tr key={car.id}>
                                    <td>{car.owner}</td>
                                    <td>{car.model}</td>
                                    <td>{car.seats}</td>
                                    <td>{car.available}</td>
                                    <td>
                                        <Link to={`/update/${car._id}`} className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger' onClick={(e) => handleDelete(car._id)}>Delete</button>
                                    </td>
                                </tr>
                            )) :
                            <tr>
                                <td colSpan="5">No cars available</td>
                            </tr>
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Cars