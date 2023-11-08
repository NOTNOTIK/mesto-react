import edit from '../images/VectorAvatar.png';
import add from '../images/add.svg'



export default function Main(props){

  
  
    return(
        <main className="main">
      <section className="profile">
        <div className="profile__card">
          <button 
          className="avatar"
          onClick={() => props.onEditAvatar()}
          >
            <img
              src="#"
              alt=''
              className="profile__avatar"
              
            />
          </button>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button
                type="button"
                className="profile__button profile__button_type_edit"
                onClick={() => props.onEditProfile()}
              >
                <img
                  src={edit}
                  className="image image_type_edit"
                  alt="edit"
                />
              </button>
            </div>
            <p className="profile__text" >Исследователь океана</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__button profile__button_type_add"
          onClick={() => props.onAddPlace()}
        >
          <img
            src={add}
            className="image image_type_add"
            alt="Добавить"
          />
        </button>
      </section>
      <section className="cards"></section>
    </main>
    )
}
