import React from 'react';
import PropTypes from 'prop-types';

function FourStarRarity({ onClick, isSelected }) {
  return (
    <div
      className={`rarity-item ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="4-star rarity"
    >
      <img
        src="https://rerollcdn.com/GENSHIN/UI/rarity_4.png"
        alt="4-star rarity symbol"
      />
    </div>
  );
}

FourStarRarity.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default FourStarRarity;
