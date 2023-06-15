import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Make the API request here using the provided credentials
    const loginData = {
      username: email,
      password: password
    };
    fetch('https://express-t4.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response, e.g., check for successful login
        if (data.message == "Login success!") {
          // Redirect to the profile listing page
          
        navigation("/profile");
        } else {
          // Handle login error, e.g., show an error message
          console.log('Login failed');
        }
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error('Error:', error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <form onSubmit={handleLogin} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <h1 style={{ textAlign: 'center' }}>Login Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        required
      />
      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}>
        Login
      </button>
    </form>
  </div>
  );
};

export default LoginPage;
