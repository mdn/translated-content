---
title: "EventSource: open 이벤트"
short-title: open
slug: Web/API/EventSource/open_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

{{domxref("EventSource")}} 인터페이스의 **`open`** 이벤트는 이벤트 소스와의 연결이 열릴 때 발생합니다.

이 이벤트는 취소할 수 없으며, 버블링되지 않습니다.

## 구문

{{domxref("EventTarget.addEventListener", "addEventListener()")}} 같은 메서드에서 이벤트 이름을 사용하거나 이벤트 핸들러 속성을 설정합니다.

```js-nolint
addEventListener("open", (event) => { })

onopen = (event) => { }
```

## 이벤트 타입

일반적인 {{domxref("Event")}} 객체입니다.

## 예제

```js
const evtSource = new EventSource("sse.php");

// addEventListener version
evtSource.addEventListener("open", (e) => {
  console.log("The connection has been established.");
});

// onopen version
evtSource.onopen = (e) => {
  console.log("The connection has been established.");
};
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [server-sent events 사용하기](/ko/docs/Web/API/Server-sent_events/Using_server-sent_events)
- {{domxref("EventSource/error_event", "error")}}
- {{domxref("EventSource/message_event", "message")}}
