

import React from 'react';
import PropTypes from 'prop-types';

const weapons = [
  { name: "Bow", imgSrc: "https://rerollcdn.com/GENSHIN/UI/weapon_bow.png" },
  {
    name: "Catalyst",
    imgSrc: "https://rerollcdn.com/GENSHIN/UI/weapon_catalyst.png",
  },
  {
    name: "Claymore",
    imgSrc: "https://rerollcdn.com/GENSHIN/UI/weapon_claymore.png",
  },
  {
    name: "Polearm",
    imgSrc: "https://rerollcdn.com/GENSHIN/UI/weapon_polearm.png",
  },
  {
    name: "Sword",
    imgSrc: "https://rerollcdn.com/GENSHIN/UI/weapon_sword.png",
  },
];
function Weapon({ onClick, selectedWeapon }) {
  return (
    <div className="weapon-container">
      {weapons.map((weapon, index) => (
        <button
          key={index}
          className={`weapon-button ${selectedWeapon === weapon.name ? 'active' : ''}`}
          onClick={() => onClick(weapon.name)}
          aria-label={weapon.name}
          role="button"
          tabIndex={0}
        >
          <img src={weapon.imgSrc} alt={weapon.name} title={weapon.name} />
        </button>
      ))}
    </div>
  );
}

Weapon.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedWeapon: PropTypes.string,
};

export default Weapon;
