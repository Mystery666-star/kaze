import React from 'react';
import { useNavigate } from 'react-router-dom'; // Change made here
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  return (
    <div className="container">
      <div className="box">
      <img
    src="\logo.png"
    alt="KAZÉ Logo"
    style={{
        width: "70%",  // Adjust the size
        maxWidth: "200px",  // Prevent it from getting too large
        marginBottom: "20px"
    }}
/>

        <p>Are you old enough to drink?</p>
        <button className="yes" onClick={() => navigate('/access-granted')}>Yes</button>
<button className="no" onClick={() => navigate('/denied')}>
  No
</button>


      </div>
    </div>
  );
}

export default Home;