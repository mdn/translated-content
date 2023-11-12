---
title: NodeList.entries()
slug: Web/API/NodeList/entries
---

{{APIRef("DOM")}}

**`NodeList.entries()`** 메서드는 이 객체에 포함된 모든 key/value 쌍을 통과하는 {{jsxref("Iteration_protocols",'iterator')}} 를 반환합니다. 이 값(value)은 {{domxref("Node")}} 객체입니다.

## Syntax

```js
list.entries();
```

### Return value

{{jsxref("Iteration_protocols","iterator")}} 를 반환합니다.

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

// Using for..of
for (var entry of list.entries()) {
  console.log(entry);
}
```

결과는 다음과 같습니다:

```
Array [ 0, <p> ]
Array [ 1, #text "hey" ]
Array [ 2, <span> ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("Node")}}
- {{domxref("NodeList")}}
