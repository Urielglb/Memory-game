import React, { useState } from 'react';
import Cards from './cards';

/**
 * Function that will check if the cards picked in a turn are the same or not , if they are they will disapear, if they´re not
 *  they will flip over
 * @param {*The first card picked} card1 
 * @param {*The second card picked} card2 
 */
function checkCards(card1,card2){
    if (card1.id === card2.id) {
        setTimeout(() => {
            card1.classList.add("hide");
            card2.classList.add("hide");
        }, 1000);
    }else{
        setTimeout(() => {
            card1.style.transform = "rotateY(360deg)";
            card2.style.transform = "rotateY(360deg)"; 
        }, 2000);
    }
}
/**
 * React Component that will create the cards and control their interactions with the user 
 * @param {The props of the Game} props 
 */
const Game = (props) =>{
    const [firstCard,setCard] = useState(null);
    const [turnOver,setTurn] = useState(true);
    return(
        <div>
            <h1>¡Feliz Día!</h1>
            <Cards imgs={props.imgs} 
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
        </div>
    );
  
}

export default Game;