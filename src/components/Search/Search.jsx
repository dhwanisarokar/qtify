import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export default function Search() {
  return (
    <div>
      <form className={styles.wrapper}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search a album of your choice"
        />
        <div>
          <button className={styles.searchBtn}>
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
