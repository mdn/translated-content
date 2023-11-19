---
title: "Document: all 속성"
short-title: all
slug: Web/API/Document/all
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

{{DOMxRef("Document")}} 읽기전용 인터페이스인 **`all`** 속성은 문서 노드에 위치한{{DOMxRef("HTMLAllCollection")}} 반환합니다.

문서순서상의 문서의 모든 요소 {{DOMxRef("HTMLAllCollection")}}를 리턴하는 `document.all` 대신, 문서순서상의 문서의 모든 요소 {{DOMxRef("NodeList")}}를 리턴하는 {{DOMxRef("Document.querySelectorAll")}}를 사용 할 수 있습니다:

```js
const allElements = document.querySelectorAll("*");
```

## 값

{{DOMxRef("HTMLAllCollection")}}는 문서 내에서 모든 요소를 담고 있다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
