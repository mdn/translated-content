---
title: RTCPeerConnection.removeTrack()
slug: Web/API/RTCPeerConnection/removeTrack
---

{{APIRef("WebRTC")}}

**`RTCPeerConnection.removeTrack()`** 메소드는 {{domxref("RTCPeerConnection.getSenders()")}}에 의해 보고된 발신자 목록에서 해당 {{domxref("RTCRtpSender")}}를 실제로 제거하지 않은채, 지정한 트랙에서 미디어 전송을 중단하도록 연결의 로컬엔드에 알려줍니다. 해당 트랙이 이미 중단되었거나, 연결의 발신자 목록에 존재하지 않으면, 이 메소드는 아무 영향이 없습니다.

연결이 이미 협상된 경우 ({{domxref("RTCPeerConnection.signalingState", "signalingState")}}가 `"stable"`로 설정된 경우), 재협상이 필요하다고 표시를 하게됩니다. 따라서, 원격 유저는 해당 협상이 발생하기 전까지 아무런 변화를 감지 할 수 없습니다. {{event("negotiationneeded")}} 이벤트가 {{domxref("RTCPeerConnection")}}에 전송되고, 로컬엔드에게 해당 협상이 반드시 발생해야 한다고 알려주게됩니다.

## Syntax

```js
pc.removeTrack(sender);
```

### 매개변수

- `mediaTrack`
  - : 연결에서 해당하는 발신자를 제거하도록 알려주는 {{domxref("RTCRtpSender")}}.

### 반환 값

`undefined`.

### 예외처리

- `InvalidStateError`
  - : 연결이 열린 상태가 아닙니다.

## 예시

아래의 예시는 연결에 비디오 트랙을 추가하고, 닫기 버튼을 감청하여 유저가 버튼을 클릭하면 해당 미디어를 제거하도록 합니다.

```js
var pc, sender;
navigator.getUserMedia({ video: true }, function (stream) {
  pc = new RTCPeerConnection();
  var track = stream.getVideoTracks()[0];
  sender = pc.addTrack(track, stream);
});

document.getElementById("closeButton").addEventListener(
  "click",
  function (event) {
    pc.removeTrack(sender);
    pc.close();
  },
  false,
);
```

## 사양서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
