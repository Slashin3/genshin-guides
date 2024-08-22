import React from "react";
import Rarity from "./Rarity.jsx";
import Element from "./Element.jsx";
import Weapon from "./Weapon.jsx";

function Nav({ onRarityChange, selectedRarity, onElementChange, selectedElement, onWeaponChange, selectedWeapon }) {
  return (
    <div className="nav-bar">
      <div className="rarity">
        <Rarity handleRarityChange={onRarityChange} selectedRarity={selectedRarity} />
      </div>
      <div className="element">
        <Element onClick={onElementChange} selectedElement={selectedElement} />
      </div>
      <div className="weapon">
        <Weapon onClick={onWeaponChange} selectedWeapon={selectedWeapon} />
      </div>
    </div>
  );
}

export default Nav;
