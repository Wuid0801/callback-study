import './App.css';
// 콜백 함수
// 내생각 - 어떤 함수에서 다른 함수의 매개변수로 전달하여 비동기 처리를 하는 함수

// StackOverflow의 한 이용자의 답변
// 1. 다른 함수의 인자로써 이용되는 함수.
// 2. 어떤 이벤트에 의해 호출되어지는 함수.


function App() {

  function CallbackData(callback) {
    setTimeout(() => {
      const data = "비동기 데이터";
      // 콜백 함수 호출
      callback(data);
    }, 2000);
  }
  // 콜백 함수 정의
  function handleData(data) {
    console.log("데이터를 받았습니다:", data);
  }

  // CallbackData 함수 호출하면서 콜백 함수 전달
  CallbackData(handleData);

  console.log("CallbackData 함수 호출됨. 비동기 처리 중...");
  return (
    <div>

    </div>
  );
}

export default App;
