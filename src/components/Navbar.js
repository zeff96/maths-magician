import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navlinks = () => (
  <div className="nav-container">
    <h1 className="nav-title">Maths Magician</h1>
    <nav className="nav">
      <li className="nav-item one">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-item two">
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/quotes">Quote</NavLink>
      </li>
    </nav>
  </div>
);

export default Navlinks;
