import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookToAPI } from '../../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (title, category = 'Generic') => {
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };

    dispatch(addBookToAPI(newBook));
  };

  const titleRef = useRef('');
  const categoryRef = useRef('');

  return (
    <div className="book-form">
      <input type="text" ref={titleRef} placeholder="" />
      <input type="text" ref={categoryRef} placeholder="" />
      <button type="button" onClick={() => submitBookToStore(titleRef.current.value, categoryRef.current.value)}>Add Book</button>
    </div>
  );
};

export default BookForm;
