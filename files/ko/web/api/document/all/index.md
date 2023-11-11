---
title: "Document: all 속성"
short-title: all
slug: Web/API/Document/all
---

{{APIRef("DOM")}}{{Deprecated_Header}}

{{DOMxRef("Document")}} 인터페이스의 read-only **`all`** 요소는 document node에 위치한{{DOMxRef("HTMLAllCollection")}} 반환합니다.

문서순서상의 문서의 모든 요소 {{DOMxRef("HTMLAllCollection")}}를 리턴하는 `document.all` 대신, 문서순서상의 문서의 모든 요소 {{DOMxRef("NodeList")}}를 리턴하는 {{DOMxRef("Document.querySelectorAll")}}를 사용 할 수 있습니다:

```js
const allElements = document.querySelectorAll("*");
```

## 값

{{DOMxRef("HTMLAllCollection")}}는 문서 내에서 모든 node를 담고 있다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
