// модули
import React, { Component } from 'react';
import { connect } from 'react-redux';

//компоненты
import Container from './components/Container';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

//операции
import * as operations from '../src/redux/phonebook/phonebook-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <h2 className="Title">Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className="Title">Contacts</h2>
        <Filter />
        <Contacts />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContact()),
});

export default connect(null, mapDispatchToProps)(App);
