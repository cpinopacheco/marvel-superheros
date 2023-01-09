import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import Navbar from "../component/navbar/Navbar";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main className={styles.mainLayout}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
