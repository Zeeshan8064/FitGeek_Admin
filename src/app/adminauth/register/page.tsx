"use client"
import React, {useState} from 'react'
import '../auth.css'
import { ToastContainer, toast } from 'react-toastify'

const SignupPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {

    try {
      const response = await fetch (process.env.NEXT_PUBLIC_BACKEND_API + '/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
        credentials:'include'
      });

      const data = await response.json();

      if(data.ok){
        console.log('Admin registration successful',data);
        toast.success('Registration successful',{
          position: 'top-center',
        });
      } else {
          console.error('Admin registration failed',response.statusText);
          toast.error('Registration unsuccessful',{
            position: 'top-center',
         });
      }
    }
    catch(err){
      toast.error('An error occoured during registeration');
      console.error('Error:', err);
    }
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