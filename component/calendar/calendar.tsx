"use client";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.scss'

function MyCalendar() {
  const [value, setValue] = useState(new Date());

  const handleDateClick = (date: React.SetStateAction<Date>) => {
    setValue(date);
    console.log('Selected date:', date);
  };

  return (
    <div>
      <Calendar
        value={value}
        onClickDay={handleDateClick}
      />
    </div>
  );
}

export default MyCalendar;