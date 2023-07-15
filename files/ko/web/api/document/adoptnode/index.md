---
title: Document.adoptNode()
slug: Web/API/Document/adoptNode
---

{{ ApiRef("DOM") }}

외부 문서로부터 노드를 가져온다. 해당 노드와 그 하위트리는 기존의 문서에서 지워지고 해당 노드의 [`ownerDocument`](/ko/docs/DOM/Node.ownerDocument) 는 현재 문서로 바뀐다. 그리고 그 노드는 현재의 문서에 삽입된다.

**Gecko 1.9 (Firefox 3)부터 지원**

## 문법

```js
node = document.adoptNode(externalNode);
```

- `node`
  - : 는 현재 문서에 삽입될 노드를 의미. 아직 해당 문서에 삽입되기 전이기 때문에 새로운 노드의 [`parentNode`](/ko/docs/DOM/Node.parentNode)는 `null` 이다.
- `externalNode`
  - : 는 노드를 가져오기 위한 외부 문서에 있는 노드를 의미.

## 예제

{{todo}}

## 알아두기

보통 `adoptNode` 호출은 다른 방식으로 구현된 곳에서 노드를 불러오기 때문에 실패하는 경우가 많다. 하지만 브라우저로 인한 문제인 경우는 문제가 된다.

Nodes from external documents should be cloned using [`document.importNode()`](/ko/docs/Web/API/Document/importNode) (or adopted using [`document.adoptNode()`](/ko/docs/Web/API/Document/adoptNode)) before they
can be inserted into the current document. For more on the [`Node.ownerDocument`](/ko/docs/Web/API/Node/ownerDocument) issues, see the
[W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many
sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for
improved future compatibility.

## 명세

{{Specifications}}

## 더 보기

- [document.importNode](/ko/docs/DOM/document.importNode)
