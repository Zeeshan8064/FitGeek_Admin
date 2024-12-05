"use client"
import React, {useState} from 'react'
import '../auth.css'
import { ToastContainer, toast } from 'react-toastify'

const SignupPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const response = await fetch (process.env.NEXT_PUBLIC_BACKEND_API +'/admin/register', {
      
    })
  }

  return (
    <div className='formpage'>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e)=> setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  )
}

export default SignupPage