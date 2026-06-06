import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-red-300 px-5 py-5 text-2xl">
      <h2>This is Navbar</h2>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/moto">Moto</Link>
      </div>
    </div>
  );
};

export default Navbar;