import React from 'react';

function WeekView() {
        return(
            <div class="base">
                <h1 className='weektitle'>This Week</h1>
                <h1 className='anongweek'>September 15-21</h1>
            <div class="calendar">
                
                <div id="weekday">Sunday</div>
                <div id="weekday">Monday</div>
                <div id="weekday">Tuesday</div>
                <div id="weekday">Wednesday</div>
                <div id="weekday">Thursday</div>
                <div id="weekday">Friday</div>
                <div id="weekday">Saturday</div>
    
                <div className="weekview"></div>
                <div className="weekview"></div>
                <div className="weekview"></div>
                <div className="weekview"></div>
                <div className="weekview"></div>
                <div className="weekview"></div>
                <div className="weekview"></div>
            </div>
        </div>
        );
}

export default WeekView;