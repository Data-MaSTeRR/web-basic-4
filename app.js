// 요소 변수 생성 및 선언
let paragraphElement = document.querySelector('p');

let inputElement = document.querySelector('input');

// 리스너에 사용하기 위한 함수 -> 함수 내부에 변수 선언 없어서, 상위 스코프의 변수 참조 | "스코프 체인"
function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log("paragraph clicked!");
}

function retrieveUserInput() {
    let enteredText = inputElement.value; // value는 input 박스의 삽입된 값 가져옴
    console.log(enteredText);
}

// 이벤트 리스너 | type: 조건, listener: 액션(함수 실행)
// click 이벤트 리스너
// paragraphElement.addEventListener('click',  changeParagraphText()); 오류 | 조건 없이(listen x)그냥 바로 실행
paragraphElement.addEventListener('click',  changeParagraphText);
// paragraphElement.addEventListener('click',  () => changeParagraphText()); 익명함수 쓰는 방법도 가능

// input 이벤트 리스너
inputElement.addEventListener('input', retrieveUserInput);