import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccessDenied.css';

const AccessDenied = () => {
  const navigate = useNavigate();
  const [isReloaded, setIsReloaded] = useState(false);

  useEffect(() => {
    // Detect if page was refreshed
    const wasReloaded = sessionStorage.getItem("wasReloaded");

    if (wasReloaded) {
      sessionStorage.removeItem("wasReloaded"); // Clear the flag
      navigate('/'); // Redirect to home
    }

    // Set flag when user is about to leave
    const handleBeforeUnload = () => {
      sessionStorage.setItem("wasReloaded", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  return (
    <div className="access-denied-container">
      <img src="/AccessDenied.gif" alt="Access Denied" />
    </div>
  );
};

export default AccessDenied;
