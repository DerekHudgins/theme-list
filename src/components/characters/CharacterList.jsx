import React from 'react';
import { useList } from '../../hooks/useList';
import Character from './Character';
import { useTheme } from '../context/ThemeProvider';

const CharacterList = () => {
  const { characters } = useList();
  const theme = useTheme();

  return (
    <ul
      style={
        theme
          ? { backgroundColor: 'white', color: 'black' }
          : { backgroundColor: 'black', color: 'white' }
      }
    >
      {characters.map((character) => (
        <li key={character._id}>
          <Character image={character.image} name={character.name} />
        </li>
      ))}
    </ul>
  );
};
export default CharacterList;
