---
title: element.lastChild
slug: Web/API/Node/lastChild
---

{{ ApiRef() }}

## 요약

**lastChild**는 노드의 마지막 자식을 반환합니다.

## 구문과 값

```js
last_child = element.lastChild;
```

반환되는 `last_child`는 노드입니다. 노드의 부모가 요소이면, 자식은 보통 요소 노드, 텍스트 노드, 주석 노드입니다.

## 예시

```js
var tr = document.getElementById("row1");
corner_td = tr.lastChild;
```

## 주의

자식 요소가 없으면 `null`을 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
