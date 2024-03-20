import { FaUserCircle } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import './Contact.css';

const Contact = ({ user: { name, number, id }, onDeleteUser }) => {
    return (
        <li className="user-item">
            <div className="user-info">
                <p className="userName"><FaUserCircle className="icon" />{name}</p>
                <p className="userNumber"><HiPhone className="icon" />{number}</p>
            </div>
            <button type="button" className="delete-btn" onClick={() => onDeleteUser(id)}>Delete</button>
        </li>
    )
}

export default Contact