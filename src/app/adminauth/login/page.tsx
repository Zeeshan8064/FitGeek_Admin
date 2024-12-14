"use client"
import React, {useState} from 'react'
import '../auth.css'
import { ToastContainer, toast } from 'react-toastify'

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    try {
      const response = await fetch (process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password}),
        credentials:'include'
      });

      const data = await response.json();

      if(data.ok){
        console.log('Admin login successful',data);
        toast.success('Admin Loggedin successful',{
          position: 'top-center',
        });
        window.location.href = '/pages/addworkout'
      } else {
          console.error('Admin Login failed',response.statusText);
          toast.error('Login unsuccessful',{
            position: 'top-center',
         });
      }
    }
    catch(err){
      toast.error('An error occoured during registeration');
      console.log('Error:', err);
    }
  }

  return (
    <div className='formpage'>
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
      <button onClick={handleLogin}>Sign in</button>
    </div>
  )
}

export default LoginPage