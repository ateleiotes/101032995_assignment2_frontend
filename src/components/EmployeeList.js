import '../App.css';
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class EmployeeList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            employeeIdDelete: 0,
        }
    }

    componentDidMount() {
        this.getEmployees()
    }

    getEmployees = () => {
        axios.get(`http://localhost:3000/api/v1/employees`)
        .then(res => {
            console.log(res.data);
            const employees = res.data.employee;
            this.setState({employees});
        })
    }

    handleSubmit = (id) => {
        console.log("ID: " + id)
        axios.delete(`http://localhost:3000/api/v1/employees/${id}`)
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="form-container">
                <h2>Full Employee List</h2>
                <div className="wrapper">
                <table id="keywords" cellspacing="0" cellpadding="0"> 
                
                        <thead>
                        <tr className="">
                            <th scope="col"><span>Employee First Name</span></th>
                            <th scope="col"><span>Employee Last Name</span></th>
                            <th scope="col"><span>Employee Email</span></th>
                            <th scope="col"><span>Actions</span></th>
                            
                        </tr>
                        </thead>
                        <tbody>
                    
                    {
                        this.state.employees.map(e => (
                            <tr className="" key={e._id}>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.emailId}</td>
                                <td>
                                    <a className="linkButton" href={`/employees/${e._id}`}>View</a>
                                    &nbsp;
                                    <a  className="linkButton" href={`/employees/delete/${e._id}`}> Delete </a>                                  
                                </td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                </div>
        </div>
        )
    }
}