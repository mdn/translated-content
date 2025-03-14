---
title: Event.isTrusted
slug: Web/API/Event/isTrusted
---

{{APIRef("DOM")}}

{{domxref("Event")}} 인터페이스의 **`isTrusted`** 읽기 전용 속성은 사용자 액션에 의해 생성된 이벤트에서는 `true`, 스크립트에서 생성 또는 수정했거나 {{domxref("EventTarget.dispatchEvent()")}}로 발송한 이벤트의 경우 `false`인 불리언 값입니다.

## 예제

```js
if (e.isTrusted) {
  // 신뢰할 수 있는 이벤트
} else {
  // 신뢰 불가능한 이벤트
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
