import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="edit"
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        buttonText="Сохранить"
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__label">
              <input
                type="text"
                placeholder="Введите имя"
                name="name"
                className="popup__input popup__input_type_name"
                minLength={2}
                maxLength={40}
                required=""
              />
              <span className="error" id="name-error" />
            </label>
            <label className="popup__label">
              <input
                type="text"
                placeholder="Введите род деятельности"
                name="about"
                className="popup__input popup__input_type_job"
                minLength={2}
                maxLength={200}
                required=""
              />
              <span className="error" id="about-error" />
            </label>
    </>
        }
      />
      <PopupWithForm
        name="add"
        isOpen={isAddPlacePopupOpen}
        title="Новое Место"
        buttonText="Создать"
        onClose={closeAllPopups}
        children={
          <fieldset className="popup__set">
            <label>
              <input
                type="text"
                placeholder="Название"
                name="title"
                className="popup__input"
                required=""
                minLength={2}
                maxLength={30}
                autoComplete="off"
              />
              <span className="error" id="title-error" />
            </label>
            <label className="popup__label">
              <input
                type="url"
                placeholder="Ссылка на картинку"
                name="url"
                className="popup__input"
                autoComplete="off"
                required=""
              />
              <span className="error" id="url-error" />
            </label>
          </fieldset>
        }
      />

      <PopupWithForm
        name="ava"
        isOpen={isEditAvatarPopupOpen}
        title="Сменить аватар"
        buttonText="Сменить"
        onClose={closeAllPopups}
        children={
          <fieldset className="popup__set">
            <label>
              <input
                type="url"
                placeholder="Ссылка на картинку"
                name="avatar"
                className="popup__input"
                autoComplete="off"
                required=""
              />
              <span className="error" id="avatar-error" />
            </label>
          </fieldset>
        }
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
