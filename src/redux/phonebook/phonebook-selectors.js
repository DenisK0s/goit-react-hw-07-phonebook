import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.phonebook.filter;

const getContacts = state => state.phonebook.contacts;

const getFiltredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const filterRegisterCorretion = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterRegisterCorretion),
    );
  },
);

const selectors = { getFilter, getContacts, getFiltredContacts };

export default selectors;
