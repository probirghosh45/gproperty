import { Link, NavLink, useNavigate } from "react-router-dom";
import img1 from "../../../assets/gproperty.png";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { FcBusinessman } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  const navData = (
    <>
      <div id="sidebar" className="flex items-center gap-8">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/faq"}>Faq</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>
                <FaCartPlus />
              </NavLink>
            </li>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
  return (
    <div className="bg-basicColor">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm flex-col dropdown-content mt-3 z-[1] p-2 shadow bg-basicColor text-white rounded-box"
            >
              {navData}
            </ul>
          </div>


          <div className="flex items-center gap-3">
            <a className="normal-case lg:text-xl">
              <img className="h-5 lg:h-12" src={img1} alt="" />
            </a>
            <p className="font-bold text-lg  lg:text-4xl text-white">
              GProperty
            </p>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="text-white text-lg px-4">{navData}</ul>
          </div>
          {/* <div className="lg:px-2 text-center hidden lg:block">
            {user ? (
              <p className="truncate text-base font-bold text-white">
                {user?.displayName}
              </p>
            ) : (
              ""
            )}
          </div> */}
          {/* <label
            tabIndex={0}
            className="btn lg:w-12 text-4xl btn-ghost btn-circle avatar"
          > */}
            <div>
              {user ? (
                <>
                  {/* <img src={user?.photoURL} /> */}
                  <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL}/>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                 <a>{user?.displayName}</a>
              </li>
              <li>
                <a>
                  Profile
                </a>
              </li>
              <li>
                <a>My Order</a>
              </li>
              <li>
                <a>Log out</a>
              </li>
            </ul>
          </div>

                </>
              ) : (
               ""
              )}
            </div>
          {/* </label> */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-outline border-none lg:text-xl capitalize lg:ms-2 text-white hover:bg-basicColor"
            >
              Log out
            </button>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn btn-outline border-none lg:text-lg capitalize lg:ms-1 text-white hover:bg-basicColor"
              >
                Log in
              </Link>
              <Link
                to={"/register"}
                className="btn btn-outline border-none lg:text-lg capitalize text-white hover:bg-basicColor"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
