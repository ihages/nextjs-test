import Image from "next/image";
import styles from "../../page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Testing out next.js</h1>
        <p>On tv we would need to integrate in next.js in order to run payload</p>
      </main>
    </div>
  );
}
