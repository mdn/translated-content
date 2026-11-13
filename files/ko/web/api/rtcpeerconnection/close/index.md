---
title: RTCPeerConnection.close()
slug: Web/API/RTCPeerConnection/close
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.close()`** 메소드로 피어 연결을 종료합니다.

## Syntax

```js
RTCPeerConnection.close();
```

_이 메소드는 입력 패러미터가 없으며, 반환 값도 없습니다._

이 메소드를 호출하게되면, 모든 진행 중인 ICE 프로세싱 및 활성화된 스트림을 종료하고, `RTCPeerConnection`의 ICE 에이전트를 종료합니다. 이 방법으로 ICE 에이전트에 의해 사용되는 리소스들 (TURN 허가 포함) 을 해제시킵니다. 모든 {{domxref("RTCRtpSender")}} 객체들은 이 메소드가 반환되면 정지됩니다. (아직 종료 중인 과정에 있을 수도 있습니다만, 사실상 정지됩니다.)

이 메소드가 반환되면, {{domxref("RTCPeerConnection.signalingState")}}에 의해 반환된 signaling 상태가 `closed`로 됩니다.

같은 원격 유저와의 새로운 연결 생성을 시도하기전에 이전에 존재하던 {{domxref("RTCPeerConnection")}}의 모든 참조 값들을 `delete`하십시오. 삭제되지 않은 참조 값들이 브라우저에서 오류를 초래 할 수 있습니다.

## 예시

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel");

dc.onmessage = function (event) {
  console.log("received: " + event.data);
  pc.close(); // 첫 메세지를 받으면, 연결을 종료
};

dc.onopen = function () {
  console.log("datachannel open");
};

dc.onclose = function () {
  console.log("datachannel close");
};
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.signalingState")}}
