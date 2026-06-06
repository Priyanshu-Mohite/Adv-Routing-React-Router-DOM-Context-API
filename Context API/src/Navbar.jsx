// Navbar.jsx
import React, { useContext } from 'react';
// 1. Apne context ka naam import kar (ThemeContext.jsx wali file se)
import { ThemeDataContext } from './ThemeContext'; 

const Navbar = () => {
  // 2. useContext hook ka use karke data extract kar liya
  const contextData = useContext(ThemeDataContext); 

  return (
    <div>
      {/* Context ke andar jo value pass ki thi, usko use kar liya */}
      <h1>Current Theme is: {contextData.theme}</h1>
      
      <button onClick={() => contextData.setTheme("dark")}>
        Change to Dark Theme
      </button>
    </div>
  );
}

export default Navbar;