import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";


function Update() {
    const [values, setValues] = useState({
        name: '',
        email:'',
        phone:''
    })
    //read to the data
    const [data ,setData] = useState ([])
    const {id} =useParams([])
    useEffect (() =>{
        axios.get('http://localhost:3000/Users' + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));

    }, [])

    const handldeUpdate =(event) =>{
        event.preventDefault();
        
    }

    return ( 
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Update User Information</h1>
                <form onSubmit={handldeUpdate}>
                    <div className='mb-2'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" 
                         value= {data.name} 
                         onchange = {e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Email" 
                        value= {data.email} 
                        onchange = {e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Phone:</label>
                        <input type="text" name="phone" className="form-control" placeholder="Enter phone" 
                        value= {data.phone}
                        onchange = {e => setValues({...values, phone: e.target.value})}/>
                    </div>
                    <button className="">Update</button>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
        
)}

export default Update;