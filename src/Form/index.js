import "./style.css";

const Form = () => (
    <form autocomplete="off" className="form">
        <input className="form__input" name="task" placeholder="Co jest do zrobienia?" autofocus/>
        <button className="form__button">Dodaj zadanie</button>
    </form>
)

export default Form;