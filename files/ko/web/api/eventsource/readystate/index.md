---
title: "EventSource: readyState 속성"
short-title: readyState
slug: Web/API/EventSource/readyState
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

{{domxref("EventSource")}} 인터페이스의 읽기 전용 속성인
**`readyState`** 는 연결 상태를 나타내는 숫자를 반환합니다.

## 값

이 숫자는 {{domxref("EventSource")}} 인터페이스에 정의된 세 가지 상태 상수 중 하나입니다.

- `EventSource.CONNECTING` (0)
  - : 연결이 아직 열리지 않았습니다.
- `EventSource.OPEN` (1)
  - : 연결이 열려 있으며 통신할 준비가 되었습니다.
- `EventSource.CLOSED` (2)
  - : 연결이 닫혀있거나 열리지 않았습니다.

## 예제

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.readyState);
```

> [!NOTE]
> GitHub 에서 전체 예시를 확인할 수 있습니다. [PHP를 사용한 간단한 SSE 데모](https://github.com/mdn/dom-examples/tree/main/server-sent-events)를 확인하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("EventSource")}}
