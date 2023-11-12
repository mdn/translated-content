---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
---

{{APIRef("DOM")}}

**`Node.ownerDocument`** 읽기 전용 속성은 이 node 의 최상위 document 객체를 반환합니다.

## Syntax

```js
document = element.ownerDocument;
```

- `document` 는 element 의 부모 [`document`](/ko/docs/DOM/document) 객체입니다.

## Example

```js
// given a node "p", get the top-level HTML child
// of the document object

var d = p.ownerDocument;
var html = d.documentElement;
```

## Notes

이 속성에 의해 반환된`document` 객체는 실제 HTML 문서의 모든 child 노드들이 생성되는 메인 객체입니다. 이 속성이 document 그 자체 노드에서 사용될 경우, 결과는 `null` 이 됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
