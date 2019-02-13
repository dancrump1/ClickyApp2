import React from "react";
import "./Card.css"

const Card = props => {


    return(
        <div className="container">
            {props.cardImgs.sort(function(a, b){return 0.5 - Math.random()}).map(item => (
                <div key={item.id} style={ {backgroundImage: `url(${item.src})`, height: "170px"}} value = {item.id} onClick={()=>props.handleSelect(item.id)}></div>
            ))}
        </div>
            )
}

export default Card;