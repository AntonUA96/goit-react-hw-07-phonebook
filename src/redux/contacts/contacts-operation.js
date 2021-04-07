import axios from 'axios';
import {
  addContactError,
  addContactSuccess,
  addContactRequest,
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  fetchContactError,
  fetchContactSuccess,
  fetchContactRequest,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContacts = text => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', text)
    .then(({ data }) => dispatch(addContactSuccess(data)))

    .catch(error => dispatch(addContactError(error)));
};

const removeContacts = contactId => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch(error => dispatch(removeContactError(error)));
};

export default {
  addContacts,
  fetchContacts,
  removeContacts,
};
