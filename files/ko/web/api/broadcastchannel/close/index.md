---
title: BroadcastChannel.close()
short-title: close()
slug: Web/API/BroadcastChannel/close
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.close()`** 는 채널에 대한 연결을 종료하여, 객체가 가비지 컬렉션으로 처리되도록 합니다. 브라우저 입장에서 채널이 더 이상 필요하지 않다는 것을 알 수 있는 다른 방법이 없기 때문에, 이 단계는 반드시 수행해야 하는 단계입니다.

{{AvailableInWorkers}}

## 구문

```js-nolint
channel.close()
```

## 예제

```js
// 채널에 연결
const bc = new BroadcastChannel("test_channel");

// postMessage 등의 동작들...

// 완료되면 채널 연결 해제
bc.close();
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `BroadcastChannel.close()`가 속한 인터페이스, {{domxref("BroadcastChannel")}}.
