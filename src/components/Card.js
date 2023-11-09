import React from 'react';

export default function Card(props){
    function handleClick() {
        props.onCardClick(props.card);
      } 
      return(
        <div class="cards__item">
        <button class="cards__del" type="button" name="buttonDelete"></button>
        <img class="cards__img" id="myImg" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
        <span class="cards__info">
          <h2 class="cards__title">{props.card.name}</h2>
          <span>
          <button class="cards__like-button" type="button"></button>
          <div class="cards__like-number">{props.card.likes.length}</div>
        </span>
        </span>
      </div>
      )
}