import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <Routes>
                        <Route path="/" element={<CourseList />} />
                        <Route path="/course/:id" element={<CourseDetail />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
