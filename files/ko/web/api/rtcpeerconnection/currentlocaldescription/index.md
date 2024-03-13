---
title: RTCPeerConnection.currentLocalDescription
slug: Web/API/RTCPeerConnection/currentLocalDescription
---

{{APIRef("WebRTC")}}

읽기 속성인 **`RTCPeerConnection.currentLocalDescription`** 은 가장 최근에 {{domxref("RTCPeerConnection")}}가 성공적으로 네고시에이션을 마치고 원격 피어와 연결된, 연결인터페이스의 로컬 엔드를 설명하는 {{domxref("RTCSessionDescription")}} 객체를 반환합니다. 이외에도 설명에 의해 offer 혹은 answer가 처음으로 인스턴스화 되면 ICE 에이전트에 의해 이미 생성됬을수도 있는 ICE candidate 목록이 포함되어 있습니다.

`currentLocalDescription`을 바꾸기 위해서는, 이 값을 설정하도록 연쇄 이벤트를 작동시키는 {{domxref("RTCPeerConnection.setLocalDescription()")}}를 호출하십시오. 이 연쇄 이벤트가 어떻게 값을 바꾸고, 왜 즉시 값이 바뀌지 않는지에 대해 궁금하다면, [Pending and current descriptions](/ko/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions)를 살펴보십시오.

> **참고:** {{domxref("RTCPeerConnection.localDescription")}}와 다르게, `currentLocalDescription`는 연결 인터페이스의 로컬 엔드에 대한 현재 상태를 나타내는 값 입니다. `localDescription`은 연결 인터페이스가 현재 어떤 상태로 전환 중인지를 설명하는 값을 명시 할 수 있습니다.

## Syntax

```js
sessionDescription = RTCPeerConnection.currentLocalDescription;
```

### 반환 값

연결이 설정된 경우, 연결의 로컬 엔드에 대한 가장 최신 설명입니다. 성공적으로 연결이 설정이 되지 않았다면, 반환 값은 `null` 입니다.

## 예시

이 예시는 `currentLocalDescription`을 확인하고, {{domxref("RTCSessionDescription")}} 객체의 `type` 및 `sdp` 필드를 담고 있는 경고 메세지를 출력합니다.

```js
var pc = new RTCPeerConnection();
…
var sd = pc.currentLocalDescription;
if (sd) {
  alert("Local session: type='" +
        sd.type + "'; sdp description='" +
        sd.sdp + "'");
}
else {
  alert("No local session yet.");
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

> **참고:** `currentLocalDescription`와 {{domxref("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}}기능은 최근에 추가 되었습니다. 따라서, 이 기능을 지원하지 않는 브라우저에서는 {{domxref("RTCPeerConnection.localDescription", "localDescription")}}를 사용하십시오.

## 참조

- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.pendingLocalDescription")}}, {{domxref("RTCPeerConnection.localDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/ko/docs/Web/API/WebRTC_API)
