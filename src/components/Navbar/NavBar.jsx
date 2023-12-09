import React from "react";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/SearchBar";

export default function NavBar({ songs }) {
  return (
    <nav className={styles.navbar}>
      {/* for destop view */}
      <div className={styles.column1}>
        <Logo />
        <div className={styles.SearchBar}>
          <SearchBar songs={songs} />
        </div>
        <Button children="Give Feedback" />
      </div>

      {/* for mobile view */}
      <div className={styles.column2}>
        <SearchBar />
      </div>
    </nav>
  );
}
