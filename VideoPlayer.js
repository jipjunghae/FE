
// // import React from 'react';

// // function VideoPlayer({ videoPath, onClose }) {
// //     return (
// //         <div className="video-player">
// //             <button onClick={onClose} className="close-button">
// //                 Close
// //             </button>
// //             <video controls>
// //                 <source src={`http://127.0.0.1:8000/${videoPath}`} type="video/mp4" />
// //                 Your browser does not support the video tag.
// //             </video>
// //         </div>
// //     );
// // }

// // export default VideoPlayer;
// import React, { useState, useRef, useEffect } from 'react';

// function VideoPlayer({ videoPath, onClose, onPlaybackData }) {
//     const videoRef = useRef(null);
//     const [startTime, setStartTime] = useState(null); // 재생 시작 시간
//     const [playbackData, setPlaybackData] = useState([]); // 재생 데이터

//     const handlePlay = () => {
//         if (!startTime) {
//             setStartTime(videoRef.current.currentTime); // 비디오 시작 시간 기록
//         }
//     };

//     const handlePause = () => {
//         if (startTime !== null) {
//             const endTime = videoRef.current.currentTime;
//             setPlaybackData((prevData) => [
//                 ...prevData,
//                 {
//                     start_time: startTime,
//                     end_time: endTime,
//                 },
//             ]);
//             setStartTime(null);
//         }
//     };

//     const handleEnded = () => {
//         if (startTime !== null) {
//             const endTime = videoRef.current.currentTime;
//             setPlaybackData((prevData) => [
//                 ...prevData,
//                 {
//                     start_time: startTime,
//                     end_time: endTime,
//                 },
//             ]);
//             setStartTime(null);

//             // 비디오 종료 후, 재생 데이터 백엔드로 전송
//             onPlaybackData(playbackData);
//         }
//     };

//     useEffect(() => {
//         // 컴포넌트가 닫힐 때 백엔드로 데이터 전송
//         return () => {
//             if (playbackData.length > 0) {
//                 onPlaybackData(playbackData);
//             }
//         };
//     }, [playbackData, onPlaybackData]);

//     return (
//         <div className="video-player">
//             <button onClick={onClose} className="close-button">
//                 Close
//             </button>
//             <video
//                 ref={videoRef}
//                 controls
//                 onPlay={handlePlay}
//                 onPause={handlePause}
//                 onEnded={handleEnded}
//             >
//                 <source src={`http://127.0.0.1:8000/${videoPath}`} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// }

// export default VideoPlayer;
// import React, { useState, useRef, useEffect } from 'react';

// function VideoPlayer({ videoPath, onClose, onPlaybackData }) {
//     const videoRef = useRef(null);
//     const [startTime, setStartTime] = useState(null); // 재생 시작 시간
//     const [playbackData, setPlaybackData] = useState([]); // 재생 데이터

//     const handlePlay = () => {
//         if (!startTime) {
//             setStartTime(videoRef.current.currentTime); // 비디오 시작 시간 기록
//         }
//     };

//     const handlePause = () => {
//         if (startTime !== null) {
//             const endTime = videoRef.current.currentTime;
//             const endTimestamp = new Date().toISOString(); // 종료 시간의 타임스탬프 기록
//             setPlaybackData((prevData) => [
//                 ...prevData,
//                 {
//                     start_time: startTime,
//                     end_time: endTime,
//                     start_timestamp: new Date().toISOString(), // 시작 시간의 타임스탬프 기록
//                     end_timestamp: endTimestamp,
//                 },
//             ]);
//             setStartTime(null);
//         }
//     };

//     const handleEnded = () => {
//         if (startTime !== null) {
//             const endTime = videoRef.current.currentTime;
//             const endTimestamp = new Date().toISOString(); // 종료 시간의 타임스탬프 기록
//             setPlaybackData((prevData) => [
//                 ...prevData,
//                 {
//                     start_time: startTime,
//                     end_time: endTime,
//                     start_timestamp: new Date().toISOString(), // 시작 시간의 타임스탬프 기록
//                     end_timestamp: endTimestamp,
//                 },
//             ]);
//             setStartTime(null);

