import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../styles/updateemployee.css'

const UpdateEmployee = () => {
    let [email,setemail]=useState("")
    let [name,setname]=useState("")  
    let[phone,setphone]=useState("")
    let[id,setid]=useState("")
    

    let data={name,email,phone,id}
 
    let UpdateEmployee=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/employee`,data)
        .then((res)=>{
          console.log(res);
          alert("Data Updated Successfully")
        })
        .catch((err)=>{
          console.log(err);
          alert("Data Not Found")
        })
      }

  return (
    <div className='updateemployee'>
      <form onSubmit={UpdateEmployee} action="">
      
      <label htmlFor="">Id</label> 
             <input required value={id} onChange={(e)=>{setid(e.target.value)}} type="text" placeholder= "id" ></input> 
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

export default UpdateEmployee
