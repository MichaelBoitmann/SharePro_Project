import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Router>
//     <App />
//   </Router>,
// )

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root'),
// )