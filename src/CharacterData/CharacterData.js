import React from "react";
import CharacterOverview from "./CharacterOverview";
import SFVData from "../sfv.json";
import { useParams } from "react-router-dom";
const CharacterData = (props) => {
  const params = useParams();
  console.log(params.character);
  const currentCharacter = SFVData[params.character];
  console.log(currentCharacter);
  return (
    <div className="character-data">
      <CharacterOverview charaName={params.character} charaStats={currentCharacter.stats}/>
    </div>
  )
}

export default CharacterData;