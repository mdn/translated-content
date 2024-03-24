---
title: BroadcastChannel.postMessage()
short-title: postMessage()
slug: Web/API/BroadcastChannel/postMessage
l10n:
  sourceCommit: f7c2472a909cdfbc490f790e8f5f493b04238c2e
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.postMessage()`** 는 모든 종류의 {{jsxref("Object")}}가 될 수 있는 메세지를 동일한 {{glossary("origin", "출처")}}를 가진 모든 {{glossary("browsing context", "브라우징 맥락")}}의 각 수신기에 보냅니다. 메세지는 채널에 바인딩된 각 {{domxref("BroadcastChannel")}}을 대상으로 하는 ['message'](/ko/docs/Web/API/BroadcastChannel/message_event) 이벤트로 전송됩니다.

{{AvailableInWorkers}}

## 구문

```js-nolint
channel.postMessage(message)
```

### 매개변수

- `message`
  - : 다른 창으로 전송될 데이터입니다. 데이터는 [structured clone 알고리즘](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)을 통해 직렬화됩니다. 즉, 다양한 데이터 객체를 직접 직렬화하지 않고도 안전하게 전송할 수 있습니다.

### 반환 값

없음.

### 예외

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("BroadcastChannel")}}이 이미 닫힌 경우 발생합니다.
- `DataCloneError` {{domxref("DOMException")}}
  - : 데이터를 직렬화할 수 없는 경우 발생합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `BroadcastChannel.postMessage()`가 속한 인터페이스, {{domxref("BroadcastChannel")}}.
