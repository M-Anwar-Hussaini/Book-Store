import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="p-4 bg-light">
      <nav className="navbar">
        <ul className="nav align-items-center ">
          <Link className="nav-link navbar-brand fs-2 fw-bold text-primary" to="/">
            Bookstore
          </Link>
          <li className="nav-item">
            <Link className="nav-link text-dark " to="/books">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  text-muted" to="categories">
              Categories
            </Link>
          </li>
        </ul>

        <Link className="nav-link">ICON</Link>
      </nav>
    </header>
  );
}

export default Header;
