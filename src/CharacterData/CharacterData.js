import React from "react";
import CharacterOverview from "./CharacterOverview";
import SFVData from "../sfv.json";
import { useParams } from "react-router-dom";
import CharacterFrameData from "./CharacterFrameData";
const CharacterData = (props) => {
  const params = useParams();
  console.log(params.character);
  const currentCharacter = SFVData[params.character];
  console.log(currentCharacter);
  const frameDataNormalMoves = Object.keys(SFVData[params.character].moves.normal).map((key) => {
    return { ...SFVData[params.character].moves.normal[key] };
  });
  console.log("normal moves", frameDataNormalMoves);
  return (
    <div className="character-data">
      <CharacterOverview charaName={params.character} charaStats={currentCharacter.stats}/>
      <CharacterFrameData frameData={frameDataNormalMoves} />
    </div>
  )
}

export default CharacterData;