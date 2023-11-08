export default function PopupImage(){
    return(
        <div className="popup popup_type_image">
      <div className="popup__img-container">
        <img className="popup__image" src="#" alt="Изображение не загружено" />
        <p className="popup__figcaption" />
        <button type="button" className="popup__close" id="closeImg" />
      </div>
    </div>
    )
}