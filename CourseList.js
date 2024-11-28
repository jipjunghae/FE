// import React from 'react';
// import { Link } from 'react-router-dom';
// import './CourseList.css';

// function CourseList() {
//     const courses = [
//         { id: 1, title: "의생명과 인공지능", professor: "최정환" },
//         { id: 2, title: "융합캡스톤 디자인 II", professor: "이상훈" },
//         { id: 3, title: "유전체학 및 생명정보학", professor: "이상혁" },
//         { id: 4, title: "K-MOOC: 비정형 데이터 분석", professor: "Senior Designer" },
//         { id: 5, title: "K-MOOC: 환경과 어린이 건강 이해", professor: "차득희" },
//     ];

//     return (
//         <div className="course-list">
//             {courses.map(course => (
//                 <div key={course.id} className="course-item">
//                     <input type="checkbox" />
//                     <div className="course-info">
//                         <Link to={`/course/${course.id}`}>
//                             <h3>{course.title}</h3>
//                         </Link>
//                         <p>{course.professor}</p>
//                     </div>
//                     <button className="more-button">⋮</button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default CourseList;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CourseList.css';

function CourseList() {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // 백엔드에서 강의 목록 데이터를 가져오는 함수
    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/courses'); // 백엔드 엔드포인트
            setCourses(response.data); // 데이터 상태 업데이트
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setIsLoading(false); // 로딩 상태 종료
        }
    };

    // 컴포넌트가 마운트될 때 데이터를 가져옴
    useEffect(() => {
        fetchCourses();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="course-list">
            {courses.map(course => (
                <div key={course.id} className="course-item">
                    <input type="checkbox" />
                    <div className="course-info">
                        <Link to={`/course/${course.id}`}>
                            <h3>{course.title}</h3>
                        </Link>
                        <p>{course.description || 'No professor listed'}</p> {/* 백엔드 데이터에 맞게 변경 */}
                    </div>
                    <button className="more-button">⋮</button>
                </div>
            ))}
        </div>
    );
}

export default CourseList;
