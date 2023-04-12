import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import Input from './Input-box';



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const backendUrl = process.env.REACT_APP_BACKEND;
    console.log('Backend URL:', backendUrl);
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Add your login logic here
    let payload = {
      username: username,
      password: password,
    }
    const requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(payload)
    }

    fetch(`${process.env.REACT_APP_BACKEND}/authenticate`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log("came here");
        } else {
          navigate("/");
        }
      })
      .catch(error => {
      })
  };

  return (
    <div className="login-form01" >
      <span className='icon-close'>
        <span className="close-icon-text">&times;</span>
      </span>
      <h2>Login</h2>
      <div className='input-box'>
        <span className='icon'></span>
        <input type='email' required></input>
        <label>Email</label>
      </div>
      <div className='input-box'>
        <span className='icon'></span>
        <input type='password' required></input>
        <label>Password</label>
      </div>
      <Input
        title="Email address"
        type="email"
        className="form-control"
        name="email"
        autoConplete="email-new"
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
  );
};

export default LoginPage;
