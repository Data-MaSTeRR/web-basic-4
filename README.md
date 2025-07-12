# DOM의 `firstChild`, `firstElementChild`, `childNodes` 정리

---

## 🌳 DOM 자식 노드 관련 속성

HTML 문서에서 특정 요소의 **자식 노드**를 다룰 때 사용하는 주요 속성을 정리했습니다.

---

## 📌 `firstChild`

* **정의**: 해당 노드의 \*\*첫 번째 자식 노드(Node)\*\*를 반환합니다.
* 포함 대상: Element, Text(공백 포함), Comment 모두 가능
* 반환값: `Node` 객체 (첫 번째 노드의 타입은 상황에 따라 다름)

### 예시

```js
const box = document.getElementById('box');
console.log(box.firstChild);
// → 공백(#text)이나 주석이 반환될 수 있음
```

---

## 📌 `firstElementChild`

* **정의**: 해당 요소의 \*\*첫 번째 자식 요소(Element)\*\*를 반환합니다.
* 포함 대상: HTML 요소(Element)만 반환, 공백/주석은 무시
* 반환값: `Element` 객체 (첫 번째 HTML 요소)

### 예시

```js
console.log(box.firstElementChild);
// → <p> … </p> 요소가 반환됨
```

---

## 📌 `childNodes`

* **정의**: 해당 노드의 \*\*모든 자식 노드(Node)\*\*를 포함하는 NodeList 반환
* 반환 타입: live NodeList (배열 비슷하지만 배열은 아님)
* 포함 대상: Element, Text(공백), Comment 모두 포함

### 예시

```html
<div id="box">
  <p>첫 번째</p>
  <p>두 번째</p>
</div>
```

```js
const box = document.getElementById('box');
console.log(box.childNodes);
// NodeList [#text, <p>, #text, <p>, #text]
```

---

## 📌 `children` (참고)

* **정의**: 해당 요소의 **자식 요소(Element)들만** 반환하는 HTMLCollection
* 포함 대상: HTML 요소(Element)만
* 반환 타입: live HTMLCollection

---

## 🔁 속성 비교

| 속성                  | 반환 대상                            | 타입             |
| ------------------- | -------------------------------- | -------------- |
| `firstChild`        | 첫 번째 노드 (Element, Text, Comment) | Node           |
| `firstElementChild` | 첫 번째 HTML 요소(Element)            | Element        |
| `childNodes`        | 모든 자식 노드(Node)                   | NodeList       |
| `children`          | 모든 자식 HTML 요소(Element)           | HTMLCollection |

---

## ✨ 요약

* **요소(Element)만 필요할 때** → `firstElementChild`, `children`
* **모든 노드(Node)를 보고 싶을 때** → `firstChild`, `childNodes`
* 공백과 주석도 노드로 취급되므로, HTML 요소만 다룰 때는 `firstElementChild`와 `children`을 쓰는 것이 안전합니다.

---

> 상황에 따라 적절한 속성을 선택해 사용하면 더 안정적이고 예측 가능한 코드를 작성할 수 있습니다!

# 일반적인 DOM 쿼리 메서드

자바스크립트를 통해 HTML 요소를 쿼리/선택할 때 일반적으로 사용되는 몇 가지 기본 제공 메서드입니다.

---

## 📌 `document.getElementById('some-id')`

* **설명**: ID로 HTML 요소를 선택합니다. (ID는 고유해야 하므로 하나의 요소만 선택됩니다.)
* 반환값: `Element` 객체 (혹은 없으면 `null`)

```js
const elem = document.getElementById('some-id');
```

---

## 📌 `document.querySelector('<some-css-selector>')`

* **설명**: 제공된 CSS 선택자에 일치하는 **첫 번째(!)** HTML 요소를 선택합니다.
* 선택자는 ID, 클래스, 태그, 자식/자손 결합자 등 모든 유효한 CSS 선택자 사용 가능
* 반환값: `Element` 객체 (혹은 없으면 `null`)

```js
const elem = document.querySelector('.some-class');
```

---

## 📌 `document.querySelectorAll('<some-css-selector>')`

