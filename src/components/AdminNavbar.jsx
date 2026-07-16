import { FaHome, FaServicestack, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const AdminNavbar = () => {
  return (
    <>
      <div>
        <NavLink to={"/admin/users"} className={"flex items-center  "}>
          <FaUser />
          Users
        </NavLink>
        <NavLink to={"/admin/services"} className={"flex items-center  "}>
          <FaServicestack />
          Services
        </NavLink>
        <Link to={"/"} className={"flex items-center  "}>
          <FaHome />
          Home
        </Link>
      </div>
    </>
  );
};

export default AdminNavbar;
