// import useDispatch hook
import { useDispatch } from 'react-redux';
// import your Action Creators
import { addBook } from '../../redux/books/books';

const dispatch = useDispatch();

const BookForm = () => {
  const submitBookToStore = () => {
    const newBook = {
      id, // make sure it's unique
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };


  return (
    <div className="book-form">
      <input type="text" className="book-input-name" />
      <select name="book-categories" className="book-categories">
        <option value="thriller">Thriller</option>
      </select>
      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </div>
  );
};

export default BookForm;
