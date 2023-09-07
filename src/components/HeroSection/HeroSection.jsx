import { ReactComponent as HeroImg } from "../../assets/headphone.svg";
import styles from "./HeroSection.module.css";
export default function HeroSection() {
  return (
    <div className={styles.herosection}>
      <div className={styles.wrapper}>
        <h1 className={styles.heroText}>
          100 Thousand Songs, ad-free Over thousands podcast episodes
        </h1>
        <HeroImg className={styles.heroImg} />
      </div>
    </div>
  );
}
