import React from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx';
import './index.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
