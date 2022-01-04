// import { useState } from "react";
// import axios from "axios"
// import { useNavigate } from 'react-router-dom';


// const Login = ({ setLoginUser }) => {
  
//   const navigate = useNavigate ();


//     const loginUser = () => {
//         axios.post("/api/login", user)
//         .then(res => {        
//             alert(res.data.message)
//             setLoginUser(res.data.user)
//             navigate('/about')
//         });
//     };


//     const user = {
//         email: "",
//         password: "",
       
//       };


//   return (
//     <form className="add-form">
//     <div className="form-control">
//      <h2>Login</h2>
//     </div>
//     <div className="form-control">
//       <label>Email</label>
//       <input className="form-control"  placeholder="Enter Email" onChange={(e) => (user.email = e.target.value)}/>
//     </div>

//     <div className="form-control">
//       <label>Password</label>
//       <input className="form-control"  placeholder="Enter Password" onChange={(e) => (user.password = e.target.value)}/>
//     </div>

//     <input type="submit" onClick={loginUser} value="Login" className="btn btn-block "  />
//     <div align="center">or</div>
//     <input type="submit" onClick={() => navigate('/register')} value="Register" className="btn btn-block "  />
//     </form>
//   );
// };

// export default Login;


import React from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
const Login = ( { setLoginUser } ) => {

    const navigate = useNavigate ();



    const loginUser = () => {
        axios.post("/api/login", user)
        .then(res => {
            alert(res.data.message)
            console.log(user)
            setLoginUser(res.data.user)
            navigate('/')
        });
    };

    
    const user = {
        email: "",
        password: "",
      };

    return (
        <div>
            <h1>Login</h1><br/>
            <div className="form-control">
                <label>Email</label>
                <input className="form-control"  placeholder="Enter Email" onChange={(e) => (user.email = e.target.value)}/>
              </div>
              <div className="form-control">
                <label>Password</label>
                <input className="form-control"  placeholder="Enter Password" onChange={(e) => (user.password = e.target.value)}/>
              </div>
            {/* <input type="text" className="form-control"  placeholder="Enter Email" onChange={(e) => (user.email = e.target.value)} />
            <input type="text" className="form-control"  placeholder="Enter Password" onChange={(e) => (user.password = e.target.value)}/>     */}
            <button type="submit"  className="btn btn-block "   onClick={loginUser} >Login</button>
            <div align="center">or</div>
            <button type="submit" className="btn btn-block "    onClick={() => navigate('/register')} >Register</button>
        </div>
    )
}

export default Login
