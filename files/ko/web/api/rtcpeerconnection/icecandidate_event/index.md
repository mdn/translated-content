---
title: RTCPeerConnection.onicecandidate
slug: Web/API/RTCPeerConnection/icecandidate_event
---

{{APIRef("WebRTC")}}

`RTCPeerConnection` 속성의 **{{domxref("RTCPeerConnection.onicecandidate", "onicecandidate")}}** 는 {{domxref("RTCPeerConnection")}} 인스턴스에서 {{event("icecandidate")}} 이벤트 발생시에 호출 하려는 함수를 지정합니다. 이 이벤트는 로컬 {{Glossary("ICE")}} 에이전트가 signaling 서버를 통해 원격 피어에게 메세지를 전달 할 필요가 있을때 마다 발생합니다. 그리고 ICE 에이전트가 signaling에 사용되는 기술에 대한 구체사항을 모르더라도 원격 피어와의 네고시에이션을 수행하도록 도와줍니다. 어떤 메세징 기술을 선택하던간에, 이 메소드를 사용해서 원격 피어에 ICE candidate를 전달하는 과정을 간단하게 구현 할 수 있습니다.

## Syntax

```js
RTCPeerConnection.onicecandidate = eventHandler;
```

### 값

`onicecandidate` 속성은 {{event("icecandidate")}} 이벤트를 나타내는 {{domxref("RTCPeerConnectionIceEvent")}} 객체를 입력 값으로 받는 함수로 설정되어야합니다. 여기에 설정되는 함수는 ICE candidate를 signaling 서버를 통해 원격 피어에게 전달해야합니다. 이때, ICE candidate의 {{Glossary("SDP")}}는 이벤트의 {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} 속성에서 확인 할 수 있습니다. 만약 이벤트의 `candidate` 속성이 `null` 로 지정되어있다면, ICE 수집과정이 완료됩니다. 이 메세지는 원격 피어에 전달되지 않아야합니다. 이때, 연결의 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} 또한 `complete`로 바뀌게 됩니다. ICE 수집 상태를 명시적으로 감시할 필요는 없습니다. 다만, signaling의 종료를 감지해야 한다면, ICE 네고시에이션이 complete 상태로 변한것을 알려주는 {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} 이벤트를 감시하면 됩니다.

## 예시

아래는 [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling) 문서의 코드를 기반으로 원격 피어에게 ICE candidate를 전달하는 {{event("icecandidate")}} 이벤트에 대한 핸들러를 설정합니다.

```js
pc.onicecandidate = function (event) {
  if (event.candidate) {
    // event.candidate가 존재하면 원격 유저에게 candidate를 전달합니다.
  } else {
    // 모든 ICE candidate가 원격 유저에게 전달된 조건에서 실행됩니다.
    // candidate = null
  }
};
```

위에서 알 수 있듯이, 이벤트의 {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} 속성이 `null`이면 네고시에이션의 종료가 감지됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{event("icecandidate")}} 이벤트 및 이벤트의 타입인 {{domxref("RTCPeerConnectionIceEvent")}}.
