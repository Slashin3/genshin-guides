import React from 'react';
import PropTypes from 'prop-types';

function Image({ imgSrc, name, onClick }) {
  return (
    <div className="img" onClick={onClick} role="button" tabIndex={0}>
      <img src={imgSrc} alt={name} />
      <figcaption>{name}</figcaption>
    </div>
  );
}

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Image;
