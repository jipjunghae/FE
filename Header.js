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
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Header() {
//     const [notifications, setNotifications] = useState([]); // 알림 목록 상태
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 열림 상태

//     // 알림 데이터 가져오기
//     useEffect(() => {
//         const fetchNotifications = async () => {
//             try {
//                 const response = await axios.get("http://127.0.0.1:8000/notification");
//                 setNotifications(response.data); // API에서 가져온 데이터를 상태에 저장
//             } catch (error) {
//                 console.error("Error fetching notifications:", error);
//             }
//         };

//         fetchNotifications();
//     }, []);

//     // 알림 드롭다운 토글
//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     // 알림 읽음 처리
//     const handleNotificationClick = async (id, link) => {
//         try {
//             // 읽음 처리 API 호출
//             await axios.put(`http://127.0.0.1:8000/notification/${id}`, { is_read: true });

//             // 알림 목록에서 읽음 처리
//             setNotifications((prevNotifications) =>
//                 prevNotifications.map((notification) =>
//                     notification.id === id ? { ...notification, is_read: true } : notification
//                 )
//             );

//             // 알림 링크로 이동
//             if (link) {
//                 window.location.href = link; // 해당 링크로 이동
//             }
//         } catch (error) {
//             console.error("Error marking notification as read:", error);
//         }
//     };

//     return (
//         <div className="header">
//             <Link to="/"> {/* 로고 클릭 시 '/' 경로로 이동 */}
//                 <img src={logo} alt="학교 로고" className="logo" />
//             </Link>
//             <h1>나의 강좌</h1>
//             <div className="header-icons">
//                 <span onClick={toggleDropdown}>🔔</span>
//                 <span>⚙️</span>
//                 <span>👤</span>
//             </div>
//             {isDropdownOpen && (
//                 <div className="dropdown">
//                     {notifications.length > 0 ? (
//                         notifications.map((notification) =>
//                             !notification.is_read ? (
//                                 <div
//                                     key={notification.id}
//                                     className="notification-item"
//                                     onClick={() =>
//                                         handleNotificationClick(notification.id, notification.link)
//                                     }
//                                 >
//                                     {notification.message}
//                                 </div>
//                             ) : null
//                         )
//                     ) : (
//                         <div className="notification-item">No new notifications</div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Header;
