import React from 'react';

export default function Card(props){
    function handleClick() {
        props.onCardClick(props.card);
      } 
      return(
        <div className="cards__item">
        <button className="cards__del" type="button" name="buttonDelete"></button>
        <img className="cards__img" id="myImg" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
        <span className="cards__info">
          <h2 className="cards__title">{props.card.name}</h2>
          <span>
          <button className="cards__like-button" type="button"></button>
          <div className="cards__like-number">{props.card.likes.length}</div>
        </span>
        </span>
      </div>
      )
}