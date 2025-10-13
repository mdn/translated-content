---
title: "EventSource: withCredentials 속성"
short-title: withCredentials
slug: Web/API/EventSource/withCredentials
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

{{domxref("EventSource")}} 인터페이스의 **`withCredentials`** 읽기 전용 속성은
`EventSource` 객체가 CORS 자격 증명이 설정된 상태로 인스턴스화되었는지 나타내는
불리언 값을 반환합니다.

## 값

`EventSource` 객체가 CORS 자격 증명이
설정된 상태로 인스턴스화되었는지(`true`)
또는 아닌지(`false`, 기본)를 나타내는 불리언 값.

## 예제

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.withCredentials);
```

> [!NOTE]
> GitHub 에서 전체 예시를 확인할 수 있습니다. [PHP를 사용한 간단한 SSE 데모](https://github.com/mdn/dom-examples/tree/main/server-sent-events)를 확인하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("EventSource")}}
