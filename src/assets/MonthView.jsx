import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MonthView() {
    // State for controlling the modal content
    const [modalContent, setModalContent] = useState(null);

    // Function to open the modal with the corresponding content
    const openModal = (content) => {
        setModalContent(content);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalContent(null);
    };

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

                <div className="datebg" id='off' onClick={() => openModal({title: 'Induction of Officers', description: 'A formal ceremony to induct the new officers.'})}>
                    <span className="num">15</span>
                    <span className="off">Induction of Officers</span>
                </div>

                <div className="datebg"><span className="num">16</span></div>
                <div className="datebg"><span className="num">17</span></div>
                <div className="datebg"><span className="num">18</span></div>
                <div className="datebg"><span className="num">19</span></div>

                <div className="datebg" id='off' onClick={() => openModal({title: 'Officers Meeting', description: 'Monthly meeting for discussing the officers’ agenda.'})}>
                    <span className="num">20</span>
                    <span className="off">Officers Meeting</span>
                </div>

                <div className="datebg"><span className="num">21</span></div>
                <div className="datebg"><span className="num">22</span></div>
                <div className="datebg"><span className="num">23</span></div>
                <div className="datebg"><span className="num">24</span></div>
                <div className="datebg"><span className="num">25</span></div>
                <div className="datebg"><span className="num">26</span></div>

                <div className="datebg" id='off' onClick={() => openModal({title: 'Leadership Seminar', description: 'A seminar aimed at enhancing leadership skills.'})}>
                    <span className="num">27</span>
                    <span className="off">Leadership Seminar</span>
                </div>

                <div className="datebg"><span className="num">28</span></div>
                <div className="datebg"><span className="num">29</span></div>
                <div className="datebg"><span className="num">30</span></div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
            </div>


            {modalContent && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{modalContent.title}</h2>
                        <p>{modalContent.description}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MonthView;
