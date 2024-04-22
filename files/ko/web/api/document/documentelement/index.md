---
title: Document.documentElement
slug: Web/API/Document/documentElement
---

{{ApiRef("DOM")}}

**`Document.documentElement`** 읽기 전용 속성은 [문서](/ko/docs/Web/API/Document)의 루트 요소를 나타내는 {{domxref("Element")}}를 반환합니다. HTML 문서를 예로 들면 {{htmlelement("html")}} 요소를 반환합니다.

## 구문

```js
const element = document.documentElement;
```

## 예제

```js
const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;
// firstTier is a NodeList of the direct children of the root element
// such as <head> and <body>

for (const child of firstTier) {
  // do something with each direct child of the root element
}
```

## 참고

모든 비어있지 않은 HTML 문서의 `documentElement`는 항상 {{htmlelement("html")}} 요소를 가리킵니다. 모든 비어있지 않은 XML 문서의 `documentElement`는 종류불문하고 해당 문서의 루트 요소를 가리킵니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
