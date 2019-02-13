import React from "react";
import TopScore from "../NavBar/Topscore";
import CurrentScore from "../NavBar/CurrentScore";
import "./Score.css"


const Score = props => {

    return(
        <div className = "both-scores">
            <div>{props.score}</div>
            <p className= "both-scores">||</p>
            <div>{props.highscore}</div>

        </div>
            )
}

export default Score;