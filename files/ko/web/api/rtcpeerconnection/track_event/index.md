---
title: RTCPeerConnection.ontrack
slug: Web/API/RTCPeerConnection/track_event
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 속성인 **`ontrack`**은 {{domxref("RTCPeerConnection")}}에 트랙이 등록됨을 알려주는 {{event("track")}}가 발생하면 호출되는 함수를 지정하는 {{event("Event_handlers", "event handler")}}입니다.

이 함수는 {{domxref("RTCTrackEvent")}} 타입의 이벤트 객체를 입력 인자로 받습니다. 해당 이벤트는 신규로 받아지는 {{domxref("MediaStreamTrack")}}가 생성되고 연결의 리시버 세트에 추가된 {{domxref("RTCRtpReceiver")}}객체와 연관되면 전송됩니다.

## Syntax

```js
RTCPeerConnection.ontrack = eventHandler;
```

### 값

`ontrack`을 함수로 지정해서 신규 트랙에 대해 설명하고 어떻게 사용 될지를 알려주는 {{domxref("RTCTrackEvent")}} 객체를 입력 인자로 받도록 하십시오. 이 정보에는 신규 트랙을 나타내는 {{domxref("MediaStreamTrack")}} 객체, {{domxref("RTCRtpReceiver")}}와{{domxref("RTCRtpTransceiver")}}, 그리고 트랙이 어느 스트림에 해당하는지를 알려주는 {{domxref("MediaStream")}}의 리스트 객체를 포함합니다.

## 예시

아래의 예시는 [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling) 문서에 나온 코드의 일부입니다. 이 코드는 들어오는 트랙을 {{HTMLElement("video")}}에 연결해서 해당 비디오를 보여줄 수 있도록 합니다.

```js
pc.ontrack = function (event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
};
```

첫 줄에 나온 `ontrack` 이벤트 핸들러는 들어오는 트랙의 첫 스트림을 가져다가 [`srcObject`](/ko/docs/Web/HTML/Element/video#srcObject) 속성에 지정합니다. 이렇게 함으로써 비디오의 스트림을 해당 요소에 연결하고, 유저에게 보여 줄 수 있게됩니다. 두 번째줄에서는 "통화 종료" 버튼을 활성화하여 유저가 통화를 종료 할 수 있도록 해줍니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- The {{event("track")}} event and its type, {{domxref("RTCTrackEvent")}}.
