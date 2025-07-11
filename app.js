// 요소 변수 생성 및 선언
let paragraphElement = document.querySelector('p');

// 리스너에 사용하기 위한 함수
function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log("paragraph clicked!");
}

// 이벤트 리스너 | type: 조건, listener: 액션(함수 실행)
// paragraphElement.addEventListener('click',  changeParagraphText()); 오류 | 조건 없이(listen x)그냥 바로 실행
paragraphElement.addEventListener('click',  changeParagraphText);
// paragraphElement.addEventListener('click',  () => changeParagraphText()); 익명함수 쓰는 방법도 가능