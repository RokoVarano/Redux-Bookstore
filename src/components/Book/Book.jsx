/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookFromAPI } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, category, id } = props;
  const percent = 60;

  return (
    <div className="book-widget general" id={id}>
      <div className="info-col general">
        <ul>
          <li><h6 className="book-category">{category}</h6></li>
          <li><h3 className="book-title">{title}</h3></li>
        </ul>
        <ul className="handle">
          <li><h6 type="button">Comments</h6></li>
          <li><h6 type="button" className="book-remove" onClick={() => dispatch(removeBookFromAPI(id))}>Remove</h6></li>
          <li><h6 type="button">Edit</h6></li>
        </ul>
      </div>
      <div className="percent-col general">
        <div className="circle-container">
          <CircularProgressbar value={percent} />
        </div>
        <ul className="percent-info general">
          <li><h3 className="book-percent">{`${percent}%`}</h3></li>
          <li><h6>Completed</h6></li>
        </ul>
      </div>
      <ul className="chapter-col general">
        <li><h6 className="book-current-chapter">CURRENT CHAPTER</h6></li>
        <li><h4 className="book-chapter">Chapter 0</h4></li>
        <li><button type="button">UPDATE PROGRESS</button></li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
