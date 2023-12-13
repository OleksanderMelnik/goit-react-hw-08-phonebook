import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations/contactsThunk';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const filterContact = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (filterContact) {
      alert(`${name} is already in contacts`);
      resetInput();
    return;
}

    dispatch(addContactThunk({ name, number }));
    resetInput();
    };

    const handleChange = event => {
      const { name, value } = event.target;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        default:
          return;
      }
    };

    const resetInput = () => {
      setName('');
      setNumber('');
    };


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          title=""
          required
          placeholder="Еnter or paste name"
        />
      </label>
      <label>
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          title=""
          required
          placeholder="+38 (000) 000-00-00"
        />
      </label>
      <button type="submit">
        Add Contact
      </button>
    </form>
  );
};
