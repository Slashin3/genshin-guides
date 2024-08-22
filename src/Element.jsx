import React from 'react';
import PropTypes from 'prop-types';

const elements = [
  { name: "anemo", imgSrc: "https://rerollcdn.com/GENSHIN/UI/element_anemo.png" },
  { name: "geo", imgSrc: "https://rerollcdn.com/GENSHIN/UI/element_geo.png" },
  { name: "electro", imgSrc: "https://rerollcdn.com/GENSHIN/UI/element_electro.png" },
  { name: "hydro", imgSrc: "https://rerollcdn.com/GENSHIN/UI/element_hydro.png" },
  { name: "pyro", imgSrc: "https://rerollcdn.com/GENSHIN/UI/element_pyro.png" },
  { name: "cryo", imgSrc: "https://rerollcdn.com/GENSHIN/UI/element_cryo.png" },
  { name: "dendro", imgSrc: "https://rerollcdn.com/GENSHIN/UI/element_dendro.png" },
];

function Element({ onClick, selectedElement }) {
  const handleElementClick = (elementName) => {
    onClick(elementName === selectedElement ? null : elementName);
  };

  return (
    <div className="element-container">
      {elements.map((el, index) => (
        <button
          key={index}
          className={`element-button ${selectedElement === el.name ? 'active' : ''}`}
          onClick={() => handleElementClick(el.name)}
          aria-label={el.name}
          role="button"
          tabIndex={0}
        >
          <img src={el.imgSrc} alt={el.name} title={el.name} />
        </button>
      ))}
    </div>
  );
}

Element.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedElement: PropTypes.string,
};

export default Element;
