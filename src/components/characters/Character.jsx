import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeProvider';

const Character = ({ name, image }) => {
  const theme = useTheme();
  return (
    <li
      style={
        theme
          ? { backgroundColor: 'white', color: 'black' }
          : { backgroundColor: 'black', color: 'white' }
      }
    >
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </li>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
