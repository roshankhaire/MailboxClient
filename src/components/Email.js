import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios"
const Email=()=>{
  //const navigate = useNavigate();
   const [isLoading,setIsLoading]=useState(false)
    const [to,setTo]=useState("")
    const [testMail,setTestMail]=useState("")
   
    const submitHandler=(event)=>{
        event.preventDefault()
        const emailObject={
            to:to,
            testMail:testMail,
           
        }
        console.log(emailObject)
        setIsLoading(true)
          axios.post("https://crudcrud.com/Dashboard/4c63a7da6a9c4e79b0406f2a61016e24",emailObject)
          .then((res)=>{
            setIsLoading(false)
            console.log(res)
          })
       
    }
    return(
        <>
        <h1>This is Email</h1>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicto">
        <Form.Label>to</Form.Label>
        <Form.Control type="to"  placeholder="to "value={to} onChange={(e)=>{
            setTo(e.target.value)
        }}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictestMail">
        <Form.Label> </Form.Label>
        <Form.Control type="testMail" placeholder="test mail" value={testMail}
        onChange={(e)=>{
            setTestMail(e.target.value)
        }}/> 
      </Form.Group>
      
     
{ !isLoading && <Button variant="primary" type="submit">
        Send Email
      </Button>}
      {isLoading && <p>sending email...</p>}
    
    </Form>
        </>
    )
}
export default Email