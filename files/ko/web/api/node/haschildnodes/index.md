---
title: Node.hasChildNodes()
slug: Web/API/Node/hasChildNodes
---

{{APIRef("DOM")}}

**`Node.hasChildNodes()`** 메소드는 현재 노드({{domxref("Node")}})에게 자식노드([child nodes](/ko/docs/Web/API/Node.childNodes))가 있는지를 {{jsxref("Boolean")}} 값으로 반환합니다.

## 구문

```js
node.hasChildNodes();
```

## 예시

아래 예시에서는 "foo"라는 id를 가진 요소를 찾고 "foo" 요소에게 자식노드가 있으면 첫번째 자식노드를 제거해줍니다.

```js
var foo = document.getElementById("foo");

if (foo.hasChildNodes()) {
  foo.removeChild(foo.childNodes[0]);
}
```

## 명세

{{Specifications}}

## 같이 보기

- {{domxref("Node.childNodes")}}
- {{domxref("Node.hasAttributes")}}
