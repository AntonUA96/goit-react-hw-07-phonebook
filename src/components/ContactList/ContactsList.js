import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import {
  contactsOperation,
  contactsSelectors,
} from '../../redux/contacts/index';

const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li>
      {name}: {phone} <button onClick={() => onRemove(id)}>delete</button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={uuidv4()} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  onRemove: PropTypes.func,
};

// const mapStateToProps = state => {
//   const { filter, items } = state.contacts;
//   const visibleContacts = items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase()),
//   );
//   return {
//     contacts: visibleContacts,
//   };
// };

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(contactsOperation.removeContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
