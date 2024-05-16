import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({data, onDelete}) => {
    return (
        <div className={css.item}>
            <div className={css.infoSide}>
                <div className={css.infoPart}>
                    <IoPerson />
                    <h3>{data.name}</h3>
                </div>
                <div className={css.infoPart}>
                    <FaPhoneAlt />
                    <p>{data.number}</p>
                </div>
            </div>  
            <button type="button" onClick={() =>  onDelete(data.id)}>Delete</button>
        </div>
    )
}

export default Contact;