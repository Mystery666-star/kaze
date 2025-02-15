import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const answer = location.state?.answer || 'No answer given';

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Your answer: {answer}</h1>
    </div>
  );
}

export default Result;
