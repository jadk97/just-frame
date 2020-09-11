import React from "react";
import SFVData from "../sfv.json";
import CharacterPortrait from "./CharacterPortrait";
import "./CharacterSelect.css";
const CharacterSelect = (props) => {
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
  return (
    <div className="character-select">
      <div className="character-select-coloumn clmn-left">
        <div className="character-select-row">
          {leftCharacterPortraits.map((character, index) => {
            if (index <= 9)
              return (

                <CharacterPortrait key={"portrait" + character.stats.charaSelectIndex} portrait={character.stats.charaPortrait} />
              )
          })}
        </div>
        <div className="character-select-row">
          {leftCharacterPortraits.map((character, index) => {
            if (index > 9)
              return (

                <CharacterPortrait key={"portrait" + character.stats.charaSelectIndex} portrait={character.stats.charaPortrait} />
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

                <CharacterPortrait orientation={"right"} key={"portrait" + character.stats.charaSelectIndex} portrait={character.stats.charaPortrait} />
              )
          })}
        </div>
        <div className="character-select-row">
          {rightCharacterPortraits.map((character, index) => {
            if (index > 9)
              return (

                <CharacterPortrait orientation={"right"} key={"portrait" + character.stats.charaSelectIndex} portrait={character.stats.charaPortrait} />
              )
          })}
        </div>
      </div>
    </div>)
};

export default CharacterSelect;