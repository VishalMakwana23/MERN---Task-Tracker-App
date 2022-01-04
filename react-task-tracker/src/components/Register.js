import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Register = () => {


    const navigate = useNavigate();

    const registerUsers = () => {
        axios.post("/api/registration", user).then(res => alert(res.data.data));
        navigate('/login')
    };

    const user = {
        email: "",
        password: "",
      };


    return (
        <div>
      <form className="add-form">
       <div className="form-control">
        <h2>Register</h2>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input class="form-control"  placeholder="Enter Email" onChange={(e) => (user.email = e.target.value)}/>
        </div>

        <div className="form-control">
          <label>Password</label>
          <input class="form-control"  placeholder="Enter Password" onChange={(e) => (user.password = e.target.value)}/>
        </div>

        <input type="submit" onClick={registerUsers} value="Register" className="btn btn-block " />
        <div align="center">or</div>
        <input type="submit" onClick={() => navigate('/login')} value="Login" className="btn btn-block "  />
    </form>
        </div>
    )
}

export default Register
