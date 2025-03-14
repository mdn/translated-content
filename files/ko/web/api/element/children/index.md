---
title: "Element: children property"
short-title: children
slug: Web/API/Element/children
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

읽기 전용인 **`children`** 속성은 호출된 요소의 모든 자식 {{domxref("Element", "요소")}}를 포함하는 동적인 {{domxref("HTMLCollection")}}을 반환합니다.

`Element.children`은 요소 노드만을 포함합니다. 텍스트 및 주석 노드와 같이 요소가 아닌 노드를 포함한 모든 자식 노드를 가져오기 위해서는 {{domxref("Node.childNodes")}}를 사용합니다.

## 값

{{ domxref("HTMLCollection") }}은 `node`의 자식인 DOM 요소의 동적이고 정렬된 컬렉션입니다. 컬렉션의 {{domxref("HTMLCollection.item()", "item()")}} 메서드 혹은 JavaScript 배열 형식 표기법을 사용하여 컬렉션의 개별 자식 노드에 접근할 수 있습니다.

요소에 요소 자식이 없으면 `children`은 `length`가 `0`인 빈 목록입니다.

## 예제

```js
const myElement = document.getElementById("foo");
for (const child of myElement.children) {
  console.log(child.tagName);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Node.childNodes")}}
