import React, { useEffect, useState } from 'react';
import { getDaysInMonth } from '/helpers/date';

const currentDate = new Date();

export function useDatePicker() {
  const [currentDay, setCurrentDay] = useState(currentDate.getDate());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [prevMonthDays, setPrevMonthDays] = useState(5);
  const [days, setDays] = useState(31);
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    const prevMonthDays = new Date(`${currentMonth + 1}-01-${currentYear}`).getDay();
    setPrevMonthDays(prevMonthDays);
    const numberOfDays = getDaysInMonth(currentYear, currentMonth + 1);
    setDays(numberOfDays);
  }, [currentMonth, currentYear]);

  useEffect(() => {
    const newDate = new Date(`${currentMonth + 1}-${currentDay}-${currentYear}`);
    if (newDate != date) setDate(newDate);
  }, [currentDay]);

  const selectDay = (day) => {
    setCurrentDay(day);
  };

  const incMonth = () => {
    if (currentMonth + 1 > 11) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const decMonth = () => {
    if (currentMonth - 1 < 0) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(11);
    } else {
      return setCurrentMonth((prev) => prev - 1);
    }
  };

  return {
    currentDay,
    currentMonth,
    currentYear,
    date,
    selectDay,
    incMonth,
    decMonth,
    days,
    prevMonthDays,
  };
}
