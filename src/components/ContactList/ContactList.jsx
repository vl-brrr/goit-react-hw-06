import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.contactList}>
    {contacts.map(contact => (
      <Contact contact={contact} key={contact.id} onDelete={onDelete} />
    ))}
  </ul>
);
