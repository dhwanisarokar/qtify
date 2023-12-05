import { ReactComponent as HeroImg } from "../../assets/headphone.svg";
import styles from "./HeroSection.module.css";
export default function HeroSection() {
  return (
    <div className={styles.herosection}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <HeroImg className={styles.heroImg} />
    </div>
  );
}
