import React from 'react'
import '../styles/card.scss'

/**
 * React Component that will create the cards of the game and give them the look in the game 
 * @param {The props of the Cards} props 
 */
const Cards = (props)=>{
    let i = 0;
    let cards = props.imgs.map((img)=>{
        i++;   
        return(
            <div className="card" id ={img.id} onClick={props.onClick} key={img.id + i.toString()}>
                <div className="theback"></div>
                <div className="thefront">
                    <img src={img.src} alt="img"></img>
                </div>
        </div>
        );
    });
    return(
        <div className="cards">
            {cards}
        </div>
    );
}

export default Cards;