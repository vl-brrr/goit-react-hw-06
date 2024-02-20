import { MdAccountCircle } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import css from './Contact.module.css';

export const Contact = ({ contact: { id, name, number }, onDelete }) => (
  <li className={css.contactField}>
    <div>
      <p className={css.fieldInfo}>
        <MdAccountCircle size={20} className={css.icon} />
        {name}
      </p>
      <p className={css.fieldInfo}>
        <MdLocalPhone size={20} className={css.icon} />
        {number}
      </p>
    </div>
    <button className={css.button} onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);
