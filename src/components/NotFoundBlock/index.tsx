import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing Was Found...
      </h1>
      <p className={styles.description}>This page does not exist in this web store.</p>
    </div>
  );
};

export default NotFoundBlock;
