---
title: "EventSource: message 이벤트"
short-title: message
slug: Web/API/EventSource/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

{{domxref("EventSource")}} 인터페이스의 **`message`** 이벤트는 이벤트 소스를 통해 데이터를 수신할 때 발생합니다.

이 이벤트는 취소할 수 없으며, 버블링되지 않습니다.

## 구문

{{domxref("EventTarget.addEventListener", "addEventListener()")}}와 같은 메서드에서 이벤트 이름을 사용하거나, 이벤트 핸들러 속성을 설정합니다.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## 이벤트 타입

{{domxref("MessageEvent")}}. {{domxref("Event")}}로부터 상속됩니다.

{{InheritanceDiagram("MessageEvent")}}

## 이벤트 속성

이 인터페이스는 부모인 {{domxref("Event")}}의 속성을 상속받습니다.

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : 메시지 송신자로부터 보내진 데이터.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 메시지 송신자의 출처를 나타내는 문자열.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 이벤트에 유일한 ID를 나타내는 문자열.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : 메시지 송신자를 나타내는 `MessageEventSource` ({{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} 객체가 될 수 있습니다).
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : 메시지가 전송되는 채널과 연결된 포트를 나타내는 {{domxref("MessagePort")}} 객체 배열(적절한 경우, 예: 채널 메시징이나 공유 워커로 메시지를 보낼 때).

## 예제

이 기본 예제에서는 서버로부터 이벤트를 받기 위해 `EventSource` 를 생성하며, `sse.php` 페이지는 이벤트를 생성하는 역할을 합니다.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.addEventListener("message", (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
});
```

### onselect로 작성한 동일한 예시

```js
evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [server-sent events 사용하기](/ko/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/ko/docs/Web/API/EventSource/open_event)
- [`error`](/ko/docs/Web/API/EventSource/error_event)
