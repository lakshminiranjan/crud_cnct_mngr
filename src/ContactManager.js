// ContactManager.js

import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setEditingContact(null);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map((contact) => (contact.id === id ? updatedContact : contact)));
    setEditingContact(null);
  };

  const editContact = (id) => {
    setEditingContact(id);
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
        editingContact={editingContact}
      />
      <ContactForm
        addContact={addContact}
        updateContact={updateContact}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
    </div>
  );
};

export default ContactManager;
