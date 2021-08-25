import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;

  const dispatch = useDispatch();

  const deleteBook = (id) => dispatch(removeBook(id));

  return (
    <div className="book-widget general">
      <div>
        <ul>
          <li><h2 className="book-title">{title}</h2></li>
          <li><p className="book-author">{author}</p></li>
        </ul>
        <ul>
          <li><button type="button" onClick={() => deleteBook(id)}>Delete</button></li>
        </ul>
      </div>
      <ul>
        <li><h2 className="book-percent">0%</h2></li>
        <li><p>Completed</p></li>
      </ul>
      <ul>
        <li><p className="book-current-chapter">chapter</p></li>
        <li><h2 className="book-chapter">Chapter 0</h2></li>
        <li><button type="button">UPDATE PROGRESS</button></li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
