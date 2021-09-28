import React from 'react';
import { useList } from '../../hooks/useList';
import Character from './Character';

const CharacterList = () => {
  const { characters } = useList();

  return (
    <ul aria-label="Character" role="character-list"  >
      {characters.map((character) => (
        <li key={character._id}>
          <Character
            image={character.image}
            name={character.name}
          />
        </li>
      ))}
    </ul>
  );
};
export default CharacterList;
