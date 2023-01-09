import banner from "../../assets/marvelBanner.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.banner} src={banner} alt="banner" />
    </header>
  );
};

export default Header;
