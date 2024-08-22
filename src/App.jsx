import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Image from './Image';
import Nav from './Nav';
import characterList from './characterList';
import CharacterPage from './CharacterPage'; // Import the character page component

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
              
              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search characters..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-bar"
              />

              {/* Navigation Component */}
              <Nav
                onRarityChange={handleRarityChange}
                selectedRarity={selectedRarity}
                onElementChange={handleElementChange}
                selectedElement={selectedElement}
                onWeaponChange={handleWeaponChange}
                selectedWeapon={selectedWeapon}
              />

              {/* Display Filtered Characters */}
              <div className="img-container">
                {filteredCharacters.map((character, index) => (
                  <Image
                    key={index}
                    imgSrc={character.imgSrc}
                    name={character.name}
                    onClick={() => window.location.href = `/${character.name}`}
                  />
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
