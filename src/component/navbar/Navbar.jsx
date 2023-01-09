import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">Personajes</NavLink>
      <NavLink to="/comics">Comics</NavLink>
    </nav>
  );
};

export default Navbar;
