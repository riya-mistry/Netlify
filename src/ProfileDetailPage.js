import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProfileDetailPage = () => {
  const [user, setUser] = useState(null);

  const location=useLocation();

  useEffect(() => {
    const fetchUser = async () => {
        console.log(location.state)
        const userId=location.state.id;
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  },[location.state.id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
    <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        Profile Detail
      </h2>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={user.picture} alt={user.name} style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
      <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Name: {user.name}</p>
      <p style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}> Email: {user.email}</p>
      <p style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>Gender: {user.gender}</p>
      <p style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>Company: {user.company}</p>
      <p style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>Contact: {user.phone}</p>
      <p style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>Address: {user.address}</p>
      {/* Add more user details as needed */}
    </div>
  </div>
  );
};

export default ProfileDetailPage;
