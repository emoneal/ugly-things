import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { UglyArrayContextProvider } from './UglyArrayContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UglyArrayContextProvider>
    <App />
  </UglyArrayContextProvider>
);