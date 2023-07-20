import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../api/utilities';

function Book({
  id, category, title, author,
}) {
  const dispatch = useDispatch();
  return (
    <div className="book p-4 rounded border my-3 shadow font-monospace">
      <div className="row align-items-center justify-content-center ">
        <div className="col">
          <div className="row align-items-center">
            <div className="col">
              <span className="text-muted fw-bold">{category}</span>
              <h3 className=" fw-bold fs-2 mb-0">{title}</h3>
              <p className="opacity-50 text-primary">{author}</p>
              <div className="list-group list-group-horizontal">
                <button
                  type="button"
                  className="list-group-item btn btn-sm btn-outline-primary"
                >
                  Comment
                </button>
                <button
                  type="button"
                  className="list-group-item btn btn-sm btn-danger"
                  onClick={() => dispatch(removeBook(id))}
                >
                  Remove
                </button>
                <button
                  type="button"
                  className="list-group-item btn btn-sm btn-outline-warning"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="col-auto ms-auto border-end border-gray pe-5">
              <div>Progress</div>
              <div>
                <h3 className="mb-0 h2 fw-bold">64%</h3>
                <p className="text-muted mt-0">Completed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-auto ps-5 ">
          <p className="text-muted m-0">CURRENT CHAPTER</p>
          <p className="fw-bold">Chapter 17</p>
          <button type="button" className="btn btn-outline-primary w-100">
            Update progress
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
