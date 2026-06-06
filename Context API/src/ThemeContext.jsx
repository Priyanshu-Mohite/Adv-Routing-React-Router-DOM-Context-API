// ThemeContext.jsx
import React, { createContext, useState } from 'react';

// 1. Context create kiya aur isko export kiya taaki baaki files isko use kar sakein
export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
  // Ye wo data hai jo hume pure app me chahiye
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provider banaya. 'value' prop ke andar wo data pass karte hain jo global banana hai.
    <ThemeDataContext.Provider value={{ theme, setTheme }}>
      
      {/* 3. Yahan props.children likhna MANDATORY hai. */}
      {/* Ye assure karta hai ki is Provider ke andar jitne bhi components aayenge, wo UI par render honge. */}
      {props.children}

    </ThemeDataContext.Provider>
  );
}

export default ThemeContext;