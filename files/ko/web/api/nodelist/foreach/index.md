---
title: NodeList.prototype.forEach()
slug: Web/API/NodeList/forEach
---

{{APIRef("DOM")}}

{{domxref("NodeList")}} 인터페이스의 **`forEach()`** 메서드는 리스트 내의 각각의 값 쌍에 대해 매개 변수에 지정된 콜백을 삽입 순서로 호출합니다.

## 문법Syntax

```js
NodeList.forEach(callback[, thisArg]);
```

### Parameters

- `callback`
  - : 각각의 요소에 대해 실행하는 함수로, 3개의 인수(arguments)를 갖습니다:_ *`currentValue`*
    _ : NodeList에서 처리중인 현재 요소(element)입니다.
    - `currentIndex`
      - : NodeList에서 처리중인 현재 요소의 인덱스입니다.
    - _`listObj`_
      - : `forEach()` 가 적용되고 있는 NodeList 객체입니다.
- `thisArg` {{Optional_inline}}
  - : `callback` 을 실행할 때 {{jsxref("this")}} 에 대입할 값입니다.

### Return value

{{jsxref('undefined')}}.

## Exceptions

_None_.

## Example

```js
var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

list.forEach(function (currentValue, currentIndex, listObj) {
  console.log(currentValue + ", " + currentIndex + ", " + this);
}, "myThisArg");
```

결과는 다음과 같습니다.

```
[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg
```

## Polyfill

이 {{Glossary("Polyfill","polyfill")}} 은 [ES5](https://caniuse.com/#search=es5) 를 지원하는 모든 브라우저에서 동작합니다:

```js
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
```

또는

```js
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
```

The above behavior is how many browsers actually implement NodeList.prototype.forEach (Chrome, for example).

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("Node")}}
- {{domxref("NodeList")}}
