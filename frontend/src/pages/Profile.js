// src/pages/Profile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2>Profile Details for ID: {id}</h2>
      {/* Add your profile details UI here */}
    </div>
  );
};

export default Profile;
