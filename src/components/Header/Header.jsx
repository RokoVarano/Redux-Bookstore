import { Link } from 'react-router-dom';

const Header = () => (
  <nav data-testid="header">
    <ul>
      <Link to="/"><li>Books</li></Link>
      <Link to="/categories"><li>Categories</li></Link>
    </ul>
  </nav>
);

export default Header;
