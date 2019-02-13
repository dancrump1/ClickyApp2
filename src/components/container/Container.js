import React from "react";
import "./Container.css"
import Card from "../card/Card"
import Instructions from "../instructions/Instructions"
import NavBar from "../NavBar/NavBar"

class Container extends React.Component{

    state={
     clickedPhotos : [],
     score: 0,
     highScore: 0
    }

     handleSelect = (id) => {


        console.log(id)
        this.state.clickedPhotos.push(id);
        console.log(this.state.clickedPhotos)

        if(this.state.clickedPhotos.includes(id)){
            console.log("its alive")
            // this.setState({clickedPhotos: []})
        }

    };
    
    render(){

        const cardImgs = [
            {src: "./images/8ffe4079fc18f9ef746442b25217599f.png",
             id: 1,
            }, 
            {src: "./images/30d887ea247e773973d95281a4f87588.png",
            id: 2
            }, 
            {src: "./images/58f37709a4fa116215a9240d.png",
            id: 3
            }, 
            {src: "./images/104-1049974_self-promoting-jerry-rick-and-morty-png.png",
            id: 4
            },
            {src: "./images/21986aecb5f72825562820781f1ce1b2.jpg",
            id: 5
            },
            {src: "./images/c3kqudP.jpg",
            id: 6
            },
            {src: "./images/cromulon.png",
            id: 7
            },
            {src: "./images/download.jpg",
            id: 8
            },
            {src: "./images/Jessica-0.jpg",
            id: 9
            },
            {src: "./images/kisspng-fan-art-character-rick-and-morty-5ac4653d578b40.5710493615228204133586.jpg",
            id: 10
            },
            {src: "./images/rick-and-morty-302-2.jpg",
            id: 11
            },
            {src: "./images/S2e4_beth_scream.png",
            id: 12
            },

        ];

    return(
        <div>
            <NavBar score={this.score} highscore={this.highScore}/>
        
            <Instructions />
        
        <Card cardImgs={cardImgs} handleSelect = {this.handleSelect}/>
        </div>
        
    )
}
}

export default Container;