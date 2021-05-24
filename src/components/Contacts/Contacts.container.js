//модули
import { connect } from 'react-redux';

//операции
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';

//компоненты
import Contacts from './Contacts.jsx';

const mapStateToProps = state => {
  const filter = phonebookSelectors.getFilter(state);
  const contacts = phonebookSelectors.getContacts(state);
  const currentContactsList =
    filter !== '' ? phonebookSelectors.getFiltredContacts(state) : contacts;

  return {
    contactsItems: currentContactsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
