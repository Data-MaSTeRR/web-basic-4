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