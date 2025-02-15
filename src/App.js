import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

import AccessDenied from './AccessDenied';
import AccessGranted from './AccessGranted';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access-granted" element={<AccessGranted />} />
        <Route path="/denied" element={<AccessDenied />} />
      </Routes>
    </Router>
  );
};

export default App;
