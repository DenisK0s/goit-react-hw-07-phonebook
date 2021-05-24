//модули
import PropTypes from 'prop-types';

//стили
import styles from './Contacts.module.css';

const Contacts = ({ contactsItems, onDeleteContact }) => {
  return (
    <div className={styles.Contacts}>
      <ul className={styles.ContactsList}>
        {contactsItems.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.ContactsListItem}>
              <span className={styles.ContactValue}>
                {name}: {number}
              </span>
              <button type="button" onClick={() => onDeleteContact(id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contactsItems: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default Contacts;
