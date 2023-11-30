import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function Create() {
    const [values, setValues] = useState({
        name: '',
        email:'',
        phone:''
})

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/Users/',values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));

    }
  return ( 
        <div className='d-flex w-100 vh-100 justify-center-center align-items-center gb-light'>
            <div className='w-50 border gb-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" 
                        onchange = {e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Email" 
                        onchange = {e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Phone:</label>
                        <input type="text" name="phone" className="form-control" placeholder="Enter phone" 
                        onchange = {e => setValues({...values, phone: e.target.value})} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
     );
}

export default Create;