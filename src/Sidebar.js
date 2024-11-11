// Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>My Page</h2>
            <ul>
                <li>교과 과정</li>
                <li>비교과 과정</li>
                <li>e-Class</li>
                <li>설정</li>
            </ul>
        </div>
    );
}

export default Sidebar;
