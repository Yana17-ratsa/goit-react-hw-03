import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css"; 
import { useState, useEffect } from "react";

const contactsArray = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

function App() {

//TODO: Значення з інпута SearchBox
const [value, setValue] = useState("");


//TODO:  Зчитуємо значення за ключем
const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("savedUsers");

    if (savedContacts !== null) {return savedContacts}
    return JSON.parse(contactsArray)
});

//TODO: Додаємо код запису в локальне сховище
useEffect(() => {
    window.localStorage.setItem("savedUsers", JSON.stringify(contacts))
}, [contacts]);


const addContact = (newContact) => {
    setContacts((prevContacts) => {
        return [...prevContacts, newContact];
    });
};

const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
        return prevContacts.filter((contact) => contact.id !== contactId);
    })
}


//TODO: Передаємо в ContactList
// const visibleContacts = contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
// );
const visibleContacts = (contacts) => {contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) )}



    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact}/>
            <SearchBox value={value} onFilter={setValue}/>   
            <ContactList  contacts={visibleContacts} setContacts={setContacts} onDelete = {deleteContact}/>
        </div>

    )
}

export default App
