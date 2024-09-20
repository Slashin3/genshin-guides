import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import characterData from "./characterData";
import "./CharacterPage.css";
// import FiveStarRarity from './FiveStarRarity.jsx';
import Table from "./Table.jsx";

function CharacterPage() {
  const { characterName } = useParams();
  const navigate = useNavigate();
  const character = characterData[characterName];

  const handleHomeClick = () => {
    navigate("/"); // Navigate to home page
  };

  if (!character) {
    return <h2>Character not found</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <button
          onClick={handleHomeClick}
          style={{
            backgroundColor: "rgb(201, 108, 201)",
            borderRadius: "8px",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            fontSize: "24px",
            padding: "10px 20px", // Add padding for better spacing
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none", // Remove underline if using Link
          }}
        >
          &larr;
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={character.imgSrc} alt={character.name} />
        <div>
          <h1>{character.name}</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`https://rerollcdn.com/GENSHIN/UI/element_${character.element}.png`}
              alt={character.element}
              style={{ width: "30px", height: "auto", marginRight: "10px" }}
            />
            <img
              src={`https://rerollcdn.com/GENSHIN/UI/weapon_${character.weapon.toLowerCase()}.png`}
              alt={character.weapon}
              style={{ width: "30px", height: "auto" }}
            />
            {/* <span style={{ marginLeft: '10px' }}>Rarity: <FiveStarRarity /></span> */}
          </div>
          <p>{character.description}</p>
        </div>
      </div>
      <Table />
      <div>
        <h3>OFF-FIELD DPS</h3>
        <p>
          Albedo is a character that can summon a Geo Construct from his
          Elemental Skill which deals damage on a 2 second interval whenever
          enemies in the field are damaged. His Elemental Burst provides 125 EM
          to the party, which is good on teams that rely on amplification
          reactions, such as Vaporize. It is worth noting that since his stat
          priority is focused on DEF (Elemental Skill scaling), you might want
          to skip casting Elemental Burst if your team doesn't benefit from the
          125 EM buff. Another option is to build him with ATK-DEF Hybrid, which
          ends up with lower Skill damage but higher Burst damage.
        </p>
        <h3>SKILL ONLY</h3>
        <p>
          Regarding Weapon Choices: Harbinger of Dawn: Albedo's Elemental Skill
          scales with Defense, which is why the Base ATK from the weapon doesn't
          matter that much. Harbinger of Dawn offers a lot of Crit stats which
          is why it is one of the strongest weapons for him despite being a 3
          star weapon. The downside of this weapon is that you'd need to keep
          Albedo's HP at 90% or higher to benefit from the passive, so it might
          be annoying to use against certain enemies which has a HP lowering
          debuff, even when off-field, such as Corrosion. Mistsplitter Reforged:
          Realistically you are only able to get 2 stacks of this weapon's
          passive and this requires setup. Generally just use Harbinger of Dawn
          instead and give your Mistsplitter Reforged to another sword DPS
          character. Freedom-Sworn: Equipping this weapon will decrease Albedo's
          own damage significantly but he is one of the better Freedom-Sworn
          holders since he can trigger the passive quite easily to buff your
          other party members. Wolf-Fang: Weapon rankings use [R1]. At [R5], it
          performs better than Harbinger of Dawn due to it being unconditional.
          It's worth noting the Crit Rate passive of Wolf-Fang does not stack
          off-field, you can perform Skill>N1>Swap character instead of just
          Skill>Swap character, for two stacks instead of one, but the
          difference isn't significant.
        </p>
        <h3>SKILL + BURST</h3>
        <p>
          Regarding Weapon Choices: Harbinger of Dawn: Albedo's Elemental Skill
          scales with Defense, which is why the Base ATK from the weapon doesn't
          matter that much. Harbinger of Dawn offers a lot of Crit stats which
          is why it is one of the strongest weapons for him despite being a 3
          star weapon. The downside of this weapon is that you'd need to keep
          Albedo's HP at 90% or higher to benefit from the passive, so it might
          be annoying to use against certain enemies which has a HP lowering
          debuff, even when off-field, such as Corrosion. Mistsplitter Reforged:
          Realistically you are only able to get 2 stacks of this weapon's
          passive and this requires setup. Generally just use Harbinger of Dawn
          instead and give your Mistsplitter Reforged to another sword DPS
          character. Freedom-Sworn: Equipping this weapon will decrease Albedo's
          own damage significantly but he is one of the better Freedom-Sworn
          holders since he can trigger the passive quite easily to buff your
          other party members. Wolf-Fang: Weapon rankings use [R1]. At [R5], it
          performs better than Primordial Jade Cutter. It's worth noting the
          Crit Rate passive of Wolf-Fang does not stack off-field, you can
          perform Burst>Skill>N1>Swap character instead of just Burst>Skill>Swap
          character, for more stacks, but the difference isn't significant.
        </p>
      </div>
    </div>
  );
}

export default CharacterPage;
