import Contact from "../Contact/Contact";
import './ContactList.css';

const ContactList = ({ users, onDeleteUser }) => {
    return (
        <ul className="user-list">
            {users.map((user) => {
                return <Contact key={user.id} user={user} onDeleteUser={onDeleteUser} />
            })}
        </ul>
    )
}

export default ContactList;