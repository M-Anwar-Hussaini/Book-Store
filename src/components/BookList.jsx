import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { getAllBooks } from '../api/utilities';

function BookList() {
  const {
    books, isLoading, length, hasError, errorMessage,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [length]);

  if (isLoading) {
    return <div className="alert alert-primary">Loading</div>;
  }

  if (hasError) {
    return (
      <div className="alert alert-danger">
        Something went wrong:
        {errorMessage}
      </div>
    );
  }

  return (
    <div className="p-4 border border-success rounded mt-3">
      <h1 className="fw-bold">Book List</h1>
      {length === 0
        ? <div className="alert alert-danger">The Bookstore is empty. Add book(s) to be listed here.</div>
        : books.map((book) => (
          <Book
            author={book.author}
            category={book.category}
            title={book.title}
            key={book.item_id}
            id={book.item_id}
          />
        ))}

    </div>
  );
}
export default BookList;
