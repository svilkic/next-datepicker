import React from 'react';
import DatePicker from '/components/UI/DatePicker';
// Styles
import styles from './reserve.module.css';

export function Reserve() {
  return (
    <div className={styles.section}>
      <DatePicker />
    </div>
  );
}
