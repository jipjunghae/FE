import React, { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./AnalysisResult.css";

// Chart.js 등록
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function AnalysisResult({ analysisId }) {
    const [lowFocusSegments, setLowFocusSegments] = useState([]);
    const [chartData, setChartData] = useState({});
    const [focusSummary, setFocusSummary] = useState("");

    useEffect(() => {
        const fetchAnalysisData = async () => {
            try {
                // Mock 데이터
                const mockData = {
                    low_focus_segments: [
                        { start_time: "00:01:10", end_time: "00:02:00" },
                        { start_time: "00:03:30", end_time: "00:04:15" }
                    ],
                    focus_summary: "This lecture covers the basics of genomics...",
                    chart_data: [70, 60, 45, 80, 90, 40, 20]
                };

                setLowFocusSegments(mockData.low_focus_segments);
                setFocusSummary(mockData.focus_summary);

                // Chart 데이터 설정
                setChartData({
                    labels: ["1min", "2min", "3min", "4min", "5min", "6min", "7min"],
                    datasets: [
                        {
                            label: "Focus Level",
                            data: mockData.chart_data,
                            borderColor: "rgba(75,192,192,1)",
                            borderWidth: 2,
                            fill: false,
                        }
                    ]
                });
            } catch (error) {
                console.error("Error fetching analysis data:", error);
            }
        };

        fetchAnalysisData();
    }, [analysisId]);

    // Chart 옵션 설정
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            x: {
                type: "category",
            },
            y: {
                beginAtZero: true,
                suggestedMin: 0, //최소값 
                suggestedMax: 50 //최대값
            },
        },
    };

    return (
        <div className="analysis-result">
            <h3>집중도 분석 결과</h3>

            {/* 요약 */}
            <div>
                <h4>요약</h4>
                <p>{focusSummary}</p>
            </div>

            {/* 비집중 구간 */}
            <div>
                <h4>비집중 구간</h4>
                <ul>
                    {lowFocusSegments.map((segment, index) => (
                        <li key={index}>
                            {segment.start_time} - {segment.end_time}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 그래프 */}
            <div>
                <h4>집중도 그래프</h4>
                {chartData.labels ? (
                    <Line data={chartData} options={chartOptions} />
                ) : (
                    <p>Loading chart...</p>
                )}
            </div>
        </div>
    );
}

export default AnalysisResult;
