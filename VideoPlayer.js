// // import React, { useEffect, useState, useCallback } from "react";
// // import axios from "axios";

// // function VideoPlayer({ courseId, lectureId }) {
// //     const [videoData, setVideoData] = useState(null);
// //     const [isLoading, setIsLoading] = useState(true);

// //     // fetchVideoData를 useCallback으로 감싸기
// //     const fetchVideoData = useCallback(async () => {
// //         try {
// //             const response = await axios.get(
// //                 `http://127.0.0.1:8000/courses/${courseId}/lectures/${lectureId}` // API 엔드포인트 수정
// //             );
// //             setVideoData(response.data);
// //         } catch (error) {
// //             console.error("Error fetching video data:", error);
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     }, [courseId, lectureId]);

// //     useEffect(() => {
// //         fetchVideoData();
// //     }, [fetchVideoData]);

// //     if (isLoading) return <div>Loading...</div>;
// //     if (!videoData) return <div>Error loading video.</div>;

// //     return (
// //         <div className="video-player">
// //             <h3>{videoData.title}</h3>
// //             <video controls>
// //                 <source src={`http://127.0.0.1:8000/${videoData.video_path}`} type="/video/mp4" />
// //                 Your browser does not support the video tag.
// //             </video>
// //         </div>
// //     );
// // }

// // export default VideoPlayer;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function VideoPlayer({ courseId, lectureId }) {
//     const [videoData, setVideoData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchVideoData = async () => {
//             try {
//                 const response = await axios.get(
//                     `http://127.0.0.1:8000/courses/${courseId}/lectures/${lectureId}`
//                 );
//                 setVideoData(response.data); // 정상적으로 데이터를 설정
//             } catch (error) {
//                 console.error("Error fetching video data:", error);
//             } finally {
//                 setIsLoading(false); // 로딩 상태 종료
//             }
//         };

//         if (courseId && lectureId) {
//             fetchVideoData();
//         }
//     }, [courseId, lectureId]); // 의존성 배열 확인

//     if (isLoading) return <div>Loading...</div>;
//     if (!videoData) return <div>Error loading video.</div>;

//     return (
//         <div className="video-player">
//             <h3>{videoData.title}</h3>
//             <video controls>
//                 <source src={`http://127.0.0.1:8000/${videoData.video_path}`} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// }

// export default VideoPlayer;
// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";

// function VideoPlayer({ courseId, lectureId }) {
//     const videoRef = useRef(null);
//     const [videoData, setVideoData] = useState(null); // 동영상 데이터
//     const [isLoading, setIsLoading] = useState(true); // 로딩 상태
//     const [playbackData, setPlaybackData] = useState([]); // 재생 데이터
//     const [startTime, setStartTime] = useState(null); // 재생 시작 시간

//     useEffect(() => {
//         const fetchVideoData = async () => {
//             try {
//                 const response = await axios.get(
//                     `http://127.0.0.1:8000/courses/${courseId}/lectures/${lectureId}`
//                 );
                
//                 // 비디오 경로를 절대 경로로 생성
//                 const videoSource = `http://127.0.0.1:8000/${response.data.video_path}`;
        
//                 console.log("Video source:", videoSource);  // 비디오 경로 확인
        
//                 // 비디오 데이터 상태 업데이트
//                 setVideoData(response.data); // videoData에 강의 데이터 설정
//             } catch (error) {
//                 console.error("Error fetching video data:", error);
//             } finally {
//                 setIsLoading(false); // 로딩 상태 해제
//             }
//         };
        

//         if (courseId && lectureId) {
//             fetchVideoData();
//         }
//     }, [courseId, lectureId]);

//     const handlePlay = () => {
//         if (!startTime) {
//             setStartTime({
//                 time: videoRef.current.currentTime,
//                 timestamp: new Date().toISOString(), // 현재 로컬 시간을 ISO 형식으로 기록
//             });
//         }
//     };

//     const handlePause = () => {
//         if (startTime !== null) {
//             const endTime = {
//                 time: videoRef.current.currentTime,
//                 timestamp: new Date().toISOString(), // 현재 로컬 시간을 ISO 형식으로 기록
//             };

//             setPlaybackData((prevData) => [
//                 ...prevData,
//                 {
//                     start_time: startTime.time,
//                     end_time: endTime.time,
//                     start_timestamp: startTime.timestamp,
//                     end_timestamp: endTime.timestamp,
//                 },
//             ]);
//             setStartTime(null);
//         }
//     };

//     const handleEnd = async () => {
//         if (startTime !== null) {
//             const endTime = {
//                 time: videoRef.current.currentTime,
//                 timestamp: new Date().toISOString(),
//             };

//             setPlaybackData((prevData) => [
//                 ...prevData,
//                 {
//                     start_time: startTime.time,
//                     end_time: endTime.time,
//                     start_timestamp: startTime.timestamp,
//                     end_timestamp: endTime.timestamp,
//                 },
//             ]);
//             setStartTime(null);
//         }

//         try {
//             await axios.post("http://127.0.0.1:8000/task_start", {
//                 course_id: courseId,
//                 lecture_id: lectureId,
//                 playback: playbackData,
//             });
//             console.log("Playback data sent to backend:", playbackData);
//         } catch (error) {
//             console.error("Error sending playback data:", error);
//         }
//     };

//     if (isLoading) return <div>Loading...</div>;
//     if (!videoData) return <div>Error loading video. Please try again later.</div>;

//     const videoSource = `http://127.0.0.1:8000/${videoData.video_path}`;

//     return (
//         <div className="video-player">
//             <video
//                 ref={videoRef}
//                 controls
//                 onPlay={handlePlay}
//                 onPause={handlePause}
//                 onEnded={handleEnd}
//             >
//                 <source src={videoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// }

// export default VideoPlayer;
import React from 'react';

function VideoPlayer({ videoPath, onClose }) {
    return (
        <div className="video-player">
            <button onClick={onClose} className="close-button">
                Close
            </button>
            <video controls>
                <source src={`http://127.0.0.1:8000/${videoPath}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
