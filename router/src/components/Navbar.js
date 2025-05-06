import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';

const Navbar = () => {
  return (
    <nav className="navbar is-link" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item has-text-weight-bold" to="/">🌐 Мій Сайт</Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Головна</Link>
          <Link className="navbar-item" to="/about">Про нас</Link>
          <Link className="navbar-item" to="/contact">Контакти</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
