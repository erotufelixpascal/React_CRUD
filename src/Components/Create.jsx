import React, { useState } from "react";
import { Link } from "react-router-dom";

function Create() {
    const [values,setValues] = useState({
        name:'',
        email:'',
        phone:''
})
    return ( 
        <div className='d-flex w-100 vh-100 justify-center-center align-items-center gb-light'>
            <div className='w-50 border gb-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add a User</h1>
                <form>
                    <div className='mb-2'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Phone:</label>
                        <input type="text" name="phone" className="form-control" placeholder="Enter phone" />
                    </div>
                    <button className="">Submit</button>
                    <Link to="/" className="btn-btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
     );
}

export default Create;