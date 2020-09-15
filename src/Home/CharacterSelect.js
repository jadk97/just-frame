import React from "react";
import SFVData from "../sfv.json";
import CharacterPortrait from "./CharacterPortrait";
import "./CharacterSelect.css";
import { useHistory } from "react-router-dom";
const CharacterSelect = (props) => {
  const history = useHistory();
  let leftCharacterPortraits = [];
  let rightCharacterPortraits = [];
  for (let character in SFVData) {
    if (SFVData[character].stats.charaSelectIndex < 20) {
      leftCharacterPortraits.push({ name: character, ...SFVData[character] });
    }
    else if (SFVData[character].stats.charaSelectIndex >= 20) {
      rightCharacterPortraits.push({ name: character, ...SFVData[character] })
    }
  }

  leftCharacterPortraits.sort((a, b) => a.stats.charaSelectIndex - b.stats.charaSelectIndex);
  rightCharacterPortraits.sort((a, b) => a.stats.charaSelectIndex - b.stats.charaSelectIndex)
  console.log(leftCharacterPortraits);
  console.log(rightCharacterPortraits);

  const characterPortraitClickHandler = (name) => {
    console.log(name);
    history.push(`/character/${name}`)
  }
  return (
    <div className="character-select">
      <div className="character-select-coloumn clmn-left">
        <div className="character-select-row">
          {leftCharacterPortraits.map((character, index) => {
            if (index <= 9)
              return (

                <CharacterPortrait clickHandler={() => characterPortraitClickHandler(character.name)} key={"portrait" + character.stats.charaSelectIndex} portrait={character.stats.charaPortrait} />
              )
          })}
        </div>
        <div className="character-select-row">
          {leftCharacterPortraits.map((character, index) => {
            if (index > 9)
              return (

                <CharacterPortrait clickHandler={() => characterPortraitClickHandler(character.name)} key={"portrait" + character.stats.charaSelectIndex} portrait={character.stats.charaPortrait} />
              )
          })}
        </div>
      </div>
      <div className="character-select-center">
        
      
      </div>
      <div className="character-select-coloumn clmn-right">
        <div className="character-select-row">
          {rightCharacterPortraits.map((character, index) => {
            if (index <= 9)
              return (

                <CharacterPortrait clickHandler={() => characterPortraitClickHandler(character.name)}  orientation={"right"} key={"portrait" + character.stats.charaSelectIndex} portrait={character.stats.charaPortrait} />
              )
          })}
        </div>
        <div className="character-select-row">
          {rightCharacterPortraits.map((character, index) => {
            if (index > 9)
              return (

                <CharacterPortrait clickHandler={() => characterPortraitClickHandler(character.name)} orientation={"right"} key={"portrait" + character.stats.charaSelectIndex} portrait={character.stats.charaPortrait} />
              )
          })}
        </div>
      </div>
    </div>)
};

export default CharacterSelect;