---
title: Document.importNode()
slug: Web/API/Document/importNode
translation_of: Web/API/Document/importNode
---
{{APIRef("DOM")}}

## 설명

현재 문서가 아닌 외부 문서의 노드를 복사하여 현재 문서에 넣을 수 있도록 해줍니다.

## 문법

```js
var node = document.importNode(externalNode, deep);
```

- `node`
  - : 문서에 추가될 새로운 노드입니다. 새로운 노드가 문서 트리에 추가되기 전까지, 새로운 노드의 [parentNode](/ko/docs/DOM/Node.parentNode)는 null입니다.
- `externalNode`
  - : 다른 문서에서 가져올 노드입니다.
- `deep`
  - : 불리언 타입을 가지며, 다른 문서에서 노드를 가져올 때 노드의 자식 요소들을 포함하여 가져올 것인지에 대한 여부를 결정합니다.

> **참고:** **Note:** DOM4 스펙 (Gecko 13.0 {{geckoRelease(13)}}에서 적용되어 있습니다)에서, deep은 선택적 인자입니다. 만약 해당 속성을 생략한다면, 함수는 자동으로 deep을 **`true`**` 로 인식하여 작동하게 되고, 기본 동작을 하게 됩니다. 만약 자식 노드를 포함하지 않은 해당 노드만 가져오고싶다면, 반드시 deep인자에 false를 주시길 바랍니다.``이러한 동작 방식은 최신 스펙에서 변경되었고, 만약 deep 속성을 생략하면, 함수는 자동으로 deep을 false로 인식하여 동작합니다. 비록 deep 속성이 선택적 속성이라고 해도, 당신은 항상 deep 속성을 상호 호환성을 위하여 제공하는 것이 좋습니다. Gecko 28.0 {{geckoRelease(28)}} 버전부터, deep속성을 입력하지 않을 경우 콘솔에서 에러를 반환합니다. `

## 예제

```js
var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentDocument.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Notes

오리지널 노드는 오리지널 문서에서 삭제되지 않습니다. 추가된 노드는 오리지널 노드의 복사본입니다.

Nodes from external documents should be cloned using [`document.importNode()`](/ko/docs/Web/API/Document/importNode) (or adopted using [`document.adoptNode()`](/ko/docs/Web/API/Document/adoptNode)) before they can be inserted into the current document. For more on the [`Node.ownerDocument`](/ko/docs/Web/API/Node/ownerDocument) issues, see the [W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for improved future compatibility.

## Specifications

{{Specifications}}

## 브라우저 지원율

{{Compat}}

## 참고

- {{domxref("document.adoptNode()")}}
