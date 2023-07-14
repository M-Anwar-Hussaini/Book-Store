function AddBookForm() {
  return (
    <div className="my-4 p-4 container border border-success rounded">
      <h2 className="fw-bold">Add New Book</h2>
      <form action="">
        <div className="row">
          <div className="col-8">
            <input type="text" name="bookinput" id="bookinput" className="form-control" placeholder="Book title" />
          </div>
          <div className="col-2">
            <select id="category" className="form-select">
              <option selected>Category</option>
            </select>
          </div>
          <div className="col-2">
            <button className="btn btn-primary w-100">Add Book</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;
