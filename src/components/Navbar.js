import logo from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar--logo" />
    </nav>
  );
}

export default Navbar;
