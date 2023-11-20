import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import FAQ from './faq';

import Shelter from './shelter';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/faq" element={<FAQ />} />
      <Route path="/shelter" element={<Shelter />} />
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
