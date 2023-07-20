import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../api/utilities';

function AddBookForm() {
  const [category, setCategory] = useState('category');
  const [booknName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category === 'category' || !booknName) return;
    const newBook = {
      item_id: new Date().getTime(),
      title: booknName,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setCategory('category');
    setBookName('');
    setAuthor('');
  };

  return (
    <div className="my-4 p-4 container border border-success rounded">
      <h2 className="fw-bold">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              name="bookinput"
              className="form-control"
              placeholder="Book title"
              value={booknName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              name="author"
              className="form-control"
              placeholder="Book Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="col-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="category">Category</option>
              <option value="Fiction">Fiction</option>
              <option value="NonFiction">NonFiction</option>
              <option value="Action">Action</option>
            </select>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary w-100">
              Add Book
            </button>
          </div>
        </div>
      </form>
      {category === 'category' ? (
        <div className="alert alert-sm alert-danger mt-2">
          Please Select a category
        </div>
      ) : null}
    </div>
  );
}

export default AddBookForm;
