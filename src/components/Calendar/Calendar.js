import React from "react";
import moment from 'moment';
import MyTasksDay from "../Calendar/MyTasksDay";

const Calendar = () => {
    const weekdayshort = moment.weekdays()
    const firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
                     .startOf("month")
                     .format("d"); 
       return firstDay;
    };
    
    return (
      <div>
        <h2>Calendar</h2>
        
        {weekdayshort.map((day) =>
        (
        <div className="week-day-container">
        <div className="week-day">{day}</div>
        <MyTasksDay />
        </div>
        ))}
        </div>
    );
}

export default Calendar