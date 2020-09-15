import React from "react";
import "./CharacterFrameData.css";

const CharacterFrameData = (props) => {
  return (
    <table className="frame-data-table">
      <thead>
        <tr>
          <th>Move Name</th>
          <th>Startup</th>
          <th>Active</th>
          <th>Recovery</th>
          <th>On Hit</th>
          <th>On Block</th>
          <th>VT oH</th>
          <th>VT oB</th>
          <th>VS oH</th>
          <th>Damage</th>
          <th>Stun</th>
          <th>Attack Lvl</th>
          <th>Cancel Into</th>
          <th>KD Adv</th>
          <th>KDR Adv</th>
          <th>KDRB Adv</th>
        </tr>
      </thead>

      <tbody>
        {props.frameData.map((move) => (
          <tr>
            <td>{move.moveName}</td>
            <td>{move.startup}</td>
            <td>{move.active}</td>
            <td>{move.recovery || "~"}</td>
            <td>{move.onHit || "~"}</td>
            <td>{move.onBlock || "~"}</td>
            <td>{move.vtcOnHit || "~"}</td>
            <td>{move.vtcOnBlock || "~"}</td>
            {move.vscOnHit ? (
              <td>{move.vscOnHit}</td>
            ) : (
                <td>~</td>
              )}
            <td>{move.damage}</td>
            <td>{move.stun}</td>
            <td>{move.attackLevel}</td>
            {move.cancelsTo ? (
              <td>{move.cancelsTo.join(", ")}</td>
            ): (
              <td></td>
            )}
          
            {move.kd ? (
              <td>{move.kd}</td>
            ) : (
                <td>~</td>
              )}
            {move.kdr ? (
              <td>{move.kdr}</td>
            ) : (
                <td>~</td>
              )}
            {move.kdrb ? (
              <td>{move.kdrb}</td>
            ) : (
                <td>~</td>
              )}
          </tr>
        ))}
      </tbody>
    </table>)
}

export default CharacterFrameData;