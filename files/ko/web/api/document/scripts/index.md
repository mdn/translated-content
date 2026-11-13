---
title: Document.scripts
slug: Web/API/Document/scripts
l10n:
  sourceCommit: 904f8c3d9c8a54e917f8db565bcfe58f976d859c
---

{{APIRef("DOM")}}

**`scripts`** 는 {{domxref("Document")}}인터페이스의 속성으로 문서 중{{HTMLElement("script")}} 요소의 목록을 반환합니다. 반환되는 객체는 단일 {{domxref("HTMLCollection")}} 객체입니다.

## 값

{{domxref("HTMLCollection")}}입니다. 이를 사용하여 목록의 모든 요소를 배열처럼 가져올 수 있습니다.

## 예제

다음은 페이지 내 {{HTMLElement("script")}} 요소의 존재를 확인하는 예시입니다.

```js
let scripts = document.scripts;

if (scripts.length) {
  alert("This page has scripts!");
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
