// DOM 드릴링
const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNameInputElement);

// html에서 maxlength 추출
// const를 사용해서 새로운 값을 선언하지 않도록 안정성 부여 -> 하지만, 참조 타입인 객체나 배열의 **내부 내용(프로퍼티, 요소)**는 변경할 수 있습니다.
const maxAllowedChars = productNameInputElement.maxLength;

// 남은 글자수 계산하는 함수 - 스코프 체인 (유의)
function updateRemainingCharacters(event) {
    const enteredText = event.target.value; // input에 들어가 있는 값
    const enteredTextLength = enteredText.length; // 위 값의 길이, length는 속성 (메서드 x)

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters; // 요소값 동적으로 바꾸기
}

// 이벤트 리스너
productNameInputElement.addEventListener('input', updateRemainingCharacters);