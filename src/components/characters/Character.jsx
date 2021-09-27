import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => {
  return (
    <li>
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
