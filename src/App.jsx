import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image from './Image';
import Nav from './Nav';
import characterList from './characterList';
import CharacterPage from './CharacterPage';

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedRarity, setSelectedRarity] = React.useState(null);
  const [selectedElement, setSelectedElement] = React.useState(null);
  const [selectedWeapon, setSelectedWeapon] = React.useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleRarityChange = (rarity) => {
    setSelectedRarity((prevRarity) => (prevRarity === rarity ? null : rarity));
  };

  const handleElementChange = (element) => {
    setSelectedElement((prevElement) => (prevElement === element ? null : element));
  };

  const handleWeaponChange = (weapon) => {
    setSelectedWeapon((prevWeapon) => (prevWeapon === weapon ? null : weapon));
  };

  const filteredCharacters = characterList.filter((character) => {
    const matchesSearchTerm = character.name.toLowerCase().includes(searchTerm);
    const matchesRarity = selectedRarity ? character.rarity === selectedRarity : true;
    const matchesElement = selectedElement ? character.element === selectedElement : true;
    const matchesWeapon = selectedWeapon ? character.weapon === selectedWeapon : true;

    return matchesSearchTerm && matchesRarity && matchesElement && matchesWeapon;
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Genshin Impact Character Guides</h1>
              
              <input
                type="text"
                placeholder="Search characters..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-bar"
              />

              <Nav
                onRarityChange={handleRarityChange}
                selectedRarity={selectedRarity}
                onElementChange={handleElementChange}
                selectedElement={selectedElement}
                onWeaponChange={handleWeaponChange}
                selectedWeapon={selectedWeapon}
              />

              <div className="img-container">
                {filteredCharacters.map((character, index) => (
                  <Link to={`/${character.name}`} key={index} className="character-link">
                    <Image
                      imgSrc={character.imgSrc}
                      name={character.name}
                    />
                  </Link>
                ))}
              </div>
            </div>
          }
        />
        <Route path="/:characterName" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