//             // 비디오 종료 후, 재생 데이터 백엔드로 전송
//             onPlaybackData(playbackData);
//         }
//     };

//     useEffect(() => {
//         // 컴포넌트가 닫힐 때 백엔드로 데이터 전송
//         return () => {
//             if (playbackData.length > 0) {
//                 onPlaybackData(playbackData);
//             }
//         };
//     }, [playbackData, onPlaybackData]);

//     return (
//         <div className="video-player">
//             <button onClick={onClose} className="close-button">
//                 Close
//             </button>
//             <video
//                 ref={videoRef}
//                 controls
//                 onPlay={handlePlay}
//                 onPause={handlePause}
//                 onEnded={handleEnded}
//             >
//                 <source src={`http://127.0.0.1:8000/${videoPath}`} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// }

// export default VideoPlayer;
// handlePause에서는 데이터를 기록만 하고, handleEnded에서 비디오가 종료된 후에만 실제 데이터를 전송하도록
// import React, { useState, useRef, useEffect } from 'react'; 

// function VideoPlayer({ videoPath, onClose, onPlaybackData }) {
//     const videoRef = useRef(null);
//     const [startTime, setStartTime] = useState(null); // 재생 시작 시간
//     const [playbackData, setPlaybackData] = useState([]); // 재생 데이터

//     const handlePlay = () => {
//         if (!startTime) {
//             setStartTime(videoRef.current.currentTime); // 비디오 시작 시간 기록
//         }
//     };

//     const handlePause = () => {
//         if (startTime !== null) {
//             const endTime = videoRef.current.currentTime;
//             const endTimestamp = new Date().toISOString(); // 종료 시간의 타임스탬프 기록
//             setPlaybackData((prevData) => [
//                 ...prevData,
//                 {
//                     start_time: startTime,
//                     end_time: endTime,
//                     start_timestamp: new Date().toISOString(), // 시작 시간의 타임스탬프 기록
//                     end_timestamp: endTimestamp,
//                 },
//             ]);
//             setStartTime(null);
//         }
//     };

//     const handleEnded = () => {
//         if (startTime !== null) {
//             const endTime = videoRef.current.currentTime;
//             const endTimestamp = new Date().toISOString(); // 종료 시간의 타임스탬프 기록
//             setPlaybackData((prevData) => [
//                 ...prevData,
//                 {
//                     start_time: startTime,
//                     end_time: endTime,
//                     start_timestamp: new Date().toISOString(), // 시작 시간의 타임스탬프 기록
//                     end_timestamp: endTimestamp,
//                 },
//             ]);
//             setStartTime(null);

//             // 비디오 종료 후, 재생 데이터 백엔드로 전송
//             onPlaybackData(playbackData);
//         }
//     };

//     useEffect(() => {
//         // 컴포넌트가 닫힐 때 백엔드로 데이터 전송
//         return () => {
//             if (playbackData.length > 0) {
//                 onPlaybackData(playbackData);
//             }
//         };
//     }, [playbackData, onPlaybackData]);

//     return (
//         <div className="video-player">
//             <button onClick={onClose} className="close-button">
//                 Close
//             </button>
//             <video
//                 ref={videoRef}
//                 controls
//                 onPlay={handlePlay}
//                 onPause={handlePause}
//                 onEnded={handleEnded}
//             >
//                 <source src={`http://127.0.0.1:8000/${videoPath}`} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// }

// export default VideoPlayer;
// import React, { useState, useRef, useEffect } from 'react'; 422 오류 뜸
// import axios from 'axios';

// function VideoPlayer({ videoPath, courseId, lectureId, onClose, onPlaybackData }) {
//     const videoRef = useRef(null);
//     const [startTime, setStartTime] = useState(null); // 재생 시작 시간
//     const [playbackData, setPlaybackData] = useState([]); // 재생 데이터

//     const handlePlay = () => {
//         if (!startTime) {
//             setStartTime(videoRef.current.currentTime); // 비디오 시작 시간 기록
//         }
//     };

