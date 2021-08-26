const UPDATE_BOOKS = 'UPDATE_BOOKS';

const www = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = localStorage.getItem('app_id');

export const getBooks = () => async (dispatch) => {
  const url = `${www + appId}/books`;
  console.log('getBooks');

  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const collection = Object.entries(json)
        .reduce((accumulator, object) => accumulator.concat({
          id: object[0],
          title: object[1][0].title,
          category: object[1][0].category,
        }), []);
      dispatch({ type: UPDATE_BOOKS, books: collection });
    });
};

export const addBookToAPI = (book) => async (dispatch) => {
  const url = `${www + appId}/books`;
  console.log('addBookToApi');

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      category: book.category,
    }),
  }).then(() => dispatch(getBooks()));
};

export const removeBookFromAPI = (id) => async (dispatch) => {
  const url = `${www + appId}/books/${id}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  }).then(() => dispatch(getBooks()));
};

const books = (state = [], action) => {
  switch (action.type) {
    case UPDATE_BOOKS:
      console.log(action.books);
      return action.books;
    default:
      return state;
  }
};

export default books;
