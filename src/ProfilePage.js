import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [users, setUsers] = useState([]);
  
  const [filteredUsers,setFilteredUsers]=useState([])
  const navigate=useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
        setFilteredUsers([...response.data]); // Initialize filtered users with all users
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    console.log(term)
    if(term==='')
    {
        setUsers([...filteredUsers])
    }
    else
    {
        setUsers(users.filter((user)=>user.name.toUpperCase().includes(term.toUpperCase())))

    }

    
  };

  const openProfileDetail = (e) => {
    console.log(e.target.id);
    navigate("/profile/user",{state: {id:e.target.id} })
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>User Profiles</h2>
      <div style={{ marginBottom: '10px' }}>
  <input
    type="text"
    placeholder="Search by name"
    onChange={handleSearch}
    style={{
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
    }}
  />
</div>
      <div className="user-list">
        {users.map((user) => (
          <div key={user._id} id={user._id} onClick={openProfileDetail} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img
              src={user.picture}
              id={user._id}
          
              style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%' }}
            />
            <p id={user._id} style={{ fontWeight: 'bold', cursor: 'pointer' }}>
              {user.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
