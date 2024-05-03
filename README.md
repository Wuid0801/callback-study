# 콜백함수란
내생각 - 어떤 함수에서 다른 함수의 매개변수로 전달하여 비동기 처리를 하는 함수

StackOverflow의 한 이용자의 답변
1. 다른 함수의 인자로써 이용되는 함수.
2. 어떤 이벤트에 의해 호출되어지는 함수.

## 왜 콜백 함수가 필요한가요?
자바스크립트는 코드를 위에서 아래로 순차적으로 실행 -> 그러나, 코드가 다른 행위가 일어난 뒤에 실행되는 경우도 있고 순차적으로 실행되지 않을 때도 있습니다. -> 비동기 프로그래밍이라고 합니다.
콜백은 비동기 작업이 완료되면 호출되어 특정 동작을 수행하도록 지정할 수 있기 때문입니다.

## 콜백 함수 예시
![콜백 코드](https://github.com/Wuid0801/callback-study/assets/105138020/721c0960-80f3-4b14-8df7-bd202a0133be)
1. CallbackData 함수는 2초 후에 실행되며, 주어진 콜백 함수를 호출
2. handleData 함수는 콜백 함수로 정의되어 있으며, CallbackData 함수에서 전달된 데이터를 처리
3. CallbackData(handleData); 코드는 CallbackData 함수를 호출하면서 handleData 함수를 인자로 전달하여, 콜백 함수를 CallbackData 함수 내에서 사용할 수 있도록 함
4. console.log("CallbackData 함수 호출됨. 비동기 처리 중..."); 코드는 CallbackData 함수가 호출되었음을 표시하고, 이후에 비동기 처리가 진행되는 동안을 보여줌

![콜백 로그](https://github.com/Wuid0801/callback-study/assets/105138020/486fded9-61c6-4f3b-a04e-da2d5e472c76)
