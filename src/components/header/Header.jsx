import React from 'react';
import { useChangeTheme, useTheme } from '../context/ThemeProvider';

const Header = () => {
  const changeTheme = useChangeTheme();
  const theme = useTheme();
  return (
    <header
      style={{
        backgroundColor: theme ? 'white' : 'black',
        color: theme ? 'black' : 'white',
      }}
    >
      <button role="button" onClick={changeTheme}>changeTheme</button>
    </header>
  );
};

export default Header;
