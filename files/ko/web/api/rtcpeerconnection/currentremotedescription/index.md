---
title: RTCPeerConnection.currentRemoteDescription
slug: Web/API/RTCPeerConnection/currentRemoteDescription
---

{{APIRef("WebRTC")}}

읽기 속성인 `RTCPeerConnection.currentRemoteDescription`은 마지막 {{domxref("RTCPeerConnection")}} 이후 가장 최근에 원격 유저와의 네고시에이션 및 연결을 성공적으로 마친 연결의 원격 엔드 포인트를 알려주는 {{domxref("RTCSessionDescription")}} 객체를 반환합니다. 추가적으로 이 속성은 description에 의해 표현되는 마지막 offer 및 answer가 처음 시작되면 ICE 에이전트에 의해 생성이 되었을 수도 있는 모든 ICE candidate들의 리스트를 포함합니다.

`currentRemoteDescription`를 바꾸기 위해서는, {{domxref("RTCPeerConnection.setRemoteDescription()")}}를 호출해서 이 값이 설정되도록 만들어주는 연속된 이벤트를 활성화하십시오. 왜 바꾸는 것이 바로 적용이 안되는지 및 어떻게 작동하는지 더 자세히 알고 싶다면, [Pending and current descriptions](/ko/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) 를 참조하십시오.

> **참고:** {{domxref("RTCPeerConnection.remoteDescription")}}와 다르게, 이 값은 연결의 로컬 엔드 포인트에 대한 실제 현재 상태를 보여줍니다. `remoteDescription`은 연결이 현재 어느 상태로 바뀌는지에 대한 설명도 명시 할 수 있습니다.

## Syntax

```js
sessionDescription = RTCPeerConnection.currentRemoteDescription;
```

### 반환 값

설정이 되어있다면, 연결의 원격 엔드포인트에 대한 현재 설명을 반환합니다. 설정되어있지않으면, 이 값은 `null`입니다.

## 예시

아래 예제는 `currentRemoteDescription` 를 확인하고 객체의 `type` 및 `sdp` 필드를 경고로 띄워줍니다.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.currentRemoteDescription;
if (sd) {
  alert(`Local session: type='${sd.type}'; sdp description='${sd.sdp}'`);
} else {
  alert("No local session yet.");
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.remoteDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/ko/docs/Web/API/WebRTC_API)
