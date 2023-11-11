import edit from "../images/VectorAvatar.png";
import add from "../images/add.svg";
import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";
export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    Promise.all([api.getUserApi(), api.getAllTodos()])
      .then(([userInfo, data]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__card">
          <button className="avatar" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt={userName} className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                className="profile__button profile__button_type_edit"
                onClick={props.onEditProfile}
              >
                <img src={edit} className="image image_type_edit" alt="edit" />
              </button>
            </div>
            <p className="profile__text">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__button profile__button_type_add"
          onClick={props.onAddPlace}
        >
          <img src={add} className="image image_type_add" alt="Добавить" />
        </button>
      </section>
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          );
        })}
      </section>
    </main>
  );
}
