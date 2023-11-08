import "./Navbar.css";

const Navbar: React.FC = function () {
  return (
    <div className="navbar">
      <div className="search">
        <input className="navbarinput" placeholder="Search"></input>
      </div>
    </div>
  );
};

export default Navbar;
