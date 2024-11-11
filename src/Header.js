import React from 'react';
import { Link } from 'react-router-dom'; // Link 임포트
import logo from './assets/school-logo.png'; // 로고 이미지 파일 경로
import './Header.css';

function Header() {
    return (
        <div className="header">
            <Link to="/"> {/* 로고 클릭 시 '/' 경로로 이동 */}
                <img src={logo} alt="학교 로고" className="logo" />
            </Link>
            <h1>나의 강좌</h1>
            <div className="header-icons">
                <span>🔔</span>
                <span>⚙️</span>
                <span>👤</span>
            </div>
        </div>
    );
}

export default Header;
