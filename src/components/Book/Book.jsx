import PropTypes from 'prop-types';

const Book = (props) => {
  const { category, title, author } = props;

  return (
    <div className="book-widget general">
      <ul>
        <li><p className="book-category">{category}</p></li>
        <li><h2 className="book-title">{title}</h2></li>
        <li><p className="book-author">{author}</p></li>
      </ul>
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
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
