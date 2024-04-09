import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MonComponent from './MonComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = "John Doe";
const metier = "Dev";
root.render(<MonComponent userName={name} metierName={metier} />
  // <MonComponent></MonComponent>
);

reportWebVitals();
