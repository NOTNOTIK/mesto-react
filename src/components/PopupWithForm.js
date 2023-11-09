
export default function PopupWithForm(props){
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}  >
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <form
            className="popup__form"
            name={`popup_form_${props.name}`}
            method="get"
            noValidate=""
          >
           {props.children}
              <button type="submit" className="popup__submit" id={props.name}>
                {props.buttonText}
              </button>
            
          </form>
          <button type="button" className="popup__close"  onClick={props.onClose} id={props.name} />
        </div>
      </div>
    )
}