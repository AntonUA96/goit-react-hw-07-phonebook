import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactsList';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { contactsSelectors } from './redux/contacts/index';

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // handleAddContacts = newContact =>
  //   this.setState(({ contacts }) => ({
  //     contacts: [...contacts, newContact],
  //   }));

  // handleCheckUniqueContact = name => {
  //   const { contacts } = this.state;

  //   const checkContacts = !!contacts.find(contact => contact.name === name);

  //   checkContacts && alert('This contact is already exist');

  //   return !checkContacts;
  // };

  // handleRemoveContact = id => {
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  // handleFilterChange = filter => {
  //   this.setState({ filter });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parseContacts = JSON.parse(contacts);
  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    // const { filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div className={styles.container}>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
        {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

export default connect(mapStateToProps, null)(App);
