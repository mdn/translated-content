---
title: "Navigator: maxTouchPoints 속성"
short-title: maxTouchPoints
slug: Web/API/Navigator/maxTouchPoints
l10n:
  sourceCommit: f47eea7f1ea9a18a93ecca03b0d4bbe2e9711316
---

{{APIRef("HTML DOM")}}

**`maxTouchPoints`** 는 {{domxref("Navigator")}} 인터페이스의 읽기 전용 속성이며, 현재 기기가 지원하는 동시 터치 접촉점의 최대 개수를 반환합니다.

## 값

숫자입니다.

이 값은 하드웨어에 따라 다릅니다. 터치스크린이 없는 데스크톱 컴퓨터(Mac, Windows, Linux)는 0을 반환하며, 스마트폰(Android, iOS)은 일반적으로 5를 반환합니다.

## 예제

```js
if (navigator.maxTouchPoints > 1) {
  // 기기가 2개 이상의 터치 포인트를 동시에 인식할 수 있는 경우;
  // 두세 손가락 스와이프 같은 복잡한 상호작용 제스처를 제공
} else {
  // 기기의 터치 포인트가 1개뿐이거나 터치스크린이 아닌 경우
  // 드래그, 클릭 같은 기본적인 제스처를 제공
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
