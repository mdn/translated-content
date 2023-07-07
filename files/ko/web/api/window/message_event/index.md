---
title: "Window: message 이벤트"
slug: Web/API/Window/message_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

`message` 이벤트는 window가 메세지를 받을 때, 예를 들어 다른 브라우징 맥락에서 [`Window.postMessage()`](/ko-KR/docs/Web/API/Window/postMessage)을 호출할 때 {{domxref('Window')}} 객체에서 실행됩니다.

이 이벤트는 취소할 수 없고, 버블링되지도 않습니다.

## 구문

{{domxref("EventTarget.addEventListener", "addEventListener()")}}와 같은 메서드에서 이벤트 이름을 사용하거나, 이벤트 핸들러의 속성을 설정하세요.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## 이벤트 타입

{{domxref("Event")}}로부터 상속된 {{domxref("MessageEvent")}}입니다.

{{InheritanceDiagram("MessageEvent")}}

## 이벤트 속성

_이 인터페이스는 부모인 {{domxref("Event")}}의 속성들도 상속받습니다._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : 발신자가 보낸 메세지 데이터입니다.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 발신자의 출처를 나타내는 문자열입니다.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 이벤트의 고유한 ID 값을 나타내는 문자열입니다.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : 발신인을 나타내는 `MessageEventSource`({{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} 등등) 입니다.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : 메세지가 전송되는 채널과 연결된 포트를 나타내는 {{domxref("MessagePort")}} 객체의 배열입니다(공유 워커에 메세지를 보내거나, 채널 메세징에 적합합니다).

## 예시

서로 다른 [`<iframe>`](/ko-KR/docs/Web/HTML/Element/iframe)과 같은, 다른 브라우징 맥락에서 메세지를 보낸다고 가정할 때, 아래와 같이 코드를 작성하면 됩니다.

```js
const targetFrame = window.top.frames[1];
const targetOrigin = "https://example.org";
const windowMessageButton = document.querySelector("#window-message");

windowMessageButton.addEventListener("click", () => {
  targetFrame.postMessage("hello there", targetOrigin);
});
```

수신자는 [`addEventListener()`](/ko-KR/docs/Web/API/EventTarget/addEventListener)를 사용해, 아래 코드와 같이 메세지를 받을 수 있습니다.

```js
window.addEventListener("message", (event) => {
  console.log(`Received message: ${event.data}`);
});
```

다른 방법으로는 `onmessage`라는 이벤트 핸들러의 속성을 이용할 수 있습니다.

```js
window.onmessage = (event) => {
  console.log(`Received message: ${event.data}`);
};
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 연관된 이벤트들: [`messageerror`](/en-US/docs/Web/API/Window/messageerror_event).
- [`Window.postMessage()`](/en-US/docs/Web/API/Window/postMessage).
