---
title: RTCPeerConnection.ondatachannel
slug: Web/API/RTCPeerConnection/datachannel_event
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.ondatachannel`** 속성은 {{domxref("RTCPeerConnection")}}에서 발생하는 {{event("datachannel")}} 이벤트에 의해 호출되는 {{event("Event_handlers", "event handler")}}입니다. 이 속성에는 함수를 정의하게됩니다. {{domxref("RTCDataChannelEvent")}}의 한 종류인 이 이벤트는 원격 유저가 {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}}를 호출해서 연결에 {{domxref("RTCDataChannel")}}가 추가되었을 때, 전달됩니다.

이 이벤트를 수신하게되는 시점에서는 {{domxref("RTCDataChannel")}}가 아직 열리지 않았을 수 있습니다. 사용하기 전에 꼭 신규 `RTCDataChannel`에 `"open"`이벤트가 발생하는 것을 확인하십시오.

## Syntax

```js
RTCPeerConnection.ondatachannel = function;
```

### 값

이 속성에 지정하는 함수는 단일 패러미터를 입력 인자로 받습니다. `channel` 속성에 생성된 {{domxref("RTCDataChannel")}}를 제공하는 {{domxref("RTCDataChannelEvent")}} 입니다.

## 예시

```js
pc.ondatachannel = function (ev) {
  console.log("Data channel is created!");
  ev.channel.onopen = function () {
    console.log("Data channel is open and ready to be used.");
  };
};
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- The {{event("datachannel")}} event and its type, {{domxref("RTCDataChannelEvent")}}.
- {{domxref("RTCPeerConnection.createDataChannel()")}}
- [A simple RTCDataChannel sample](/ko/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
