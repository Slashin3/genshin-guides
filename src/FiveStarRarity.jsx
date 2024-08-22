import React from 'react';

function FiveStarRarity({ onClick, isSelected }) {
  return (
    <div
      className={`rarity-item ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img
        src="https://rerollcdn.com/GENSHIN/UI/rarity_5.png"
        alt="5-star rarity"
      />
    </div>
  );
}

export default FiveStarRarity;
