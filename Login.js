import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Defining the Login component
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // You can perform your authentication logic here
    // For demonstration purposes, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);

    // After successful authentication, you can redirect to the home page
    navigate.push('Home /');
  }

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        </div>
        <div className='mb-4'>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        </div>
        <button className='btn btn-primary' type="submit">Login</button>
      </form>
    </center>
  );
}

export default Login;
