import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './SignUp.css';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, role, email, password } = formData;
    // Axios POST request
    axios
      .post('http://localhost:8081/insert', {
        Name: name,
        Role: role,
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success
        console.log('Registration successful:', response.data);
        // You may want to redirect to a different page or perform other actions after successful registration.
      })
      .catch((error) => {
        // Handle error
        console.error('Registration failed:', error);
        // You can display an error message to the user or take other appropriate actions.
      });
  };

  return (
    <div className="cover1">
      <div className="page1">
        <div className="SignUp">
          <form onSubmit={handleSubmit}>
            <h1>SignUp</h1>
            <div className="inputbox1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="inputbox1">
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleChange}
                required
              />
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="inputbox1">
              <input
                type="text"
                name="email"
                placeholder="Email id"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="inputbox1">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <i className="fa-solid fa-lock"></i>
            </div>

            <div className="checkbox1">
              <label>
                <input type="checkbox" />Remember me
              </label>
            </div>
            <button id="b4" type="submit">
              SignUp
            </button>
            <div className="register">
              Already Registered? <Link to="/Login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;






