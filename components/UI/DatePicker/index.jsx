import React, { useEffect } from 'react';
import { genDaysFrom } from '/helpers/date';
import { weekEN, monthsEN } from '/constants/dates';
import { useDatePicker } from '/hooks/useDatePicker';
import { ArrowLeft, ArrowRight } from '../arrows';
// Styles
import styles from './datepicker.module.css';

export default function DatePicker({ type, onChange }) {
  const {
    currentDay,
    currentMonth,
    currentYear,
    selectDay,
    date,
    incMonth,
    decMonth,
    days,
    prevMonthDays,
    afterMonthDays,
    preMonthDays,
  } = useDatePicker();
  const dateFormat = `${weekEN[date.getDay()]}, ${monthsEN[currentMonth].substring(
    0,
    3
  )} ${currentDay}, ${currentYear}`;

  //When date is selected
  useEffect(() => {
    onChange(date)
  }, [date]);

  return (
    <div className={styles.datepicker}>
      <div className={styles.bar}>
        <ArrowLeft className={styles.button} onClick={decMonth} />
        <div className={styles.currentDate}>
          <p className={styles.currentMonth}>{monthsEN[currentMonth]}</p>
          <p className={styles.date}>{dateFormat}</p>
        </div>
        <ArrowRight className={styles.button} onClick={incMonth} />
      </div>
      <div className={styles.weekdays}>
        {weekEN.map((week) => (
          <div key={week}>{week.substring(0, 3)}</div>
        ))}
      </div>
      <div className={styles.days}>
        {prevMonthDays > 0 &&
          genDaysFrom(preMonthDays)
            .splice(prevMonthDays * -1)
            .map((prev) => (
              <div key={prev} className={styles.prevDate}>
                {type == 2 && prev}
              </div>
            ))}
        {genDaysFrom(days).map((day) => (
          <div
            key={day}
            className={`${currentDay == day ? styles.selected : styles.day}`}
            onClick={() => {
              selectDay(day);
            }}
          >
            {day}
          </div>
        ))}
        {genDaysFrom(afterMonthDays).map((next) => (
          <div key={next} className={styles.nextDate}>
            {type === 2 && next}
          </div>
        ))}
      </div>
    </div>
  );
}

DatePicker.defaultProps = {
  type: 1,
  onChange: ()=>{}
};
