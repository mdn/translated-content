---
title: "KeyboardEvent: isComposing property"
slug: Web/API/KeyboardEvent/isComposing
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`KeyboardEvent.isComposing`** 는 읽기 전용 속성으로
{{domxref("Element/compositionstart_event", "compositionstart")}} 이후나
{{domxref("Element/compositionend_event", "compositionend")}} 이전과
같은 합성 세션 내에서 이벤트가 발생하는지를 불리언 값으로 나타냅니다.

## 값

불리언 값입니다.

## 예제

```js
const kbdEvent = new KeyboardEvent("syntheticKey", false);
console.log(kbdEvent.isComposing); // false 를 반환합니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Element/compositionstart_event", "compositionstart")}} 및 {{domxref("Element/compositionend_event", "compositionend")}}
- {{domxref("KeyboardEvent")}}
