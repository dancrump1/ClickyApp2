import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./NavBar.css"
import Score from "../score/Score";


class NavBar extends Component{
    

    render(){
    return(
        <div className="NavBar">
        <ul className="nav-list">
        <Link to="/">
        <li  className={"Welcome nav-item"}>Clicky Game</li>
        </Link>
        <div className="score-container">
        <Score className="score-container" score={this.score} highscore={this.highscore}/>
        </div>
        </ul>
        </div>
    );
    }
}

export default NavBar;