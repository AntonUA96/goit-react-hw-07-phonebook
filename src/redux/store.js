// import { createStore, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import Filter from '../components/Filter';
// const persistConfig = {
//   key: 'contacts',
//   storage,
// }
// const rootReducer = combineReducers({
//   contacts:contactsReducer,
// })
// const store = createStore(rootReducer, composeWithDevTools())
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// })
// const persistedReducer = persistReducer(persistConfig,rootReducer )
// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// })

const myMiddleware = store => next => action => {
  console.log('моя прослойка');
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
  logger,
];
// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// const persistore = persistStore(store);
export default store;
