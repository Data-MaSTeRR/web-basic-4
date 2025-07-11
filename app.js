// console.log(document);

// DOM 직접 조회를 위한, html 구조 검색
// console.dir(document);

// DOM 직접 조회
// document.body.children[1].children[0].href = "https://google.com";

// id만 가능
let anchorElement = document.getElementById('external-link');
anchorElement.href = "https://google.com";

// css 선택자면 모두 가능
document.querySelector('#external-link');
anchorElement.href = "https://google.com";

// js에서 DOM으로 요소 추가하기
// 1. 요소 생성
let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://naver.com";
newAnchorElement.textContent = "This leads to Naver!";

// 2. 부모 요소에 접근
let firstParagraph = document.querySelector('p');

// 3. 부모 요소에 요소 삽입
firstParagraph.appendChild(newAnchorElement);

// js에서 DOM으로 요소 제거하기
 let firstH1Element = document.querySelector('h1');
 firstH1Element.remove();
 // firstH1Element.parentElement.removeChild(firstH1Element); 구 방식