//     const handlePause = () => {
//         if (startTime !== null) {
//             const endTime = videoRef.current.currentTime;
//             const newPlayback = {
//                 start_time: startTime,
//                 end_time: endTime,
//                 start_timestamp: new Date().toISOString(),
//                 end_timestamp: new Date().toISOString(),
//             };
//             setPlaybackData((prevData) => [...prevData, newPlayback]);
//             setStartTime(null);
//         }
//     };
    
//     const handleEnded = () => {
//         if (startTime !== null) {
//             const endTime = videoRef.current.currentTime;
    
//             const newPlayback = {
//                 start_time: startTime,
//                 end_time: endTime,
//                 start_timestamp: new Date().toISOString(),
//                 end_timestamp: new Date().toISOString(),
//             };
    
//             setPlaybackData((prevData) => [...prevData, newPlayback]);
//             sendPlaybackData(newPlayback);  // 최신 데이터를 전송
//             setStartTime(null);
//         }
//     };
    
    
//     const sendPlaybackData = async (newPlayback) => {
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/task_start', {
//                 course_id: courseId,
//                 lecture_id: lectureId,
//                 playback: playbackData.concat(newPlayback), // 최신 데이터 포함
//             });
//             console.log("재생 데이터 전송 성공:", response.data);
//         } catch (error) {
//             console.error("재생 데이터 전송 실패:", error);
//         }
//     };
    
    
//     useEffect(() => {
//         // 컴포넌트가 닫힐 때 백엔드로 데이터 전송
//         return () => {
//             if (playbackData.length > 0) {
//                 sendPlaybackData();
//             }
//         };
//     }, [playbackData]);

//     return (
//         <div className="video-player">
//             <button onClick={onClose} className="close-button">
//                 Close
//             </button>
//             <video
//                 ref={videoRef}
//                 controls
//                 onPlay={handlePlay}
//                 onPause={handlePause}
//                 onEnded={handleEnded}
//             >
//                 <source src={`http://127.0.0.1:8000/${videoPath}`} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// }

// export default VideoPlayer;
import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';

function VideoPlayer({ videoPath, courseId, lectureId, onClose, onPlaybackData }) {
    const videoRef = useRef(null);
    const [startTime, setStartTime] = useState(null);
    const [playbackData, setPlaybackData] = useState([]);

    const handlePlay = () => {
        if (!startTime) {
            setStartTime(videoRef.current.currentTime);
        }
    };

    const handlePause = () => {
        if (startTime !== null) {
            const endTime = videoRef.current.currentTime;
            const newPlayback = {
                start_time: startTime,
                end_time: endTime,
                start_timestamp: new Date().toISOString(),
                end_timestamp: new Date().toISOString(),
            };
            setPlaybackData((prevData) => [...prevData, newPlayback]);
            setStartTime(null);
        }
    };

    const handleEnded = () => {
        if (startTime !== null) {
            const endTime = videoRef.current.currentTime;

            const newPlayback = {
                start_time: startTime,
                end_time: endTime,
                start_timestamp: new Date().toISOString(),
                end_timestamp: new Date().toISOString(),
            };

            setPlaybackData((prevData) => [...prevData, newPlayback]);
            sendPlaybackData(newPlayback);
            setStartTime(null);
        }
    };

    const sendPlaybackData = useCallback(async (newPlayback = null) => {
        try {
            const data = {
                course_id: courseId,
                lecture_id: lectureId,
                playback: newPlayback ? playbackData.concat(newPlayback) : playbackData,
            };
            console.log("전송 데이터:", JSON.stringify(data, null, 2));
            const response = await axios.post('http://127.0.0.1:8000/task_start', data);
            console.log("재생 데이터 전송 성공:", response.data);
        } catch (error) {
            console.error("재생 데이터 전송 실패:", error.response?.data || error.message);
        }
    }, [courseId, lectureId, playbackData]);

    useEffect(() => {
        return () => {
            if (playbackData.length > 0) {
                sendPlaybackData();
            }
        };
    }, [playbackData, sendPlaybackData]);

    return (
        <div className="video-player">
            <button onClick={onClose} className="close-button">
                Close
            </button>
            <video
                ref={videoRef}
                controls
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
            >
                <source src={`http://127.0.0.1:8000/${videoPath}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
