import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function MonthView() {
    return (
        <div className="base">
            <div className="calendar">
                <div id="day">Sunday</div>
                <div id="day">Monday</div>
                <div id="day">Tuesday</div>
                <div id="day">Wednesday</div>
                <div id="day">Thursday</div>
                <div id="day">Friday</div>
                <div id="day">Saturday</div>

                <div className="datebg"><span className="num">1</span></div>
                <div className="datebg" id='dilaw'>
                    <span className="num">2</span>
                    <p className="neee">Nueva Ecija Day</p>
                </div>
                <div className="datebg"><span className="num">3</span></div>
                <div className="datebg"><span className="num">4</span></div>
                <div className="datebg"><span className="num">5</span></div>
                <div className="datebg"><span className="num">6</span></div>
                <div className="datebg"><span className="num">7</span></div>
                <div className="datebg"><span className="num">8</span></div>
                <div className="datebg"><span className="num">9</span></div>
                <div className="datebg"><span className="num">10</span></div>
                <div className="datebg"><span className="num">11</span></div>
                <div className="datebg"><span className="num">12</span></div>
                <div className="datebg"><span className="num">13</span></div>
                <div className="datebg"><span className="num">14</span></div>

                <Link to="/description/induction-officers" className="datebg" id='off'>
                    <span className="num">15</span>
                    <span className="off">Induction of Officers</span>
                </Link>

                <div className="datebg"><span className="num">16</span></div>
                <div className="datebg"><span className="num">17</span></div>
                <div className="datebg"><span className="num">18</span></div>
                <div className="datebg"><span className="num">19</span></div>

                <Link to="/description/officers-meeting" className="datebg" id='off'>
                    <span className="num">20</span>
                    <span className="off">Officers Meeting</span>
                </Link>

                <div className="datebg"><span className="num">21</span></div>
                <div className="datebg"><span className="num">22</span></div>
                <div className="datebg"><span className="num">23</span></div>
                <div className="datebg"><span className="num">24</span></div>
                <div className="datebg"><span className="num">25</span></div>
                <div className="datebg"><span className="num">26</span></div>

                <Link to="/description/leadership-seminar" className="datebg" id='off'>
                    <span className="num">27</span>
                    <span className="off">Leadership Seminar</span>
                </Link>

                <div className="datebg"><span className="num">28</span></div>
                <div className="datebg"><span className="num">29</span></div>
                <div className="datebg"><span className="num">30</span></div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
            </div>
        </div>
    );
}

export default MonthView;
