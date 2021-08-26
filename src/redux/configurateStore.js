import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import books from './books/books';
import createApp from './createapp/createapp';

const reducer = combineReducers({
  createApp,
  books,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
