import React from "react";
import "./CharacterPortrait.css";
const CharacterPortrait = (props) => {
  return (
    <div onClick={props.clickHandler} className={`character-select-portrait ${props.orientation === "right" ? "flipped" : ""}`}>
      <img src={props.portrait} />
    </div>
  )
};

export default CharacterPortrait;