import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/bookSlice';

function BookList() {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border border-success rounded mt-3">
      <h1 className="fw-bold">Book List</h1>
      {books.map((el) => (
        <Book
          author={el.author}
          category={el.category}
          title={el.title}
          key={el.item_id}
          onDelete={() => dispatch(removeBook(el.item_id))}
        />
      ))}
    </div>
  );
}
export default BookList;
