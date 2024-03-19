import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../styles/addemployee.css'
const AddEmployee = () => {
        
        let [email,setemail]=useState("")
        let [name,setname]=useState("")  
        let[phone,setphone]=useState("")
        
    
        let data={name,email,phone,}
     
        let AddEmployee=(e)=>{
            e.preventDefault();
            axios.post(`http://localhost:8080/employee`,data)
            .then((res)=>{
              console.log(res);
              alert("Data Added Successfully")
            })
            .catch((err)=>{
              console.log(err);
              alert("Data Not Found")
            })
          }
 
 
    return (
    <div className='addemployee'>

<form onSubmit={AddEmployee} action="">
             
             <label htmlFor="">Name</label> 
             <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder= "Name" ></input>
             <label htmlFor="">Phone</label> 
             <input required value={phone} onChange={(e)=>{setphone(e.target.value)}} type="tel" placeholder= "Phone no" pattern="[0-9]{10}" ></input>
             <label htmlFor="">Email</label> 
             <input required value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder= "Email" ></input>
             <button className='btn btn-outline-info'>Submit</button>
              </form> 
      
     
    </div>
  )
}

export default AddEmployee

