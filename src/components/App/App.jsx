import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css"; 
import { useState } from "react";

const contactsArray = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

function App() {

const [value, setValue] = useState("");
const [contacts, setContacts] = useState(contactsArray);

const visibleContacts = contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
);


  




    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox value={value} onFilter={setValue}/>   
            <ContactList  contacts={visibleContacts} setContacts={setContacts}/>
        </div>

    )
}

export default App
