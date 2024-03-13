---
title: "Element: prepend() 메서드"
short-title: prepend()
slug: Web/API/Element/prepend
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.prepend()`** 메서드는 {{domxref("Element")}}의 첫 번째 자식 이전에 {{domxref("Node")}} 객체 혹은 문자열 객체 집합을 삽입합니다. 문자열 객체는 {{domxref("Text")}} 노드와 동등하게 삽입됩니다.

## 구문

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* … ,*/ paramN)
```

### 매개변수

- `param1`, …, `paramN`
  - : 삽입할 {{domxref("Node")}} 혹은 문자열 객체 집합.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 노드가 계층에서 지정된 위치에 삽입될 수 없을 때 에러를 던집니다.

## 예제

### 요소를 앞에 추가하기

```js
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### 텍스트를 앞에 추가하기

```js
let div = document.createElement("div");
div.append("Some text");
div.prepend("Headline: ");

console.log(div.textContent); // "Headline: Some text"
```

### 요소와 텍스트를 앞에 추가하기

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.prepend("Some text", p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
```

### prepend 메서드는 범위가 지정되지 않습니다

`prepend()` 메서드는 `with` 문으로 범위가 지정되지 않습니다.
자세한 내용은 {{jsxref("Symbol.unscopables")}} 참고하시기 바랍니다.

```js
let div = document.createElement("div");

with (div) {
  prepend("foo");
}
// ReferenceError: prepend is not defined
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Element.before()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
