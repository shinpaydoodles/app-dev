import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/Header';
import WeekView from './assets/WeekView';
import MonthView from './assets/MonthView';

function App() {
    return (
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/week" element={<WeekView />} />
                <Route path="/month" element={<MonthView />} />
                <Route path="/" element={<MonthView />} /> 
            </Routes>
        </Router>
    );
}

export default App;
