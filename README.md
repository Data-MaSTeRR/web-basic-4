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
