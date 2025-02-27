---
title: "BroadcastChannel: message event"
short-title: message
slug: Web/API/BroadcastChannel/message_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

`message` 이벤트는 해당되는 채널에 메시지가 도착할 시, {{domxref('BroadcastChannel')}} 객체에서 발생합니다.

## 구문

{{domxref("EventTarget.addEventListener", "addEventListener()")}} 같은 메서드에서 이벤트 이름을 사용하거나, 이벤트 처리기 속성을 설정하세요.

```js-nolint
addEventListener("message", (event) => { })
onmessage = (event) => { }
```

## 이벤트 타입

{{domxref("MessageEvent")}}. {{domxref("Event")}}를 상속합니다.

{{InheritanceDiagram("MessageEvent")}}

## 이벤트 속성

아래 나열된 속성 외에도, 부모 인터페이스인 {{domxref("Event")}}의 속성들을 사용할 수 있습니다.

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : 메시지 발신자가 보낸 데이터.
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : 메시지 발신자의 출처를 나타내는 문자열.
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
  - : 이벤트의 고유 ID를 나타내는 문자열.
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
  - : {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, 또는 {{domxref("ServiceWorker")}} 객체 등 메시지 발신자를 나타내는 메시지 이벤트 출처.
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}
  - : 메시지가 전송되는 채널과 연결된 포트를 나타내는 {{domxref("MessagePort")}} 객체의 배열(예: 체널 내 메시징, 공유된 맥락에 메시지를 보낼 때 등).

## 예제

이 예제에서는 사용자가 버튼을 클릭했을 때 [`<textarea>`](/ko/docs/Web/HTML/Element/textarea)의 내용을 발신하는 "발신자" [`<iframe>`](/ko/docs/Web/HTML/Element/iframe)과, 발신된 메시지를 수신하고 그 결과를 [`<div>`](/ko/docs/Web/HTML/Element/div) 요소에 기록하는 "수신자" iframe이 있습니다.

### 발신자

```html hidden
<h1>Sender</h1>
<label for="message">Type a message to broadcast:</label><br />
<textarea id="message" name="message" rows="1" cols="40">Hello</textarea>
<button id="broadcast-message" type="button">Broadcast message</button>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 150px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}

textarea {
  padding: 0.2rem;
}

label,
br {
  margin: 0.5rem 0;
}

button {
  vertical-align: top;
  height: 1.5rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
const messageControl = document.querySelector("#message");
const broadcastMessageButton = document.querySelector("#broadcast-message");

broadcastMessageButton.addEventListener("click", () => {
  channel.postMessage(messageControl.value);
});
```

### 수신자 1

```html hidden
<h1>Receiver 1</h1>
<div id="received"></div>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});
```

### 수신자 2

```html hidden
<h1>Receiver 2</h1>
<div id="received"></div>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});
```

### 결과

{{ EmbedLiveSample('Sender', '100%', 220) }}

{{ EmbedLiveSample('Receiver_1', '100%', 160) }}

{{ EmbedLiveSample('Receiver_2', '100%', 160) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 연관된 이벤트: [`messageerror`](/ko/docs/Web/API/BroadcastChannel/messageerror_event)
