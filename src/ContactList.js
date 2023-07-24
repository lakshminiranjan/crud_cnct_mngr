// ContactList.js

import React from 'react';

const ContactList = ({ contacts, deleteContact, editContact, editingContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
            <button onClick={() => editContact(contact.id)}>Edit</button>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
