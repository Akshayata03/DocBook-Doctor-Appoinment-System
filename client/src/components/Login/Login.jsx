import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import axios from 'axios';

const Login = ({store, handleLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    await axios.post('http://localhost:8081/check',{
      username,
      password
    }).then((res) => {
      console.log("Send from server:",res.data);
      if(res.data!=="failed"){
        store.dispatch({"type":"login",data:{"username":res.data.msg.Name,
         "role":res.data.msg.Role,
          "token":res.data.token}});
          handleLogin();
          navigate('/Main');
      }
    })
  };
  return (
    <div className="page">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="inputbox">
            <input type="text" name='name' placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <i className="fa-solid fa-user"></i>
          </div>

          <div className="inputbox">
            <input type="password" name='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <i className="fa-solid fa-lock"></i>
          </div>

          <div className="checkbox">
            <label> <input type="checkbox" />Remember me</label>
            <Link to="#">Forgot Password</Link>
          </div>
          <button id="b3" type="submit">Login</button>
          <div className="register">
            Not Registered? <Link to="/SignUp">SignUp</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
