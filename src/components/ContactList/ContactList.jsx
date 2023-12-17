import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations/contactsThunk';
import { getFilteredContacts, selectContacts } from 'redux/contacts/selectors';
import { H3, ContactsList, ContactItem, ContactName, ContactNumber, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const users = useSelector(selectContacts);

  return (
    <>
      <H3>
        Your phonebook has {users.length} contacts
      </H3>
      <ContactsList>
        {contacts.map(item => (
          <ContactItem key={item.id}>
            <ContactName>{item.name}</ContactName>
            <ContactNumber>{item.number}</ContactNumber>
            <Button
              type="button"
              onClick={() => dispatch(deleteContactThunk(item.id))}
            >
              Delete
            </Button>
          </ContactItem>
        ))}
      </ContactsList>
    </>
  );
};
