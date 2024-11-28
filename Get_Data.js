// 프론트엔드에서 서버(https://sodamsoft.com/esp32/blink)로 GET 요청을 보내 데이터를 가져옵니다.
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://sodamsoft.com/esp32/blink'); // 데이터 요청
    console.log(response.data); // 데이터 확인
    return response.data; // 데이터를 반환
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
