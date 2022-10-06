import React, { useEffect, useState } from 'react';
// Styles
import styles from './datepicker.module.css';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { getDays, genDaysFrom } from '/helpers/date';
import { week, months } from '/constants/dates';
import { useDatePicker } from '/hooks/useDatePicker';

function DatePicker() {
  const { currentDay, currentMonth, currentYear, selectDay, date, incMonth, decMonth, days, prevMonthDays } =
    useDatePicker();
  const dateFormat = `${week[date.getDay()]}, ${months[currentMonth].substring(0, 3)} ${currentDay}, ${currentYear}`;

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className={styles.datepicker}>
      <div className={styles.bar}>
        <BiChevronLeft className={styles.button} size='3rem' color='white' onClick={decMonth} />
        <div className={styles.currentDate}>
          <p className={styles.currentMonth}>{months[currentMonth]}</p>
          <p className={styles.date}>{dateFormat}</p>
        </div>
        <BiChevronRight className={styles.button} size='3rem' color='white' onClick={incMonth} />
      </div>
      <div className={styles.weekdays}>
        {week.map((week) => (
          <div key={week}>{week.substring(0, 3)}</div>
        ))}
      </div>
      <div className={styles.days}>
        {genDaysFrom(prevMonthDays).map((prev) => (
          <div key={prev} className={styles.prevDate}></div>
        ))}
        {genDaysFrom(days).map((day) => (
          <div
            key={day}
            className={`${currentDay == day ? styles.selected : ''}`}
            onClick={() => {
              selectDay(day);
            }}
          >
            {day}
          </div>
        ))}

        {/* <div className={styles.nextDate}>1</div>
        <div className={styles.nextDate}>2</div>
        <div className={styles.nextDate}>3</div>
        <div className={styles.nextDate}>4</div>
        <div className={styles.nextDate}>5</div>
        <div className={styles.nextDate}>6</div> */}
      </div>
    </div>
  );
}

export default DatePicker;
