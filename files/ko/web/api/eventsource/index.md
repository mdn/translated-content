---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

**`EventSource`** 인터페이스는 [server-sent events](/ko/docs/Web/API/Server-sent_events)에 대한 웹 콘텐츠의 인터페이스입니다.

`EventSource` 인스턴스는 [HTTP](/ko/docs/Web/HTTP) 서버와의 영구적인 연결을 열며, 서버는 `text/event-stream` 형식으로 [이벤트](/ko/docs/Learn_web_development/Core/Scripting/Events)를 보냅니다. {{domxref("EventSource.close()")}}를 호출하여 닫기 전까지 연결은 열린 상태로 유지합니다.

{{InheritanceDiagram}}

연결이 열리면, 서버로부터 들어온 메시지는 이벤트 형식으로 코드에 전달됩니다. 들어온 메시지에 이벤트 필드가 있는 경우, 발생하는 이벤트는 이벤트 필드 값과 동일합니다. 이벤트 필드가 없는 경우, 일반적인 {{domxref("EventSource/message_event", "message")}} 이벤트가 발생합니다.

[웹 소켓](/ko/docs/Web/API/WebSockets_API)과 달리 server-sent events는 단방향입니다. 데이터 메시지는 서버에서 클라이언트(예: 사용자의 웹 브라우저)로 한 방향으로 전달됩니다. 클라이언트에서 서버로 메시지 형태의 데이터를 보낼 필요가 없을 때 적합한 선택입니다. 예를 들어, `EventSource`는 소셜 미디어 상태 업데이트, 뉴스 피드 또는 [IndexedDB](/ko/docs/Web/API/IndexedDB_API), [web storage](/ko/docs/Web/API/Web_Storage_API)와 같은 [client-side storage](/ko/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage) 메커니즘으로 데이터를 전달할 때 유용합니다.

> [!WARNING]
> **HTTP/2를 사용하지 않는** 경우, SSE는 열 수 있는 연결의 최대 개수에 대한 제한을 받습니다. 특히 여러 탭을 열 때 문제가 되는데, 이는 제한이 '브라우저 단위'로 적용되며 매우 낮은 값(6)으로 설정되기 때문입니다. 이 문제는 [Chrome](https://crbug.com/275955)과 [Firefox](https://bugzil.la/906896)에 수정하지 않음으로 표시되어 있습니다. 이 제한은 브라우저 + 도메인 단위로 적용되며, 이는 `www.example1.com`의 모든 탭에서 총 6개의 SSE 연결을 열 수 있고, `www.example2.com`에서 다른 6개의 SSE 연결을 열 수 있습니다(출처: [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). HTTP/2를 사용하는 경우, 동시에 열 수 있는 HTTP 스트림의 최대 개수는 서버와 클라이언트 간의 협상으로 결정됩니다(기본은 100입니다).

## 생성자

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : 지정된 URL으로부터 수신한 server-sent events를 처리하기 위한 새로운 `EventSource`를 생성합니다. 선택적으로 자격 증명 모드를 설정할 수 있습니다.

## 인스턴스 속성

이 인터페이스는 부모인 {{domxref("EventTarget")}}로부터 속성을 상속받습니다.

- {{domxref("EventSource.readyState")}} {{ReadOnlyInline}}
  - : 연결 상태를 나타내는 숫자. 가능한 값은 `CONNECTING` (`0`), `OPEN` (`1`), 또는 `CLOSED` (`2`)입니다.
- {{domxref("EventSource.url")}} {{ReadOnlyInline}}
  - : 소스의 URL을 나타내는 문자열.
- {{domxref("EventSource.withCredentials")}} {{ReadOnlyInline}}
  - : `EventSource` 객체가 교차 출처 ([CORS](/ko/docs/Web/HTTP/Guides/CORS)) 자격 증명이 설정된 상태(`true`)로 인스턴스화되었는지, 아닌지(`false`, 기본)를 나타내는 불리언 값.

## 인스턴스 메서드

이 인터페이스는 부모인 {{domxref("EventTarget")}}로부터 메서드를 상속받습니다.

- {{domxref("EventSource.close()")}}
  - : 연결이 존재하는 경우, 연결을 닫고 `readyState` 속성을 `CLOSED`로 설정합니다. 이미 연결이 닫혀 있는 경우 아무 동작도 하지 않습니다.

## 이벤트

- {{domxref("EventSource/error_event", "error")}}
  - : 이벤트 소스와의 연결에 실패했을 때 발생합니다.
- {{domxref("EventSource/message_event", "message")}}
  - : 이벤트 소스로부터 데이터를 받았을 때 발생합니다.
- {{domxref("EventSource/open_event", "open")}}
  - : 이벤트 소스와 연결이 열렸을 때 발생합니다.

추가적으로 이벤트 소스는 이벤트 필드와 함께 메시지를 보낼 수 있으며, 이는 이벤트 필드 값에 대응되는 ad hoc 이벤트를 생성합니다.

## 예제

이 기본 예제에서는 서버로부터 이름이 붙지 않은 이벤트를 수신하는 `EventSource`가 생성되며, `sse.php` 페이지는 이벤트를 생성합니다.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

수신된 각 이벤트는 `EventSource` 객체의 `onmessage` 이벤트 핸들러를 실행합니다. 차례로 새로운 {{HTMLElement("li")}} 요소를 만들고 이 안에 메시지의 데이터를 씁니다. 그리고 이미 문서에 존재하는 리스트 요소에 새로운 요소를 추가합니다.

> [!NOTE]
> GitHub 에서 전체 예시를 확인할 수 있습니다. [PHP를 사용한 간단한 SSE 데모](https://github.com/mdn/dom-examples/tree/main/server-sent-events)를 참고하세요.

이름이 있는 이벤트를 수신하려면, 전송된 각 이벤트 타입에 대한 수신기가 필요합니다.

```js
const sse = new EventSource("/api/v1/sse");

/*
 * This will listen only for events
 * similar to the following:
 *
 * event: notice
 * data: useful data
 * id: some-id
 */
sse.addEventListener("notice", (e) => {
  console.log(e.data);
});

/*
 * Similarly, this will listen for events
 * with the field `event: update`
 */
sse.addEventListener("update", (e) => {
  console.log(e.data);
});

/*
 * The event "message" is a special case, as it
 * will capture events without an event field
 * as well as events that have the specific type
 * `event: message` It will not trigger on any
 * other event type.
 */
sse.addEventListener("message", (e) => {
  console.log(e.data);
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Server-sent events](/ko/docs/Web/API/Server-sent_events)
- [server-sent events 사용하기](/ko/docs/Web/API/Server-sent_events/Using_server-sent_events)
