import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {  useNavigate, useParams, Link} from "react-router-dom";
import {render} from '@testing-library/react';

export default function EmployeeForm() {
    const navigate = useNavigate();

    let {id} = useParams()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    
    

    console.log({id})
    console.log({id} === undefined)


    useEffect(() => {
        async function fetchData() {
            if(id !== undefined) {
                await axios.get(`http://localhost:3000/api/v1/employees/${id}`)
                .then(response => {
                    console.log(response.data)
                    AddTitle({id})
                    setFirstName(response.data.employee.firstName)
                    setLastName(response.data.employee.lastName)
                    setEmailId(response.data.employee.emailId)
                    console.log(response.data.employee.firstName)
                })
                .catch(error => console.log(error))
            }
        }
        fetchData()
    }, []);

    let handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "emailId": emailId
        }
        console.log(`${firstName} ${lastName} ${emailId}`)
        if(data.firstName === '' || data.lastName === '' || data.emailId === '') {
            alert('Please enter your information!')
        }
        else if(id === undefined) {
            axios.post("http://localhost:3000/api/v1/employees", data)
            .then(response => navigate('/'))
            .catch(error => console.log(error))
        } else {
            axios.put(`http://localhost:3000/api/v1/employees/${id}`, data)
            .then(response => navigate('/'))
            .catch(error => console.log(error))
        }
    }

    // Dynamic title
 function AddTitle() {        
        if(id !== undefined){
            return <h2>Edit Details</h2>;
        }
        else{
            return <h2>Add Entry</h2>;
        }                 
    }
 
    return (       
        <div className="form-container">
            <AddTitle></AddTitle>


            <form onSubmit={handleSubmit} method="POST" action="http://localhost:3000/api/v1/employees">
                <div className="user-box" >
                <label >
                        First Name:
                    </label>
                <input  type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value) }/>
                    
                    
                </div>
                <div className="user-box ">
                <label >
                        Last Name:
                    </label>
                <input  type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
                   
                    
                </div>
                <div className="user-box">
                    <label>
                        Email:
                    </label>
                    <input  type="email" name="emailId" value={emailId} onChange={e => setEmailId(e.target.value) }/>
                </div>

                <div className="floaty">
                    <button className="btn" type="submit">Submit</button>
                    &nbsp;
                    <Link className="linkButton" to="/">Cancel</Link>
                </div>
            </form>
        </div>

    );
}