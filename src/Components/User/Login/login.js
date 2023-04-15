import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './login.css'
import { Link } from 'react-router-dom';


function Login(props) {

    const handleSubmit=()=>{
        
    }

    const handleExited=()=>{
      props.handleClose();
    }
    function handleSignUp(){
      props.handleSignUp();
    }
    
  return (
    <div>
        <Modal open={props.show} onClose={handleExited} center>
        <div className='main'>
            <div className='container1'>
                <h1>
                    Login here
                </h1>
                <p>If you are new user create new account</p>
            </div>
            <div className='container2'>
                <form onSubmit={handleSubmit}>
                    <label>Enter your Mobile Number</label>
                    <input type='text' placeholder='Enter your number'></input>
                    <button type='submit'>Request OTP</button>
                </form>
                <div className='my-4'>
                  <a onClick={handleSignUp} className='cursor-pointer'>New User ? Register here</a>
                </div>
            </div>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
