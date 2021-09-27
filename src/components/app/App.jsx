import React from 'react';
import CharacterList from '../characters/CharacterList';
import Header from '../header/Header';
import { useTheme } from '../context/ThemeProvider';

export default function App() {
  const theme = useTheme();
  return (
    <div
      style={
        theme
          ? { backgroundColor: 'white', color: 'black' }
          : { backgroundColor: 'black', color: 'white' }
      }
    >
      <Header />
      <CharacterList />
    </div>
  );
}
