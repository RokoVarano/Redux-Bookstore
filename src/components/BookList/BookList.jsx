import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import BookForm from '../BookForm/BookForm';

const BookList = () => {
  const books = useSelector((state) => state.books);

  const updateBooks = (books) => books.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      key={book.id}
      id={book.id}
    />
  ));

  return (
    <div id="books-page">
      {updateBooks(books)}
      <BookForm />
    </div>
  );
};

export default BookList;
