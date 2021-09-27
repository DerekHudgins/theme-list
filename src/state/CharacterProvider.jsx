import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchCharacters } from '../services/heyArnoldApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetchCharacters().then((character) => {
      setCharacter(character);
    }, []);
    return (
      <CharacterContext.Provider value={{ character }}>
        {children}
      </CharacterContext.Provider>
    );
  });
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};
