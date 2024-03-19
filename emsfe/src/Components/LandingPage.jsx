import React from 'react'
import '../styles/landingpage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='landingpage'>
     <h1>EMPLOYEE MANAGEMENT SYSTEM</h1>
    <div className="employee">
    <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/add-employee-2699358-2246866.png'/>
     <button className='btn btn-success mx-5'><Link to = "/addemployee">Add Employee</Link></button>
     <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/employee-update-3194586-2661577.png?f=webp'/>
     <button className='btn btn-success mx-5'><Link to = "/updateemployee">Update Employee</Link></button>
     <img src='https://png.pngtree.com/png-vector/20191030/ourmid/pngtree-employee-find-search-icon-design-for-web-png-image_1927660.jpg'/>
     <button className='btn btn-success mx-5'><Link to = "/findemployee">Find Employee</Link></button>
     <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/remove-employee-2378985-2012699.png'/>
     <button className='btn btn-success mx-5'> <Link to = "/deleteemployee">Delete Employee</Link></button>
    </div>
    </div>
  )
}

export default LandingPage
