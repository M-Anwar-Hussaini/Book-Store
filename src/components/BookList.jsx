import Book from './Book';

function BookList() {
  const bookList = [
    { genre: 'Action', title: 'War and Peace', author: 'Tolstoy' },
    { genre: 'Dram', title: 'Lonliness', author: 'Karim Farhang' },
    { genre: 'Educational', title: ' Human Relationship', author: 'Ali Baba Hussaini' },
  ];
  return (
    <div className="p-4 border border-success rounded mt-3">
      <h1 className="fw-bold">Book List</h1>
      {bookList.map((el) => (
        <Book author={el.author} genre={el.genre} title={el.title} key={el.title} />
      ))}
    </div>
  );
}
export default BookList;
