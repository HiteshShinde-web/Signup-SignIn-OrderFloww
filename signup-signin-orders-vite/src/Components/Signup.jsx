import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    phone_number: '',
    role: 'CUSTOMER', // Default role
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://test-api.achilyon.in/v1/rest-auth/register', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error during signup:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="Username" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="name" type="text" placeholder="Name" onChange={handleChange} />
      <input name="phone_number" type="text" placeholder="Phone Number" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="CUSTOMER">Customer</option>
        <option value="RESTAURANT">Restaurant</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
