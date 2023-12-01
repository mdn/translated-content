---
title: Document.body
slug: Web/API/Document/body
---

{{APIRef("DOM")}}

`Document.body` 속성은 현재 문서의 {{htmlelement("body")}} 혹은 {{htmlelement("frameset")}} 노드를 나타냅니다. 일치하는 요소가 존재하지 않으면 `null`을 반환합니다.

## 구문

```js
const objRef = document.body;
document.body = objRef;
```

## 예제

```js
// HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

let aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## 참고

`Document.body`는 문서의 콘텐츠를 수용하는 요소입니다. `<body>` 콘텐츠를 가지고 있는 문서는 `<body>` 요소를 반환하고, 프레임셋을 가지고 있는 문서는 가장 바깥쪽의 `<frameset>` 요소를 반환합니다.

`body` 속성에 새로운 값을 설정할 수 있긴 하지만, 문서에 새로운 본문을 설정하는건 `<body>` 요소가 가지고 있던 모든 자식을 제거하는 것과 같습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Document.head")}}
