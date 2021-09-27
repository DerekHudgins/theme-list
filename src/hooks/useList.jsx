import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/heyArnoldApi';


export const useList = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    fetchCharacters().then((characters) => setCharacter(characters));
  }, []);
  return { characters };
   
};

