import React from 'react';
import { useParams } from 'react-router-dom';
import characterData from './characterData'; // Adjust the path if necessary
import characterList from './characterList';

function CharacterPage() {
  const { characterName } = useParams();
  const character = characterData[characterName];

  if (!character) {
    return <h2>Character not found</h2>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.imgSrc} alt={character.name} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{character.description}</p>
      <h2>Recommended Weapons</h2>
    </div>
  );
}

export default CharacterPage;
