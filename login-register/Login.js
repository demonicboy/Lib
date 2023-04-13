import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import Input from './Input-box';
import CheckBox from './check-box';



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCheck = (e) => {

  }

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
      <h2 className='form-title'>Login</h2>
      <Input
        title="Email address"
        type="email"
        name="email"
        autoConplete="email-new"
        onChange={(event) => setEmail(event.target.value)}
        symbol="fa fa-envelope"
      />
      <Input
        title="Password"
        type="password"
        name="password"
        autoConplete="false"
        onChange={(event) => setPassword(event.target.value)}
        symbol="fa fa-lock"
      />
      <div className='remember-forgot'>
        <CheckBox
          title="Remember me"
          name="Remember me"
          onChange={(event) => handleCheck(event)}
        />
        <a className='forgot' href='#!'>Forgot password?</a>
      </div>
      <input
        type="submit"
        className="btn-login"
        value="Login"
      />
      <div className='registerNavigate'>
        Don't have an account? <a href='#!'>Register</a>
      </div>
    </div>
  );
};

export default LoginPage;
