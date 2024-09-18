---
title: Document.scripts
slug: Web/API/Document/scripts
l10n:
  sourceCommit: 904f8c3d9c8a54e917f8db565bcfe58f976d859c
---

{{APIRef("DOM")}}

**`scripts`** 는 {{domxref("Document")}}인터페이스의 속성으로 문서 중{{HTMLElement("script")}} 요소의 목록을 반환합니다. 반환되는 객체는 단일 {{domxref("HTMLCollection")}} 객체입니다.

## 값

```js
var scriptList = document.scripts;
```

반환된 {{HTMLElement("script")}} 리스트 객체는 {{domxref("HTMLCollection")}}입니다. 일반 배열로 사용하여 해당 요소에 액세스할 수 있습니다.

## 예제

이 예제는 문서에 {{HTMLElement("script")}} 객체가 있음을 보여주기 위한 것입니다.

```js
var scripts = document.scripts;

if (scripts.length) {
  alert("This page has scripts!");
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
