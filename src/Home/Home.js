import React from "react";
import "./Home.css";
import homeBanner from "../images/home-banner.jpg";
import CharacterSelect from "./CharacterSelect";
const Home = (props) => {
  return (
    <div className="home">
      <div className="home-banner-container">
        <div className="home-banner-text-content">
          <h1>Welcome to Just Frame.</h1>
          <p>A fan-site made for displaying Street Fighter V's frame data. </p>
          <p>All credits go to the <a href="https://fullmeter.com/fat/" >FAT</a> team for providing the relevant character information</p>
        </div>
      </div>
      <div className="home-character-select">
        <div className="character-select-header">
          CHARACTER SELECT
        </div>
        <CharacterSelect />
      </div>
    </div>)
}

export default Home;