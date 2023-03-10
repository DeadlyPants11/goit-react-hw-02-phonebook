import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = newContact => {
    const chekContact = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (chekContact) {
      return alert(chekContact.name + ' is already in contact');
    }
    this.setState(prewState => ({
      contacts: [...prewState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  ChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const toLowerCase = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCase)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.addNewContact} />
          <Filter filter={filter} onChange={this.ChangeFilter} />
          <ContactList
            contacts={filterContacts}
            onDelete={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
