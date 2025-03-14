---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
---

{{APIRef("DOM")}}

`Node.previousSibling` 은 읽기전용 속성이며 현재 호출하는 노드가 속해 있는 부모의 {{domxref("Node.childNodes", "childNodes")}} 목록에서 특정 자식 노드를 리턴하거나 `childNodes` 목록의 첫번째 노드일 경우 Null값을 리턴합니다.`

## Syntax

```js
previousNode = node.previousSibling;
```

## Example

```js
// <a><b1 id="b1"/><b2 id="b2"/></a>

alert(document.getElementById("b1").previousSibling); // null
alert(document.getElementById("b2").previousSibling.id); // "b1"
```

## Notes

Gecko 기반 브라우저는 소스 마크업에서 공백을 나타내기 위해 문서 내에 텍스트 노드를 삽입합니다.
그러므로 예를 들어 [`Node.firstChild`](/ko/docs/Web/API/Node/firstChild)나 [`Node.previousSibling`](/ko/docs/Web/API/Node/previousSibling)을 통해서 얻은 노드는 작성자가 얻으려 한 실제 요소와는
달리 공백 텍스트 노드를 참조할 지도 모릅니다.

더 많은 정보는 [Whitespace in the DOM](/ko/docs/Web/API/Document_Object_Model/Whitespace)과
[W3C DOM 3 FAQ: Why are some Text nodes empty?](https://www.w3.org/DOM/faq.html#emptytext)를 보세요.

To navigate the opposite way through the child nodes list use [Node.nextSibling](/ko/docs/Web/API/Node/nextSibling).

## Specification

- [DOM Level 1 Core: previousSibling](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling)
- [DOM Level 2 Core: previousSibling](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8)
- [DOM Level 3 Core: previousSibling](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-640FB3C8)
