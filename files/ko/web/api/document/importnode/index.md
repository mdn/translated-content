---
title: Document.importNode()
slug: Web/API/Document/importNode
---

{{APIRef("DOM")}}

## 설명

현재 문서가 아닌 외부 문서의 노드를 복사하여 현재 문서에 넣을 수 있도록 해줍니다.

## 문법

```js
var node = document.importNode(externalNode, deep);
```

- `node`
  - : 문서에 추가될 새로운 노드입니다. 새로운 노드가 문서 트리에 추가되기 전까지, 새로운 노드의 [parentNode](/ko/docs/Web/API/Node/parentNode)는 null입니다.
- `externalNode`
  - : 다른 문서에서 가져올 노드입니다.
- `deep`
  - : 불리언 타입을 가지며, 다른 문서에서 노드를 가져올 때 노드의 자식 요소들을 포함하여 가져올 것인지에 대한 여부를 결정합니다.

## 예제

```js
var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentDocument.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Notes

오리지널 노드는 오리지널 문서에서 삭제되지 않습니다. 추가된 노드는 오리지널 노드의 복사본입니다.

Nodes from external documents should be cloned using [`document.importNode()`](/ko/docs/Web/API/Document/importNode) (or adopted using [`document.adoptNode()`](/ko/docs/Web/API/Document/adoptNode)) before they can be inserted into the current document. For more on the [`Node.ownerDocument`](/ko/docs/Web/API/Node/ownerDocument) issues, see the [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for improved future compatibility.

## 명세서

{{Specifications}}

## 브라우저 지원율

{{Compat}}

## 참고

- {{domxref("document.adoptNode()")}}
