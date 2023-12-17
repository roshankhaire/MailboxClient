import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate = useNavigate();
    const [isLoading,setIsLoading]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const submitHandler=(event)=>{
        event.preventDefault()
        const signUpObject={
            email:email,
            password:password,
            confirmPassword:confirmPassword
        }
        console.log(signUpObject)
     setIsLoading(true)
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrXKwWCPe_zUc5FVJdPqYgVHyEW9w2Lbw",{
            method:"POST",
            body:JSON.stringify({
                email:email,
                password:password,
                confirmPassword:confirmPassword,
                returnSecureToken:true
            }),
            headers:{
                "Content-Type":"application/json"
            }

        }).then((res)=>{
          setIsLoading(false)
          if(res.ok){
            return res.json().then((data)=>{
                console.log(data)
                navigate("/welcome")
            })
          }
          else{
            return res.json().then((data)=>{
                let errorMessage="Auhtentication failed"

       alert(errorMessage)
              
            })
          }
           
            })
       
    }
    return(
        <>
        <h1>This is signUp</h1>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}/> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>ConfirmPassword</Form.Label>
        <Form.Control type="confirmpassword" placeholder="confirmPassword" value={confirmPassword}
          onChange={(e)=>{
            setConfirmPassword(e.target.value)
        }}/> 
      </Form.Group>
     
     { ! isLoading && <Button variant="primary" type="submit">
        Submit
      </Button>}
      {isLoading && <p>Sending request...</p>}
    </Form>
        </>
    )
}
export default Login