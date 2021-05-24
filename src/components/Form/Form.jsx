//модули
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';

//компоненты
import Input from '../Input';

//стили
import styles from './Form.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

  inputHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = event => {
    const { onSubmit, currentContactsList } = this.props;
    event.preventDefault();

    const isContactAlreadyExist = currentContactsList.find(
      ({ name }) => name === this.state.name,
    );

    if (!!isContactAlreadyExist) {
      alert(`${isContactAlreadyExist.name} is already in contacts`);
      return;
    }

    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.Form} onSubmit={this.formSubmit}>
        <Input
          inputLabel="Name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onInputChange={this.inputHandler}
        />
        <Input
          inputLabel="Number"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onInputChange={this.inputHandler}
        />
        <button type="submit" className={styles.FormButton}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentContactsList: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(phonebookOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
