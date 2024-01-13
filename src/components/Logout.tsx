import React from 'react';

const Logout: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const handleLogout = () => {
   
    localStorage.removeItem('authToken');

    
    onLogout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
