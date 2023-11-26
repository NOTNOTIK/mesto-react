import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

export default function AddPlacePopup(props) {

const Name = React.useRef(null)
const Link = React.useRef(null)
    function handleSubmit(e) {

        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onAddPlace({
            name: Name.current.value,
            link: Link.current.value
        });

      }

      return(
        <PopupWithForm
        name="add"
        isOpen={props.isOpen}
        title="Новое Место"
        buttonText="Создать"
        onClose={props.onClose}
        onSubmit={handleSubmit}
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
                ref={Name}
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
                ref={Link}
              />
              <span className="error" id="url-error" />
            </label>
          </fieldset>
        }
      />
      )

}