// ContactForm.js

import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, updateContact, editingContact, setEditingContact }) => {
  const initialFormState = { id: null, name: '', email: '' };
  const [contact, setContact] = useState(initialFormState);

  useEffect(() => {
    if (editingContact) {
      const editedContact = contacts.find((contact) => contact.id === editingContact);
      if (editedContact) {
        setContact(editedContact);
      }
    }
  }, [editingContact]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!contact.name || !contact.email) return;
    if (editingContact) {
      updateContact(contact.id, contact);
    } else {
      addContact({ ...contact, id: new Date().getTime() });
    }
    setContact(initialFormState);
    setEditingContact(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingContact ? 'Edit Contact' : 'Add Contact'}</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contact.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">{editingContact ? 'Update Contact' : 'Add Contact'}</button>
      {editingContact && <button onClick={() => setEditingContact(null)}>Cancel</button>}
    </form>
  );
};

export default ContactForm;
