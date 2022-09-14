---
title: RTCPeerConnection.localDescription
slug: Web/API/RTCPeerConnection/localDescription
translation_of: Web/API/RTCPeerConnection/localDescription
---
{{WebRTCSidebar}}{{SeeCompatTable}}

읽기 속성인 **`RTCPeerConnection.localDescription`**는 연결의 로컬 엔드에 대한 세션을 설명하는 {{domxref("RTCSessionDescription")}}를 반환합니다. 아직 설정이 안되어있다면, **null** 입니다.

## Syntax

```js
var sessionDescription = peerConnection.localDescription;
```

기본적으로 반환 값은 해당 속성이 `null`이 아닐 때에만 {{domxref("RTCPeerConnection.pendingLocalDescription")}}의 값입니다. 그렇지 않은 경우에는 {{domxref("RTCPeerConnection.currentLocalDescription")}}의 값이 반환됩니다. 이 알고리즘 및 사용하는 이유에 대한 자세한 설명은 {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Connectivity", "Pending and current descriptions")}}를 참조하십시오.

## 예시

아래의 예시에서는 `localDescription`를 확인하고, {{domxref("RTCSessionDescription")}} 객체의 타입과 sdp필드를 담고있는 경고를 띄웁니다.

```js
var pc = new RTCPeerConnection();
…
var sd = pc.localDescription;
if (sd) {
  alert("Local session: type='" +
        sd.type + "'; sdp description='" +
        sd.sdp + "'");
}
else {
  alert("No local session yet.");
}
```

## 사양서

| 사양서                                                                                                                                               | 상태                             | 코멘트                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------- |
| {{ SpecName('WebRTC 1.0', '#widl-RTCPeerConnection-localDescription', 'RTCPeerConnection.localDescription') }} | {{ Spec2('WebRTC 1.0') }} | Initial specification. |

## 브라우저 호환성

{{Compat}}

## 참조

- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.pendingLocalDescription")}}, {{domxref("RTCPeerConnection.currentLocalDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
