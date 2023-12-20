import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {NavLink} from "react-router-dom";
const GetInboxView=()=>{
     const [emaildata,setEmailData]=useState([])



     const getData=()=>{
        axios.get("https://crudcrud.com/api/695bce3ddbe54d00bdbef509c42a06f9/email")
        .then((response)=>{
           console.log(response)
           setEmailData(response.data)
        })
     }
     
    useEffect(()=>{
             getData()  
       
    },[])
             
    const deleteHandler=(id)=>{
        console.log("this is delete Handler",id)
        axios.delete(`https://crudcrud.com/api/695bce3ddbe54d00bdbef509c42a06f9/email/${id}`)
        .then(()=>{
           getData()
        })
     }     
         
    
    return(
        <>
          <h1>This is  get inbox view page</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>to</th>
          <th>yout text</th>
         
        </tr>
      </thead>
      <tbody>
                   
    { emaildata.map((item)=>{
        return(
            <tr key={item.to}>
      
          <th>{item.to}</th>
          <th>{item.textMail}</th>
          <th>
          <button className="btn btn-sm btn-danger ms-2" onClick={()=>{deleteHandler(item._id)}}>Delete</button>
          </th>

         
        </tr>
        )
       
    })}
     
      </tbody>
    </Table>
          <NavLink to="/email" >   <button>
            send
          </button></NavLink>
       
        </>
    )
}
export default GetInboxView