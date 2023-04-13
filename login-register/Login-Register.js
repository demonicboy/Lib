import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login-Register.css';
import Input from './Input-box';
import CheckBox from './check-box';



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [onRegister, setOnRegister] = useState('');
  const navigate = useNavigate();

  const handleCheck = (e) => {

  }
  
  const changeToRegister = (e) => {
    setOnRegister(true)
  }
  const changeToLogin = (e) => {
    setOnRegister(false)
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
    <div className={`login-register-card ${onRegister ? 'register-form' : 'login-form01'}`} >
      <span className='icon-close'>
        <span className="close-icon-text">&times;</span>
      </span>
      <div className={`login-content ${onRegister ? 'move-left' : 'put-login'}`}>
        <h2 className='form-title'>Login</h2>
        <Input
          title="Username"
          type="text"
          name="usernamelogin"
          autoConplete="username"
          onChange={(event) => setUsername(event.target.value)}
          symbol="fa fa-user"
        />
        <Input
          title="Password"
          type="password"
          name="passwordlogin"
          autoConplete="false"
          onChange={(event) => setPassword(event.target.value)}
          symbol="fa fa-lock"
        />
        <div className='remember-forgot'>
          <CheckBox
            title="Remember me"
            name="rememberme"
            onChange={(event) => handleCheck(event)}
          />
          <a className='forgot' href='#!'>Forgot password?</a>
        </div>
        <input
          type="submit"
          className="btn-form btn-login"
          value="Login"
        />
        <div className='changeNavigate login-nv'>
          Don't have an account? <a onClick={changeToRegister}>Register</a>
        </div>
      
      
      
      
      
      </div>

      <div className={`register-content ${onRegister ? 'put-register' : 'move-right'}`}>
        <h2 className='form-title'>Registration</h2>
        <Input
          title="Username"
          type="text"
          name="usernameregister"
          autoConplete="username"
          onChange={(event) => setUsername(event.target.value)}
          symbol="fa fa-user"
        />
        <Input
          title="Email address"
          type="email"
          name="emailregister"
          autoConplete="email-new"
          onChange={(event) => setEmail(event.target.value)}
          symbol="fa fa-envelope"
        />
        <Input
          title="Password"
          type="password"
          name="passwordregister"
          autoConplete="false"
          onChange={(event) => setPassword(event.target.value)}
          symbol="fa fa-lock"
        />
        <div className='agree-term'>
          <CheckBox
            title=""
            name="agreeregister"
            onChange={(event) => handleCheck(event)}
          />
          <a className='agree' href='#!'>I agree to the term & conditions</a>
        </div>
        <input
          type="submit"
          className="btn-form btn-register"
          value="Register"
        />
        <div className='changeNavigate register-nv'>
          Already have an account <a onClick={changeToLogin}>Login</a>
        </div> 
      </div>
    </div>
  );
};

export default LoginPage;
