---
title: Node.normalize()
slug: Web/API/Node/normalize
---

{{APIRef("DOM")}}

**`Node.normalize()`** 메소드는 지정된 노드와 하위 트리의 모든 노드를 "정규화된" 형태로 놓습니다. 정규화된 하위 트리의 텍스트 노드는 비어있지 않으며 인접한 텍스트 노드도 존재하지 않습니다.

## 문법

```js
element.normalize();
```

## 예제

```js
var wrapper = document.createElement("div");

wrapper.appendChild(document.createTextNode("Part 1 "));
wrapper.appendChild(document.createTextNode("Part 2 "));

// 이 때, wrapper.childNodes.length === 2
// wrapper.childNodes[0].textContent === "Part 1 "
// wrapper.childNodes[1].textContent === "Part 2 "

wrapper.normalize();

// 이제, wrapper.childNodes.length === 1
// wrapper.childNodes[0].textContent === "Part 1 Part 2 "
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- [`Text.splitText`](/ko/docs/Web/API/Text/splitText)
