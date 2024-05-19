import { signOut } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaHome, FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { User } from "../types/types";


interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    try {

      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Failed");
    }
  }

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to={"/"}>Home
        <FaHome />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>Search
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>Cart
        <FaShoppingBag />
      </Link>

      {
        user?._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser />
            </button>
            <dialog open={isOpen}>
              <div>
                {
                  user.role === "admin" && (
                    <Link onClick={() => setIsOpen(false)} to={"/admin/dashboard"}>Admin</Link>
                  )
                }

                <Link onClick={() => setIsOpen(false)} to={"/orders"}>Orders</Link>
                <button onClick={logoutHandler}>
                  <FaSignOutAlt />
                </button>

              </div>

            </dialog>
          </>
        ) : <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      }
    </nav>
  )
}

export default Header