* **설명**: 제공된 CSS 선택자에 일치하는 **모든** HTML 요소를 선택합니다.
* 반환값: `NodeList` (유사 배열)

```js
const elems = document.querySelectorAll('div > p');
```

---

## 📌 `document.getElementsByClassName('some-css-class')`

* **설명**: 지정한 CSS 클래스명을 가진 **모든** HTML 요소를 선택합니다.
* 반환값: `HTMLCollection` (유사 배열)

```js
const elems = document.getElementsByClassName('some-css-class');
```

---

## 📌 `document.getElementsByTagName('tag')`

* **설명**: 지정한 HTML 태그 이름에 해당하는 **모든** HTML 요소를 선택합니다.
* 반환값: `HTMLCollection`

```js
const elems = document.getElementsByTagName('p');
```

---

> ✅ 참고: `querySelector`와 `querySelectorAll`은 최신 표준이며, CSS 선택자를 그대로 사용할 수 있어 직관적이고 유연합니다. 기존 메서드(`getElementById`, `getElementsByClassName` 등)는 더 오래된 브라우저에서도 동작하고, 특정 상황에서 더 빠를 수 있습니다.

# DOM 탐색 & 이벤트 리스너 — 코드 인사이트 완전판

---

## 📋 코드 전체와 인사이트

아래의 코드는 `querySelector`, `getElementById` 등을 사용해 DOM 요소를 선택하고, 이벤트 리스너를 등록해 사용자 인터랙션을 처리하는 예제입니다. 각 코드의 의도, 장단점, 개선 방향까지 인사이트를 함께 담았습니다.

---

### 📜 코드

```js
// 요소 변수 생성 및 선언
let paragraphElement = document.querySelector('p');
let inputElement = document.querySelector('input');

// 리스너에 사용하기 위한 함수 → 함수 내부에 변수 선언이 없어서 상위 스코프의 변수를 참조 (스코프 체인)
function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log("paragraph clicked!");
}

function retrieveUserInput(event) {
    // let enteredText = inputElement.value; // input 박스의 현재 값
    let enteredText = event.target.value;   // 위와 동일, event에서 바로 가져옴
    // let enteredText = event.data;        // 입력된 문자 1글자만 반환 (input 이벤트에서 유용하지 않음)
    console.log(enteredText);
    console.log(event); // event 객체: type, target 등 유용한 정보 포함
}

// click 이벤트 리스너 등록
// 잘못된 예: changeParagraphText() → 즉시 실행되고 반환값(undefined)이 리스너로 등록됨
// 올바른 예: 함수 참조만 전달
paragraphElement.addEventListener('click', changeParagraphText);
// 또는 익명 함수로 감싸도 가능
// paragraphElement.addEventListener('click', () => changeParagraphText());

// input 이벤트 리스너
inputElement.addEventListener('input', retrieveUserInput);

---

// DOM 드릴링
const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

// HTML의 maxlength 속성을 JS에서 읽어와 상수화 → 불변의 기준값으로 사용
const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value; // input 박스에 현재 입력된 값
    const enteredTextLength = enteredText.length; // 글자 수

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters; // 남은 글자수 표시
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);
```

---

## 🔎 인사이트

✅ **`querySelector` vs `getElementById`**

* `querySelector`: CSS 선택자 문법으로 유연하게 요소 선택, 가독성 ↑
* `getElementById`: 가장 빠르고 직관적인 ID 선택, 성능 ↑

✅ **스코프 체인 활용**

* `changeParagraphText`는 외부의 `paragraphElement`를 참조한다.
* 전역 변수에 의존하면 유지보수가 어려워지므로 필요한 경우 매개변수로 전달하거나 캡슐화 권장.

✅ **const로 선언한 이유**

* `maxAllowedChars`는 불변이므로 `const`로 선언해 코드의 의도를 명확히 한다.
* 단, `const`는 객체의 프로퍼티나 배열의 요소는 변경 가능하다는 점에 유의.

✅ **이벤트 객체의 활용**

