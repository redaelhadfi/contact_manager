import React from 'react';
import AddContact from './AddContact';
import Header from './Header';
import ListContact from './ListContact';
import { BrowserRouter as Router ,Routes, Route, Link } from 'react-router-dom';
import { v4 as uuid } from "uuid"; // to generate random id
import { useState,useEffect } from 'react';


function App() {
  const KEY_data = "contacts";
  const [contacts, setContacts] = useState( JSON.parse(localStorage.getItem(KEY_data)) ?? []);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  





  const  removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });  //this function will return all the contacts except the one with the id that we passed in the function
    setContacts(newContactList);
  }




  useEffect(() => {
    localStorage.setItem(KEY_data, JSON.stringify(contacts));
  }, [contacts]);



  return (
   <div className="ui container"  > 
      {/* <Header  />
      <AddContact  addContactHandler={addContactHandler}/>
      <ListContact contacts={contacts} removeContactHandler={removeContactHandler} /> */}
      
      <Router>
      <Header  />
      <Routes>

      <Route exact path="/add" element={<AddContact  addContactHandler={addContactHandler}/>} />
      <Route exact path="/"       element={<ListContact contacts={contacts} removeContactHandler={removeContactHandler} />}
      />


      </Routes>
      </Router>

    </div>

  );
}

export default App;

