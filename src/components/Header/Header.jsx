import { Link } from 'react-router-dom';

const Header = () => (
  <nav data-testid="header" id="header">
    <ul className="general">
      <h1>Bookstore CMS</h1>
      <Link to="/"><li><h5>Books</h5></li></Link>
      <Link to="/categories"><li><h5>Categories</h5></li></Link>
    </ul>
    <i className="fas fa-user user-icon" />
  </nav>
);

export default Header;
