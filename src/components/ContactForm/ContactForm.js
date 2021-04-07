import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { contactsOperation } from '../../redux/contacts/index';

const INITIAL_STATE = {
  phone: '',
  name: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  componentDidMount() {
    this.props.fetchContacts();
  }

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, phone } = this.state;
    const { onAdd } = this.props;

    // const isValidateForm = this.validateForm();
    // if (!isValidateForm) return;
    onAdd({ id: uuidv4(), name, phone });
    this.setState(INITIAL_STATE);
  };

  // validateForm = () => {
  //   const { name, phone } = this.state;
  //   const { onChekUnique } = this.props;

  //   if (!name || !phone) {
  //     alert('Some file is empty');
  //     return false;
  //   }
  //   return onChekUnique(name);
  // };

  // resetForm = () => {
  //   this.setState(INITIAL_STATE);
  // };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handleChangeForm}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAdd: text => dispatch(contactsOperation.addContacts(text)),
  fetchContacts: () => dispatch(contactsOperation.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactForm);
