import React from "react";
import styles from "./NaBar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
      <Button children="Give Feedback" />
    </nav>
  );
}
