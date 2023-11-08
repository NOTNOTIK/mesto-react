
import './index.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupImage from './components/ImagePopup.js';
function App() {
  const handleEditProfileClick = () =>{
    const popupEditProfile = document.querySelector('.popup_type_edit')
    popupEditProfile.classList.add('popup_opened')
  };
  const  handleAddPlaceClick = () =>{
    const popupFormCard = document.querySelector('.popup_type_add')
    popupFormCard.classList.add('popup_opened')
  };
  const  handleEditAvatarClick = () =>{
    const popupFormAvatar = document.querySelector('.popup_type_ava')
    popupFormAvatar.classList.add('popup_opened')
  };
  return(
    <>

   <Header/>
   <Main 
   onEditAvatar = {handleEditAvatarClick}
   onEditProfile = {handleEditProfileClick}
   onAddPlace = {handleAddPlaceClick}
   />
    <template className="template" />
   <Footer/>
   <div className= 'popup popup_type_edit' >
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form"
            name="popup_form_edit"
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
          name="popup_form_add"
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
          name="popup_form_ava"
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
    <PopupImage/>
  </>
  )

}

export default App;
