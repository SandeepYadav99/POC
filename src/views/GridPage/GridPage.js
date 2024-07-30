import React from "react";
import styles from "./Styles.module.css"
const GridPage = () => {
  return (
    <main className={styles.main_content}>
      <header className={styles.header}>Header</header>
      <article className={styles.article}>Article</article>
      <aside className={styles.sidebar}>Sidebar</aside>
      <footer className={styles.footer}>Footer</footer>
    </main>
  );
};

export default GridPage;
