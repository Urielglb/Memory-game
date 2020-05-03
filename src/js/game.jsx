import React, { useState } from 'react';
import imgs from './imgs/garcia'
import Cards from './cards'




function flipCard(e){
    let card = e.target.parentElement;
    card.style.transform = "rotateY(180deg)";
}

function checkCards(card1,card2){
    if (card1.id === card2.id) {
        setTimeout(() => {
            card1.classList.add("hide");
            card2.classList.add("hide");
        }, 5000);
    }else{
        setTimeout(() => {
            card1.style.transform = "rotateY(360deg)";
            card2.style.transform = "rotateY(360deg)"; 
        }, 5000);

    }
}

const Game = () =>{
    const [card,setCard] = useState(null);
    return(
          <Cards imgs={imgs} 
          onClick={(e)=>{
            if (!card) {
                flipCard(e);
                setCard(e.target.parentElement);    
            }else{
                flipCard(e);
                checkCards(card,e.target.parentElement);
                setCard(null);
            }
          }
        }></Cards>
    );
  
}

export default Game;