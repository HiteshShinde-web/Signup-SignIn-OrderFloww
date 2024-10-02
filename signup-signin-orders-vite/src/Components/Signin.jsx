import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://test-api.achilyon.in/v1/rest-auth/login', credentials)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error during signin:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <input name="username" type="text" placeholder="Username" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Signin;
