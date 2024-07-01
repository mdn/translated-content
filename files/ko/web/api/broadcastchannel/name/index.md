---
title: BroadcastChannel.name
short-title: name
slug: Web/API/BroadcastChannel/name
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.name`** 읽기 전용 속성은 지정된 채널의 이름을 고유하게 식별하는 문자열을 반환합니다. 이 이름은 생성 시 {{domxref("BroadcastChannel.BroadCastChannel", "BroadcastChannel()")}} 생성자에 전달되므로 읽기 전용입니다.

{{AvailableInWorkers}}

## 값

문자열.

## 예제

```js
// 채널에 연결
const bc = new BroadcastChannel("test_channel");

// postMessage 등의 동작들...

// 채널 이름을 콘솔에 로깅
console.log(bc.name); // "test_channel"

// 완료되면 채널 연결 해제
bc.close();
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `BroadcastChannel.name`이 속한 인터페이스, {{domxref("BroadcastChannel")}}.
