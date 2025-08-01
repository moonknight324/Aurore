import { useState } from "react";
import styles from "../Styles/MainNav.module.css";
import { Link } from "react-router-dom";

function MainNav() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  const logout = () => {
    window.open("http://localhost:5000/logout", "_self");
    setDropdownOpen(false);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>AURORE</div>
        <div className={styles.search}>
          <ul className={styles.menu}>
            
          <li><Link to={"/create-post"}> <a> Create Post</a></Link></li>
            {/* <li>Posts</li> */}
            <li>
              {" "}
              <div className="">
                <div
                  className={styles.dropdownBox}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Profile
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>
      {dropdownOpen && (
        <div className={styles.dropdown}>
          <ul>
            <Link className={styles.link} to="/profile">
              <li onClick={() => setDropdownOpen(false)} className={styles.profileList}>
                Profile
              </li>
            </Link>
            <Link className={styles.link} to="/contactus">
              <li onClick={() => setDropdownOpen(false)} className={styles.profileList}>
                Contact
              </li>
            </Link>
            <Link className={styles.link} to="">
              <li onClick={logout} className={styles.profileList}>
                Logout
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default MainNav;
