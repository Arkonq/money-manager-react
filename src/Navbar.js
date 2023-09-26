import { Link } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Category from './Category';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__body">
        <Link to='/' className="header__logo">Money-Manager</Link>
        <div className="header__menu">
          <Link to='/'>Home</Link>
          <Link to='/create'>Create</Link>
          <Link to='/category'>Category</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;