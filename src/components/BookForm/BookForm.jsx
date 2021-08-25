import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <div className="book-form">
      <input type="text" id="book-input-title" placeholder="" />
      <input type="text" id="book-input-author" placeholder="" />
      <button type="button" onClick={() => submitBookToStore(document.getElementById('book-input-title').value, document.getElementById('book-input-author').value)}>Add Book</button>
    </div>
  );
};

export default BookForm;
