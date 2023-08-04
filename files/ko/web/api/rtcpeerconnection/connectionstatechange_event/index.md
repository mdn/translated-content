---
title: RTCPeerConnection.onconnectionstatechange
slug: Web/API/RTCPeerConnection/connectionstatechange_event
---

{{APIRef("WebRTC")}}

**`RTCPeerConnection.onconnectionstatechange`** 속성에 {{domxref("RTCPeerConnection")}} 인스턴스에서 발생하는 {{event("connectionstatechange")}} 이벤트를 처리하기 위해 호출되는 {{event("Event_handlers", "event handler")}}를 정의하게됩니다. 이 이벤트는 연결의 상태 집합체가 변할 때마다 발생합니다. 이 상태 집합체는 연결에 의해 사용되는 각각의 네트워크 전송 상태들의 묶음입니다.

## Syntax

```js
RTCPeerConnection.onconnectionstatechange = eventHandler;
```

### 값

{{domxref("RTCPeerConnection")}}에서 {{event("connectionstatechange")}} 이벤트가 생길 때, 브라우저에 의해 호출되는 함수입니다. 이 함수는 {{domxref("Event")}} 타입의 객체인 단일 패러미터를 입력인자로 받습니다. 해당 이벤트 객체는 특별한 정보를 담고 있지는 않습니다. 새로운 상태를 확인하려면 피어 연결의 {{domxref("RTCPeerConnection.connectionState", "connectionState")}}에 해당하는 값을 살펴보십시오.

## 예시

```js
pc.onconnectionstatechange = function (event) {
  switch (pc.connectionState) {
    case "connected":
      // The connection has become fully connected
      break;
    case "disconnected":
    case "failed":
      // One or more transports has terminated unexpectedly or in an error
      break;
    case "closed":
      // The connection has been closed
      break;
  }
};
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{event("connectionstatechange")}} 이벤트와 이 이벤트의 타입인 {{domxref("Event")}}을 참조하십시오.
