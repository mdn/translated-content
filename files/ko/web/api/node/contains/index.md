---
title: Node.contains()
slug: Web/API/Node/contains
---

{{APIRef("DOM")}}

**`Node.contains()`** 메소드는 주어진 인자가 node 의 자손인지, 아닌지에 대한 {{jsxref("Boolean")}} 값을 리턴합니다.

## Syntax

```js
node.contains(otherNode);
```

## Example

이 함수는 요소가 페이지의 body 안에 있는지 검사합니다. `contains` 는 포괄적이므로 node 가 body 자기 자신일 경우에도 true 가 반환됩니다. 만약 이걸 원하지 않는 경우에는 node 가 body 자기 자신인지 검사하여 `false` 를 반환하여 버리면 됩니다.

```js
function isInPage(node) {
  return node === document.body ? false : document.body.contains(node);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
