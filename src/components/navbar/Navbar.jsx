import { Link, NavLink } from "react-router-dom";
import { btnStyle, navlinks } from "../../data/data";
import Button from "../../common/Button";
import { UseAuth } from "../../store/UseAuth";
const Navbar = () => {
  const { token, logOutUser, currentUser } = UseAuth();
  console.log("🚀 ~ Navbar ~ currentUser:", currentUser);
  return (
    <>
      <nav className="  flex items-center justify-between  ">
        <div className="logo">
          <Link to="/" className="  font-bold font-HK text-[32px] ">
            Prime
            <span className="text-brand">Kit</span>
          </Link>
        </div>
        <div className="  flex  items-center justify-between  gap-15   ">
          {navlinks.map((item, i) => {
            return (
              <NavLink
                to={item.path}
                key={i}
                className={({ isActive }) =>
                  `${isActive ? "text-brand" : " text-secondary "} 'font-medium text-[18px] font-HK hover:text-brand transition-all duration-300 ease-in-out    '`
                }
              >
                {item.title}
              </NavLink>
            );
          })}
          {currentUser && currentUser.isAdmin && (
            <Link to={"/admin"}>Admin</Link>
          )}
          {token ? (
            <>
              <button onClick={logOutUser}>Log Out</button>
            </>
          ) : (
            <>
              <NavLink to={"/login"}>Log In</NavLink>
              <NavLink to={"/register"}>Register</NavLink>
            </>
          )}
        </div>
        {/* <div>
          <Button btnText="Contact Us" buttonStyle={btnStyle} />
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
