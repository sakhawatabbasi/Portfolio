import { Outlet, Link } from "react-router-dom";
import '../App.css'
import Logo from '../img/Logo.png'
const Navbar = () => {
  
  return (
    <>
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg navbar-light py-3 py-lg-0 px-lg-5 bg-white
 ">
        <a href="##" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5"><img className="logo" src={Logo} alt=""/></h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
          <li>
            <Link to="/" className="nav-item nav-link active">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item nav-link">About</Link>
          </li>
          <li>
            <Link to="/skill" className="nav-item nav-link">Skill</Link>
          </li>
          <li>
            <Link to="/quality" className="nav-item nav-link">Quality</Link>
          </li>
          <li>
            <Link to="/service"className="nav-item nav-link">Service</Link>
          </li>
          <li>
            <Link to="/portfolio"className="nav-item nav-link">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact"className="nav-item nav-link">Contact</Link>
          </li>
            </div>
        </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Navbar;