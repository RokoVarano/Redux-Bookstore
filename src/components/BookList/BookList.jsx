import books from '../../Backend/mockObjects';
import Book from '../Book/Book';
import BookForm from '../BookForm/BookForm';

const BookList = () => {
  const mockbooks = books.map((book) => (
    <Book
      category={book.category}
      title={book.title}
      author={book.author}
      key={book.title}
    />
  ));

  return (
    <div className="books-page">
      <button type="button" className="add-book-btn">Add Book</button>
      <button type="button" className="remove-book-btn">Remove Book</button>
      {mockbooks}
      <BookForm />
    </div>
  );
};

export default BookList;
