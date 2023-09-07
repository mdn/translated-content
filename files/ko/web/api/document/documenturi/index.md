---
title: Document.documentURI
slug: Web/API/Document/documentURI
---

{{ApiRef("DOM")}}

{{domxref("Document")}} 인터페이스의 **`documentURI`** 속성은 document location 을 string 으로 반환합니다.

DOM3 에서 원래 이 속성은 읽기/쓰기 속성으로 정의되어 있습니다. DOM4 명세에서는 읽기 전용입니다.

## Syntax

```js
var string = document.documentURI;
```

## Notes

HTML documents 는 동일한 값을 반환하는 {{domxref("document.URL")}} 속성을 가집니다. `URL` 과는 달리, `documentURI` 는 모든 타입의 documents 에서 이용 가능합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
