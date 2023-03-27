import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import '@arcgis/core/assets/esri/themes/dark/main.css';

// Import the Calcite Components loader
import { defineCustomElements } from '@esri/calcite-components/dist/loader';
defineCustomElements(window);

// Create a root element to render the app into
const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

// Render the app
root.render(
  // Using StrictMode is heavily recommended, only disable if you know what you're doing
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
