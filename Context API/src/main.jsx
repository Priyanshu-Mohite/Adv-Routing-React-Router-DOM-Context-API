// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ThemeContext from './ThemeContext.jsx'; // Context import kiya
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContext>  {/* App ko Context ke andar wrap kar diya */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContext>
);