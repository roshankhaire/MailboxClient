import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
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
             
             
         
    
    return(
        <>
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
          <th>{item.testMail
}</th>
         
        </tr>
        )
       
    })}
     
      </tbody>
    </Table>
             <h1>This is  get inbox view page</h1>

        </>
    )
}
export default GetInboxView