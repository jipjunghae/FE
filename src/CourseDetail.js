import React, { useState } from 'react';
import './CourseDetail.css';

function CourseDetail() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const courseData = {
        title: "유전체학 및 생명정보학",
        professor: "이상혁 교수",
        thisWeek: "3주차 [9월 16일 - 9월 22일]",
        activities: [
            { week: "1주차", date: "9월 02일 - 9월 08일", content: "G&B_01-1_Intro - 30:11", videoUrl: "https://www.example.com/video.mp4", status: "분석중" },
            // 추가 활동 데이터...
        ]
    };

    const openModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setIsModalOpen(false);
    };

    return (
        <div className="course-detail">
            <div className="section">
                <h3>이번주 강의</h3>
                <p className="date-info">{courseData.thisWeek}</p>
            </div>
            <div className="section">
                <h3>주차 별 학습 활동</h3>
                {courseData.activities.map((activity, index) => (
                    <div key={index} className="activity-item">
                        <p className="week-info">{activity.week} [{activity.date}]</p>
                        <p className="content-info" onClick={() => openModal(activity.videoUrl)}>
                            {activity.content}
                        </p>
                        {activity.status === "분석중" && <span className="status-icon">🔄 분석중</span>}
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <video controls src={selectedVideo} className="video-player">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CourseDetail;
