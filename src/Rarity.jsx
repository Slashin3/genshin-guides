import React from "react";
import PropTypes from 'prop-types';
import FourStarRarity from "./FourStarRarity";
import FiveStarRarity from "./FiveStarRarity";

function Rarity({ handleRarityChange, selectedRarity }) {
  return (
    <div className="rarity-container">
      <button
        className={`rarity-button ${selectedRarity === 4 ? "active" : ""}`}
        onClick={() => handleRarityChange(4)}
        aria-label="4-star rarity"
        role="button"
        tabIndex={0}
      >
        <FourStarRarity isSelected={selectedRarity === 4} />
      </button>
      <button
        className={`rarity-button ${selectedRarity === 5 ? "active" : ""}`}
        onClick={() => handleRarityChange(5)}
        aria-label="5-star rarity"
        role="button"
        tabIndex={0}
      >
        <FiveStarRarity isSelected={selectedRarity === 5} />
      </button>
    </div>
  );
}

Rarity.propTypes = {
  handleRarityChange: PropTypes.func.isRequired,
  selectedRarity: PropTypes.number.isRequired,
};

export default Rarity;
