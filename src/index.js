import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TestModeContextProvider } from './Context/TestMode';
import { ThemeContextProvider } from './Context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TestModeContextProvider>
      <App />
      </TestModeContextProvider>
    </ThemeContextProvider>
    
   
  </React.StrictMode>
);


