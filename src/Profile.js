import { useNavigate } from 'react-router-dom';

import './App.css';

function Profile() {

    const navigate = useNavigate();
    const profile = JSON.parse(localStorage.getItem('profile-details'));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="header">Profile Details</p>
            <div className='form-body profile-body'>
                {
                    profile === null ?
                        <p>Profile is empty</p>
                        :
                        <>
                            <p className='left-col'>First Name:</p><p className='right-col'>{profile.firstName}</p>
                            <p className='left-col'>Last Name:</p><p className='right-col'>{profile.lastName}</p>
                            <p className='left-col'>Email:</p><p className='right-col'>{profile.email}</p>
                        </>
                }
            </div>
            <div className='back-btn' onClick={() => navigate("/")} >
                Back to Registration
            </div>
        </div>
    );
}

export default Profile;
