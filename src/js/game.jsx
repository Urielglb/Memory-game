import React, { useState } from 'react';
import imgs from './imgs/garcia'
import Cards from './cards'


function checkCards(card1,card2){
    if (card1.id === card2.id) {
        card1.classList.add("hide");
        card2.classList.add("hide");
    }else{
        setTimeout(() => {
            card1.style.transform = "rotateY(360deg)";
            card2.style.transform = "rotateY(360deg)"; 
        }, 2000);
    }
}

const Game = () =>{
    const [firstCard,setCard] = useState(null);
    const [turnOver,setTurn] = useState(true);
    return(
          <Cards imgs={imgs} 
          onClick={(e)=>{
            const card = e.target.parentElement;
            if(!card.classList.contains("card") || card.classList.contains("hide") || !turnOver){
                return;
            }
            if (!firstCard) {
                card.style.transform="rotateY(180deg)";
                setCard(card);  
            }else{
                setTurn(false);
                card.style.transform="rotateY(180deg)";
                checkCards(card,firstCard);
                setCard(null);
                setTimeout(() => {
                    setTurn(true);
                },2000);
            }
          }
        }></Cards>
    );
  
}

export default Game;