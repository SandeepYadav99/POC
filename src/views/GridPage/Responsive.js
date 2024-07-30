import React from 'react'
import styles from "./Styles.module.css"
export  const GridBoxItem = () => {
    return (
      <main className={styles.grid_content}>
        <div className={styles.content1}>Header</div>
        <div className={styles.content2}>Article</div>
        <div className={styles.content3}>Sidebar</div>
        <div className={styles.content4}>Footer</div>
      </main>
    );
  };

export default GridBoxItem