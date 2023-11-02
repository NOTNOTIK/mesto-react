import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <>
    <header className="header">
      <img
        src="<%=require('./images/Vector.svg')%>"
        alt="Упсики"
        className="header__logo"
      />
    </header>
    <main className="main">
      <section className="profile">
        <div className="profile__card">
          <div className="avatar">
            <img
              src="#"
              alt="Здесь могла бы быть ваша аватарка:("
              className="profile__avatar"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title" />
              <button
                type="button"
                className="profile__button profile__button_type_edit"
              >
                <img
                  src="<%=require('./images/edit.svg')%>"
                  className="image image_type_edit"
                  alt="тут ты короче можешь отредачить"
                />
              </button>
            </div>
            <p className="profile__text" />
          </div>
        </div>
        <button
          type="button"
          className="profile__button profile__button_type_add"
        >
          <img
            src="<%=require('./images/add.svg')%>"
            className="image image_type_add"
            alt="Добавить"
          />
        </button>
      </section>
      <section className="cards"></section>
    </main>
    <template className="template" />
    <footer className="footer">
      <p className="footer__title">© 2023 Idk, who I am</p>
    </footer>
    <div className="popup popup_type_edit">
      <div className="popup__container">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form
          className="popup__form"
          name="popup_form_submit"
          method="get"
          noValidate=""
        >
          <fieldset className="popup__set">
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
            <button type="submit" className="popup__submit" name="submitEdit">
              Сохранить
            </button>
          </fieldset>
        </form>
        <button type="button" className="popup__close" id="closeEdit" />
      </div>
    </div>
    <div className="popup popup_type_add">
      <div className="popup__container">
        <h2 className="popup__title">Новое место</h2>
        <form
          className="popup__form"
          name="popup_form_addCard"
          method="get"
          noValidate=""
        >
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
            <button type="submit" className="popup__submit" name="submitAdd">
              Создать
            </button>
          </fieldset>
        </form>
        <button type="button" className="popup__close" id="closeAdd" />
      </div>
    </div>
    <div className="popup popup_type_ava">
      <div className="popup__container">
        <h2 className="popup__title">Сменить аватар</h2>
        <form
          className="popup__form"
          name="popup_form_Avatar"
          method="get"
          noValidate=""
        >
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
            <button type="submit" className="popup__submit" name="submitAva">
              Сменить
            </button>
          </fieldset>
        </form>
        <button type="button" className="popup__close" id="closeAva" />
      </div>
    </div>
    <div className="popup popup_type_del">
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <form
          className="popup__form"
          name="popup_form_del"
          method="get"
          noValidate=""
        >
          <fieldset className="popup__set">
            <label>
              <span className="error" id="del-error" />
            </label>
            <button type="submit" className="popup__submit" name="submitDel">
              Удалить
            </button>
          </fieldset>
        </form>
        <button type="button" className="popup__close" id="closeDel" />
      </div>
    </div>
    <div className="popup popup_type_image">
      <div className="popup__img-container">
        <img className="popup__image" src="#" alt="Изображение не загружено" />
        <p className="popup__figcaption" />
        <button type="button" className="popup__close" id="closeImg" />
      </div>
    </div>
  </>
  )

}

export default App;
