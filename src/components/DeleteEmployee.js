import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  useParams, useNavigate, Link } from "react-router-dom";
import "../App.css"


export default function EmployeeDetails() {
    
    
    const [employee, setEmployee] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)

    let {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/employees/${id}`)
        .then(response => {
            setEmployee(response.data.employee)
            if(employee == null) {
                setIsDeleted(true)
            } else{
                console.log(response.data.firstName)
            }
        })
        .catch(error => console.log(error))
    }, []);

    const onDelete = (event) => {
        console.log({id})
        event.preventDefault()
        axios.delete(`http://localhost:3000/api/v1/employees/${id}`)
        .then(response => {
            console.log(response.data)
            setIsDeleted(true)
        })
        .catch(error => console.log(error))
       
    }


    return (
        <div className="form-container">

        <div className="wrapper">
        <div>
            {
                isDeleted ? 
                <div>
                    <h2>Employee Deleted!</h2>
                    <button onClick={navigate('/')}>OK</button>
                </div>
                : 
                <div >
                    <h2>Are you sure you want to delete {employee.firstName} {employee.lastName} ?</h2>
                    <form className="dlt" onSubmit={onDelete}>
                        <button type="Submit" className="btn"> DELETE</button>
                        &nbsp;
                        <Link className="linkButton" to="/">Cancel</Link>
                    </form>
            <p>{isDeleted ? "Deleted" : ""}</p>
                </div>
            }

        </div>
        </div>
        </div>
    )
}