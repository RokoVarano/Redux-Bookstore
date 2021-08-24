const BookForm = () => (
  <div className="book-form">
    <input type="text" className="book-input-name" />
    <select name="book-categories" className="book-categories">
      <option value="thriller">Thriller</option>
    </select>
    <button type="button">Add Book</button>
  </div>
);

export default BookForm;
