import React from "react"
import { useState } from "react"
import {NavLink} from "react-router-dom"

const InboxViewPage=()=>{
   
      return (
        <>
        <h1>This is inbox view page</h1>
    {/* { emaildata.map((item)=>{
        <li>to={item.to}</li>
    })} */}
    <NavLink  to="/getInboxView">
        <button >See Email</button>
        </NavLink>
        </>
      )
}
export default InboxViewPage