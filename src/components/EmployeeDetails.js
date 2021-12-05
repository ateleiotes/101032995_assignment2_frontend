import React, { useEffect, useState } from 'react'

import axios from 'axios'
import {  useParams, Link } from "react-router-dom";
import "../App.css"

export default function EmployeeDetails(props) {
    let {id} = useParams()
    const [employee, setEmployee] = useState([])

    

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/employees/${id}`)
        .then(response =>{
            setEmployee(response.data.employee)
            console.log(response.data.employee)
            console.log(employee)
        })
    })

    return (
         <div className="form-container" id="details">           
            <form>
                <h2>Employee Details</h2>
               
                <div className="user-box">
                <label>
                        Full Name:
                    </label>
            <h3>{employee.firstName} {employee.lastName}</h3>
            </div>
            
            <div className="user-box">

               <label>
                        Email:
                    </label>
                <h3 className="col-3">{employee.emailId}</h3>
            </div>

            
            <div className="floaty">
            <Link className="linkButton" to="/">Cancel</Link>
            <a className="linkButton" href={`/employees/add/${id}`}> Update </a>
        </div>
        </form>
        </div>
  
    )
}