* `event.target.value`를 사용해 입력값을 즉시 가져온다. `inputElement.value`도 가능하지만 더 일반적이고 안전하다.
* `event.data`는 `input` 이벤트에서 1글자만 반환되기 때문에 대부분의 경우에는 부적합하다.

✅ **함수 참조 vs 실행**

* `addEventListener('click', changeParagraphText)` → 함수 참조 전달
* `addEventListener('click', changeParagraphText())` → 즉시 실행, 리턴값(undefined)이 등록되어 동작하지 않음

✅ **DOM 드릴링과 캐싱**

* `productNameInputElement`와 `remainingCharsElement`를 미리 변수에 저장해 DOM 탐색을 최소화해 성능 최적화
* DOM을 깊이 탐색하는 코드는 성능 저하와 가독성 문제를 유발하므로 데이터 속성(`data-*`) 활용이나 `id` 사용 권장

✅ **`textContent` vs `value`**

* `textContent`: 요소의 콘텐츠(텍스트 노드)를 읽거나 쓴다
* `value`: 입력 폼 요소의 현재 값
* 목적에 따라 구분해 사용해야 한다

✅ **유지보수성을 높이기 위해**

* 요소를 모아 객체에 저장하거나 함수의 매개변수로 전달해 의존성을 낮추자

✅ **HTML의 `maxlength`를 코드에서 다시 읽는 이유**

* HTML에서 정의된 속성을 JS로 가져와 기준으로 사용하면 UI와 로직이 일관된다
* 예) HTML에서 `maxlength="50"`으로 지정 → JS에서 `const maxAllowedChars = input.maxLength`로 받아 사용

# 🔁 JavaScript 반복문 정리

JavaScript에서 코드를 여러 번 실행하거나 컬렉션을 순회하기 위해 사용하는 반복문들을 정리했습니다. 각각의 특징과 사용법, 주의사항을 함께 담았습니다.

---

## 📌 기본 반복문

### 📝 `for`

가장 전통적인 반복문으로, 반복 횟수를 명확히 알고 있을 때 유용합니다.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

✅ 초기화, 조건식, 증감식으로 구성
✅ 배열 인덱스 기반 순회에 적합

---

### 📝 `while`

조건이 `true`인 동안 계속 실행됩니다. 반복 횟수를 알 수 없을 때 유용합니다.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

✅ 조건을 만족하지 않으면 한 번도 실행되지 않을 수 있음

---

### 📝 `do...while`

`while`과 유사하지만, **조건을 나중에 평가**하므로 최소 1회는 실행됩니다.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

✅ 무조건 한 번은 실행하고 싶을 때 사용

---

## 📌 컬렉션 순회용 반복문

### 📝 `for...of`

배열, 문자열, `Map`, `Set` 등의 **이터러블 객체**를 순회할 때 사용합니다.

```js
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}
```

✅ 값(value)에 바로 접근
✅ 인덱스가 필요하면 `entries()` 또는 `for` 사용

---

### 📝 `for...in`

객체의 \*\*열거 가능한 속성(key)\*\*을 순회합니다.

```js
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}
```

⚠️ 배열에는 적합하지 않음 (순서 보장 X, 프로토타입 체인도 탐색)

---

## 📌 고차 함수 기반 반복

### 📝 `forEach`

배열의 각 요소에 대해 콜백 함수를 실행합니다.

```js
[1, 2, 3].forEach((value, index) => {
  console.log(index, value);
});
```

✅ 간단하고 가독성 좋음
❌ `break`/`continue` 불가 → 필요한 경우 `for` 사용

---

## 🔎 언제 무엇을 쓸까?

| 상황          | 추천 반복문                |
| ----------- | --------------------- |
| 인덱스로 배열을 순회 | `for`                 |
| 값만 순회       | `for...of`, `forEach` |
| 객체의 키/값 순회  | `for...in`            |
| 조건 기반 반복    | `while`, `do...while` |

---

## 🚀 요약

✅ 반복 횟수를 알면 → `for`
✅ 값 중심 순회 → `for...of`
✅ 키 중심 순회 → `for...in`
✅ 반드시 한 번 실행 → `do...while`
✅ 배열 전용, 가독성 ↑ → `forEach`
