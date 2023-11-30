import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function Update() {
    return ( 
        <div>
            <h1>Update User Information</h1>
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
                    <button className="">Submit</button>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
        </div>
        
)}

export default Update;