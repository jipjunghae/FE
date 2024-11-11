import React from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';

function CourseList() {
    const courses = [
        { id: 1, title: "의생명과 인공지능", professor: "최정환" },
        { id: 2, title: "융합캡스톤 디자인 II", professor: "이상훈" },
        { id: 3, title: "유전체학 및 생명정보학", professor: "이상혁" },
        { id: 4, title: "K-MOOC: 비정형 데이터 분석", professor: "Senior Designer" },
        { id: 5, title: "K-MOOC: 환경과 어린이 건강 이해", professor: "차득희" },
    ];

    return (
        <div className="course-list">
            {courses.map(course => (
                <div key={course.id} className="course-item">
                    <input type="checkbox" />
                    <div className="course-info">
                        <Link to={`/course/${course.id}`}>
                            <h3>{course.title}</h3>
                        </Link>
                        <p>{course.professor}</p>
                    </div>
                    <button className="more-button">⋮</button>
                </div>
            ))}
        </div>
    );
}

export default CourseList;
