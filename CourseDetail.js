
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate import
// import VideoPlayer from './VideoPlayer';
// import './CourseDetail.css';
// import axios from 'axios'; // Axios 추가

// function CourseDetail() {
//     const [courseData, setCourseData] = useState([]); // 강의 데이터 상태 관리
//     const [isLoading, setIsLoading] = useState(true);
//     const [selectedLecture, setSelectedLecture] = useState(null); // 선택된 강의 ID
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const navigate = useNavigate(); // navigate 초기화

//     // 백엔드 데이터 가져오기
//     useEffect(() => {
//         const fetchCourseData = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/courses/1/lectures'); // course_id = 1 예시
//                 const fetchedData = response.data.map((lecture) => ({
//                     lectureId: lecture.lectureId, // 백엔드의 `lectureId`
//                     content: lecture.content || `${lecture.title} - ${lecture.length}:00`, // 강의 제목 및 시간
//                     status: lecture.status || (lecture.analysis ? '완료' : '분석중'), // 분석 상태
//                     videoPath: lecture.video_path, // 비디오 경로 추가
//                 }));
//                 setCourseData(fetchedData); // 가져온 데이터 상태 업데이트
//             } catch (error) {
//                 console.error('Error fetching course data:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         fetchCourseData();
//     }, []);

//     const openAnalysisResult = (lectureId) => {
//         navigate(`/analysis/${lectureId}`); // 분석 결과 페이지로 이동
//     };

//     const openModal = (lectureId) => {
//         setSelectedLecture(lectureId); // 선택된 강의 ID 저장
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setSelectedLecture(null);
//         setIsModalOpen(false);
//     };

//     if (isLoading) return <div>Loading...</div>;
//     if (!courseData.length) return <div>Error loading course data.</div>;

//     // 선택된 강의 데이터를 가져오기
//     const selectedLectureData = courseData.find(
//         (lecture) => lecture.lectureId === selectedLecture
//     );

//     return (
//         <div className="course-detail">
//             <div className="section">
//                 <h3>이번주 강의</h3>
//                 <p className="date-info">3주차 [9월 16일 - 9월 22일]</p> {/* 임의로 설정 */}
//             </div>
//             <div className="section">
//                 <h3>주차 별 학습 활동</h3>
//                 {courseData.map((activity, index) => (
//                     <div key={index} className="activity-item">
//                         <p className="week-info">Week {index + 1}</p>
//                         <p
//                             className="content-info"
//                             onClick={() => openModal(activity.lectureId)}
//                         >
//                             {activity.content}
//                         </p>
//                         {activity.status === '분석중' && (
//                             <span className="status-icon ongoing">🔄 분석중</span>
//                         )}
//                         {activity.status === '완료' && (
//                             <span
//                                 className="status-icon completed"
//                                 onClick={() => openAnalysisResult(activity.lectureId)}
//                                 style={{ cursor: 'pointer' }}
//                             >
//                                 ✅ 분석 완료
//                             </span>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             {isModalOpen && selectedLectureData && (
//                 <VideoPlayer
//                     courseId={1} // 예시
//                     lectureId={selectedLectureData.lectureId}
//                     onClose={closeModal}
//                     videoPath={selectedLectureData.videoPath} // 정확한 video_path 전달
//                 />
//             )}
//         </div>
//     );
// }

// export default CourseDetail;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import './CourseDetail.css';
import axios from 'axios';

function CourseDetail() {
    const [courseData, setCourseData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedLecture, setSelectedLecture] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/courses/1/lectures');
                const fetchedData = response.data.map((lecture) => ({
                    lectureId: lecture.lectureId,
                    content: lecture.content || `${lecture.title} - ${lecture.length}:00`,
                    status: lecture.status || (lecture.analysis ? '완료' : '분석중'),
                    videoPath: lecture.video_path,
                }));
                setCourseData(fetchedData);
            } catch (error) {
                console.error('Error fetching course data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCourseData();
    }, []);

    const openAnalysisResult = (lectureId) => {
        navigate(`/analysis/${lectureId}`);
    };

    const openModal = (lectureId) => {
        setSelectedLecture(lectureId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedLecture(null);
        setIsModalOpen(false);
    };

    const handlePlaybackData = async (playbackData) => {
        try {
            await axios.post('http://127.0.0.1:8000/task_start', {
                course_id: 1,
                lecture_id: selectedLecture,
                playback: playbackData,
            });
            console.log('Playback data sent to backend:', playbackData);
        } catch (error) {
            console.error('Error sending playback data:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (!courseData.length) return <div>Error loading course data.</div>;

    const selectedLectureData = courseData.find((lecture) => lecture.lectureId === selectedLecture);

    return (
        <div className="course-detail">
            <div className="section">
                <h3>이번주 강의</h3>
                <p className="date-info">3주차 [9월 16일 - 9월 22일]</p>
            </div>
            <div className="section">
                <h3>주차 별 학습 활동</h3>
                {courseData.map((activity, index) => (
                    <div key={index} className="activity-item">
                        <p className="week-info">Week {index + 1}</p>
                        <p
                            className="content-info"
                            onClick={() => openModal(activity.lectureId)}
                        >
                            {activity.content}
                        </p>
                        {activity.status === '분석중' && (
                            <span className="status-icon ongoing">🔄 분석중</span>
                        )}
                        {activity.status === '완료' && (
                            <span
                                className="status-icon completed"
                                onClick={() => openAnalysisResult(activity.lectureId)}
                                style={{ cursor: 'pointer' }}
                            >
                                ✅ 분석 완료
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {isModalOpen && selectedLectureData && (
                <VideoPlayer
                    courseId={1} // 예시
                    lectureId={selectedLectureData.lectureId}
                    onClose={closeModal}
                    videoPath={selectedLectureData.videoPath}
                    onPlaybackData={handlePlaybackData} // 데이터 전송 함수 전달
                />
            )}
        </div>
    );
}

export default CourseDetail;
