import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Email=()=>{
  const navigate = useNavigate();
   const [isLoading,setIsLoading]=useState(false)
    const [to,setTo]=useState("")
    const [textMail,setTextMail]=useState("")
   
    const submitHandler=(event)=>{
        event.preventDefault()
        const emailObject={
            to:to,
            textMail:textMail,
           
        }
        console.log(emailObject)
        setIsLoading(true)
       
          axios.post("https://crudcrud.com/api/695bce3ddbe54d00bdbef509c42a06f9/email",emailObject)
          .then((res)=>{
            console.log(res)
          })
            navigate("/inboxviewpage")
         
       
    }
    return(
        <>
        <h1>This is Email</h1>
        <Form >
      <Form.Group className="mb-3" controlId="formBasicto">
        <Form.Label>to</Form.Label>
        <Form.Control type="to"  placeholder="to "value={to} onChange={(e)=>{
            setTo(e.target.value)
        }}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictestMail">
        <Form.Label> </Form.Label>
        <Form.Control type="testMail" placeholder="text mail" value={textMail}
        onChange={(e)=>{
            setTextMail(e.target.value)
        }}/> 
      </Form.Group>
      
     
{ !isLoading && <Button variant="primary" type="submit" onClick={submitHandler}>
        Send Email
      </Button>}
      {isLoading && <p>sending email...</p>}
    
    </Form>
        </>
    )
}
export default Email