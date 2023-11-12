---
title: EventSource()
slug: Web/API/EventSource/EventSource
---

{{APIRef('WebSockets API')}}

**`EventSource()`** 생성자는 원격 자원을 나타내는 새롭게 생성된 {{domxref("EventSource")}} 를 반환합니다.

## 구문

```js
eventSource = new EventSource(url, configuration);
```

### 파라미터

- `url`
  - : 이벤트/메시지를 제공하는 원격 자원의 위치를 나타내는 {{domxref("USVString")}} 입니다.
- `configuration` {{optional_inline}}
  - : 새 연결 구성을 위한 옵션을 제공합니다. 가능한 항목은 다음과 같습니다.\* `withCredentials`. 기본값은 `false` 이며, CORS 가 자격을 `포함`하도록 설정되어야하는지를 나타냅니다.

## 예시

```js
var evtSource = new EventSource("sse.php");
var eventList = document.querySelector("ul");

evtSource.onmessage = function (e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
};
```

> **참고:** GitHub 에서 전체 예시를 확인할 수 있습니다 — [Simple SSE demo using PHP를 사용하는 간단한 SSE 데모](https://github.com/mdn/dom-examples/tree/master/server-sent-events)를 보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{domxref("EventSource")}}
