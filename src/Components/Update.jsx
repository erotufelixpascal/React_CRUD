import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
    //const [data ,setData] = useState ([])
    const {id} =useParams([])
    useEffect (() =>{
        axios.get('http://localhost:3000/Users/' + id)
        .then(res => {
            setValues(res.data);
        })
        .catch(err => console.log(err));

    }, [])

    const navigate = useNavigate();

    const handldeUpdate =(event) =>{
        event.preventDefault();
        axios.put('http://localhost:3000/Users/'+id,values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
    

    return ( 
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Update User Information</h1>
                <form onSubmit={handldeUpdate}>
                    <div className='mb-2'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" 
                         value= {values.name} 
                         onchange = {e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Email" 
                        value= {values.email} 
                        onchange = {e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Phone:</label>
                        <input type="text" name="phone" className="form-control" placeholder="Enter phone" 
                        value= {values.phone}
                        onchange = {e => setValues({...values, phone: e.target.value})}/>
                    </div>
                    <button className="btn btn-success">Update</button>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
        
)}

export default Update;