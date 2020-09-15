import React from "react";
import "./CharacterOverview.css";

const CharacterOverview = (props) => {
  return (
    <div className="character-overview" style={{ background: props.charaStats.color }}>
      <div className="character-description">
        <div className="character-name">
          {props.charaName}
        </div>

        <div className="character-phrase">
          "{props.charaStats.phrase}"
        </div>
        <div className="character-stats">
          <div className="stat-row">
            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                Health
              </div>

              <div className="stat-row-entry-value">
                {props.charaStats.health}
              </div>
            </div>

            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                Stun
              </div>

              <div className="stat-row-entry-value">
                {props.charaStats.stun}
              </div>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                Back Jump
            </div>

              <div className="stat-row-entry-value">
                {props.charaStats.bJump}
              </div>
            </div>

            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                Neutral Jump
            </div>

              <div className="stat-row-entry-value">
                {props.charaStats.nJump}
              </div>
            </div>

            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                Forward Jump
              </div>

              <div className="stat-row-entry-value">
                {props.charaStats.fJump}
              </div>
            </div>

          </div>

          <div className="stat-row">
            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                Forward Dash
              </div>

              <div className="stat-row-entry-value">
                {props.charaStats.fDash}
              </div>
            </div>

            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                Back Dash
              </div>

              <div className="stat-row-entry-value">
                {props.charaStats.bDash}
              </div>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                Forward Walk
            </div>

              <div className="stat-row-entry-value">
                {props.charaStats.fWalk}
              </div>
            </div>

            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                Back Walk
            </div>

              <div className="stat-row-entry-value">
                {props.charaStats.bWalk}
              </div>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                F.Jump Distance
              </div>

              <div className="stat-row-entry-value">
                {props.charaStats.fJumpDist}
              </div>
            </div>

            <div className="stat-row-entry">
              <div className="stat-row-entry-label">
                B.Jump Distance
              </div>

              <div className="stat-row-entry-value">
                {props.charaStats.bJumpDist}
              </div>
            </div>
          </div>

          <div className="stat-row">
          <div className="stat-row-entry">
            <div className="stat-row-entry-label">
              Throw range
            </div>

            <div className="stat-row-entry-value">
              {props.charaStats.throwRange}
            </div>
          </div>

          <div className="stat-row-entry">
            <div className="stat-row-entry-label">
              Throw Hurtbox Range
            </div>

            <div className="stat-row-entry-value">
              {props.charaStats.throwHurt}
            </div>
          </div>
        </div>


        </div>
      </div>
      <img src={props.charaStats.charaPortrait} />
    </div>
  )
}

export default CharacterOverview;