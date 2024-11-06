---
title: Document.hidden
slug: Web/API/Document/hidden
---

{{ ApiRef("DOM") }}

**`Document.hidden`** 읽기 전용 속성은 페이지가 숨겨졌는지 여부를 {{jsxref("Boolean")}} 값으로 나타냅니다.

## 예제

```js
document.addEventListener("visibilitychange", function () {
  console.log(document.hidden);
  // 숨김 여부가 변했을 때의 행동
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
