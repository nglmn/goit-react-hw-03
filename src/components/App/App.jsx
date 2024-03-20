import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import initUsers from '../../db.json';

import './App.css';

const App = () => {
  const [users, setUsers] = useState(() => {
    const dataFromLS = localStorage.getItem('users');
    if (!dataFromLS) return initUsers;

    return JSON.parse(localStorage.getItem("users"));
  });
  const [filterUsers, setFilterUsers] = useState('');


  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    })
  }

  const visibleUsers =
    users.filter(user => {
      return user.name.toLowerCase().includes(filterUsers.toLowerCase());
    })

  const onDeleteUser = (id) => {
    setUsers((allUsers) => {
      return allUsers.filter(user => {
        return user.id !== id;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <div className="app-interface">
        <div className="form-panel">
          <ContactForm onAdd={addUser} />
          <SearchBox filter={filterUsers} setFilterUsers={setFilterUsers} />
        </div>
        <ContactList users={visibleUsers} onDeleteUser={onDeleteUser} />
      </div>
    </div>
  )
}

export default App;