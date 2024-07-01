---
title: ParentNode.childElementCount
slug: Web/API/Element/childElementCount
---

{{ APIRef("DOM") }}

**`ParentNode.childElementCount`** 읽기 전용 속성은 주어진 요소의 자식 요소 개수를 `unsigned long` 타입으로 반환합니다.

> **참고:** 이 속성은 처음에 {{domxref("ElementTraversal")}} 인터페이스에 정의되었습니다. 이 인터페이스는 자식이 있는 {{domxref("Node")}}와 자식 {{domxref("Node")}}를 위한 두 가지 고유한 속성 집합을 포함하고 있었는데, 각각 {{domxref("ParentNode")}}와 {{domxref("ChildNode")}} 개별 인터페이스로 이동되었습니다. `childElementCount`의 경우 {{domxref("ParentNode")}}로 이동했습니다. 이것은 기술적인 변화로 호환성에는 영향을 미치지 않습니다.

## 문법

```js
var count = node.childElementCount;
```

- `count`
  - : `unsigned long`(정수) 타입의 반환값.
- `node`
  - : {{domxref("Document")}}, {{domxref("DocumentFragment")}} 또는 {{domxref("Element")}} 객체.

## 예제

```js
var foo = document.getElementById("foo");
if (foo.childElementCount > 0) {
  // Do something
}
```

## 폴리필 (IE8 & IE9 & Safari)

이 속성은 IE9 이전 버전에서는 지원하지 않습니다. IE9과 Safari는 `Document`와 `DocumentFragment` 객체에서 이 속성을 지원하지 않습니다.

```js
(function (constructor) {
  if (
    constructor &&
    constructor.prototype &&
    constructor.prototype.childElementCount == null
  ) {
    Object.defineProperty(constructor.prototype, "childElementCount", {
      get: function () {
        var i = 0,
          count = 0,
          node,
          nodes = this.childNodes;
        while ((node = nodes[i++])) {
          if (node.nodeType === 1) count++;
        }
        return count;
      },
    });
  }
})(window.Node || window.Element);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{domxref("ParentNode")}}와 {{domxref("ChildNode")}} 인터페이스.
- 이 인터페이스를 구현한 객체 타입: {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("DocumentFragment")}}.
