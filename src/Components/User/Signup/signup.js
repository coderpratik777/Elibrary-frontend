import { useState } from "react";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";




export default function Signup(props) {
   
    const [userData,setUserData]=useState([]);
    const onHandleChange=(e)=>{
        setUserData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit=()=>{
        
    }

    const handleLoginClick=()=>{
        props.handleLogin();
    }

    
    
  return (
    <div>
      <Modal open={props.show} onClose={props.handleClose} center>
        <div className="main">
          <div className="container1">
            <h1>Create new Account</h1>
            <p>You are one step Behind to your journey !!!</p>
          </div>
          <div className="container2">
            <form onSubmit={handleSubmit}>
              <label for="name">Enter your Name</label>
              <input type="text" name="name" placeholder="Enter your name" onChange={onHandleChange}></input>
              <label for="email">Enter your email</label>
              <input type="text" placeholder="email@gmail.com" name="email" onChange={onHandleChange}></input>
              <label>Enter your mobile number</label>
              <input type="text" placeholder="Enter your number" name="mobileNumber" onChange={onHandleChange}></input>
              <button type="submit">Create account</button>
            </form>
            <div className="my-4 cursor-pointer" onClick={handleLoginClick}>
              Already have account ? Sign in
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
