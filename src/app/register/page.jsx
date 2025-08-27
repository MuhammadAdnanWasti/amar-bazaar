"use client"

import React from 'react'
import { registerUser } from '../actions/auth/registerUser';

export default function RegisterPage() {
      const handleRegister=async(e) => { 
    e.preventDefault()
    const form=e.target;
    const username=form.name.value;
    const password=form.password.value;
  
const payload={username,password}
const result= await registerUser(payload)
  //  console.log(result)
      }
  return (
 <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
         
         
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Register</button>
           
        </form>
        
      </div>
    </div>
  </div>
</div>
  )
}
