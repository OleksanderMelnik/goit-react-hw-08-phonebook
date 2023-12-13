import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations/contactsThunk';
import { getFilteredContacts, selectContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const users = useSelector(selectContacts);

  return (
    <>
      <h3>
        Your phonebook has {users.length} contacts
      </h3>
      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            <b>{item.name}</b>
            <b>{item.number}</b>
            <button
              type="button"
              onClick={() => dispatch(deleteContactThunk(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
