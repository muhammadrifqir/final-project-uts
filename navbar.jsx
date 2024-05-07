import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Covid Id</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Global</li>
            <li className={styles.navbar__item}>Indonesia</li>
            <li className={styles.navbar__item}>Propinsi</li>
            <li className={styles.navbar__item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
