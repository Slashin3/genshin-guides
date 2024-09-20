function Table() {
  return (
    <table className="weapon-table">
      <thead>
        <tr>
          <th>Role</th>
          <th>Weapons</th>
          <th>Artifacts</th>
          <th>Stats priority</th>
          <th>Ability Tips</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Skill only Off-field DPS</td>
          <td>
            <p className="five-star">1. Uraku Misugiri (5✩)</p>
            <p className="four-star">2. Cinnabar Spindle (4✩) [R5]</p>
            <p className="three-star">3. Harbinger of Dawn (3✩) [R5]*</p>
            <p className="five-star">~= Primordial Jade Cutter (5✩)</p>
            <p className="five-star">4. Light of Foliar Incision (5✩)</p>
            <p className="five-star">~= Haran Geppaku Futsu (5✩)</p>
            <p className="five-star">~= Mistsplitter Reforged (5✩)*</p>
            <p className="four-star">~= Wolf-Fang (4✩) [R1]*</p>
            <p className="five-star"> 5. Freedom-Sworn (5✩)*</p>
          </td>
          <td>
            <p>1. Husk of Opulent Dreams (4)</p>
            <p>~= Golden Troupe (4)*</p>
            <p>
              2. Husk of Opulent Dreams (2) Archaic Petra (2) Golden Troupe (2)
              [Choose Two]
            </p>
            <p>3. Archaic Petra (4)*</p>
            <p>4. Tenacity of the Millelith (4)</p>
            <p>5. Noblesse Oblige (4)</p>
          </td>
          <td>
            <p>Sands - DEF%</p>
            <p> Goblet - Geo DMG</p>
            <p>Circlet - Crit Rate / DMG / DEF%</p>
          </td>
          <td>
            Albedo's Elemental Skill particle generation is completely RNG like
            Zhongli, but with better odds.
          </td>
        </tr>
        <tr>
          <td>Skill + burst Off-field DPS</td>
          <td>
            <p className="five-star">1. Uraku Misugiri (5✩)</p>
            <p className="four-star">2. Primordial Jade Cutter (5✩)</p>
            <p className="four-star">~= Cinnabar Spindle (4✩) [R5]</p>
            <p className="five-star">~= Primordial Jade Cutter (5✩)</p>
            <p className="four-star">3. Wolf Fang (4✩) [R1]*</p>
            <p className="five-star">~= Light of Foliar Incision (5✩)</p>
            <p className="five-star">~= Mistsplitter Reforged (5✩)</p>
            <p className="five-star">~= Haran Geppaku Futsu (5✩)</p>
            <p className="three-star">~= Harbinger of Dawn (3✩) [R5]</p>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
