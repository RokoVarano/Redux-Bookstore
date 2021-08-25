import { useRef } from 'react';
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

  const titleRef = useRef();
  const authorRef = useRef();

  return (
    <div className="book-form">
      <input type="text" ref={titleRef} placeholder="" />
      <input type="text" ref={authorRef} placeholder="" />
      <button type="button" onClick={() => submitBookToStore(titleRef.value, authorRef.value)}>Add Book</button>
    </div>
  );
};

export default BookForm;
