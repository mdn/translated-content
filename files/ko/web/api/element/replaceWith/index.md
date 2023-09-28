---
title: "Element: replaceWith() method"
short-title: replaceWith()
slug: Web/API/Element/replaceWith
page-type: web-api-instance-method
browser-compat: api.Element.replaceWith
---

{{APIRef("DOM")}}

**`Element.replaceWith()`** 메서드는 부모 노드의 자식 목록에 있는 
`Element` 를 {{domxref("Node")}} 집합 또는 문자열 객체로 대체합니다. 
문자열 객체는 동등한 {{domxref("Text")}} 노드로 추가됩니다.

## 구문

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### 파라미터

- `param1`, …, `paramN`
  - : {{domxref("Node")}} 집합 또는 대체 대상이 되는 문자열 객체를 파라미터로 받습니다.

### 반환값

반환값은 없습니다 ({{jsxref("undefined")}}).

### 예외 처리

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 노드가 hierarchy 내 특정 부분에 추가되지 못 하는 경우 발생하는 에러입니다.

## 예시

### `replaceWith()` 사용 예시

```js
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

### 스코프 밖 `replaceWith()`

`replaceWith()` 메서드는 `with` 함수 안 스코프에 정의되어 있지 않습니다.
보다 자세한 사항은 이 곳({{jsxref("Symbol.unscopables")}})을 참조하십시오.

```js
with (node) {
  replaceWith("foo");
}
// ReferenceError: replaceWith is not defined
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 추가 자료

- {{domxref("Node.replaceChild()")}}
- {{domxref("NodeList")}}