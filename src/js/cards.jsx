import React from 'react'
import '../styles/card.scss'


const Cards = (props)=>{
    let cards = props.imgs.map((img)=>{
        return(
            <div className="card" id ={img.id} onClick={props.onClick}>
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