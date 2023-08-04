---
title: RTCDataChannelEvent
slug: Web/API/RTCDataChannelEvent
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCDataChannelEvent()`** 생성자는 {{domxref("datachannel")}}을 나타내는 신규 {{domxref("RTCDataChannelEvent")}} 객체를 반환합니다. 이 이벤트는 두 피어 사이에서 원격 피어가 {{domxref("RTCDataChannel")}}을 개통하도록 요청되었을때, {{domxref("RTCPeerConnection")}} 에 전달됩니다.

WebRTC가 적절한 시기에 생성하고 전달해주기 때문에, `RTCDataChannelEvent`를 직접 생성하는 일은 매우 드물 것입니다. `RTCPeerConnection`에 의해 {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} 이벤트가 받아지는지를 감청하고, 해당 이벤트를 받으면 {{domxref("RTCDataChannelEvent.channel")}} 속성을 사용해서 개통된 데이터 채널에 대한 권한을 얻는 것이 일반적입니다.

## 생성자

- {{domxref("RTCDataChannelEvent.RTCDataChannelEvent()", "RTCDataChannelEvent()")}}
  - : 새로운 [`RTCDataChannelEvent`](/ko/docs/Web/API/RTCDataChannelEvent)을 생성하는 **`RTCDataChannelEvent()`** 생성자입니다.

## 속성

_[`Event`](/ko/docs/Web/API/Event)의 속성을 상속합니다._

- {{domxref("RTCDataChannelEvent.channel")}} {{readOnlyInline}}
  - : 읽기 속성인 **`RTCDataChannelEvent.channel`** 는 이벤트와 관련된 RTCDataChannel를 반환합니다.

## 메소드

이 인터페이스에는 메소드가 존재하지 않습니다. 대신, *[`Event`](/ko/docs/Web/API/Event)*의 메소드를 상속합니다.

## 예시

아래의 예제에서는 `datachannel` 이벤트 핸들러를 설정해서 데이터 채널의 참조된 정보를 저장하고, 모니터링 할 이벤트들에 대한 핸들러를 새로 설정합니다. {{domxref("RTCDataChannelEvent.channel", "channel")}} 속성은 다른 피어와의 연결을 나타내는 {{domxref("RTCDataChannel")}}을 제공합니다.

```js
pc.ondatachannel = function (event) {
  inboundDataChannel = event.channel;
  inboundDataChannel.onmessage = handleIncomingMessage;
  inboundDataChannel.onopen = handleChannelOpen;
  inboundDataChannel.onclose = handleChannelClose;
};
```

데이터 채널을 어떤 방식으로 사용하는지에 대한 더 좋은 예제는 [A simple RTCDataChannel sample](/ko/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)를 확인하십시오.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.ondatachannel")}}
- [A simple RTCDataChannel sample](/ko/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}} (the target interface for {{event("datachannel")}} events)
