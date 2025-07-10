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
