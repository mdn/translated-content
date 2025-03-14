---
title: RTCSessionDescription.sdp
slug: Web/API/RTCSessionDescription/sdp
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

읽기 속성인 **`RTCSessionDescription.sdp`** 는 세션에 대해 설명해주는 {{Glossary("SDP")}}를 가지고 있는 {{domxref("DOMString")}}입니다.

## Syntax

```js
var value = sessionDescription.sdp;
sessionDescription.sdp = value;
```

### 값

아래와 같이 SDP 메세지를 포함하고 있는 {{domxref("DOMString")}}값 입니다.

```
v=0
o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
s=
c=IN IP4 host.anywhere.com
t=0 0
m=audio 49170 RTP/AVP 0
a=rtpmap:0 PCMU/8000
m=video 51372 RTP/AVP 31
a=rtpmap:31 H261/90000
m=video 53000 RTP/AVP 32
a=rtpmap:32 MPV/90000
```

## 예시

```js
// The remote description has been set previously on pc, an RTCPeerConnection

alert(pc.remoteDescription.sdp);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/API/WebRTC_API)
- The standard for using SDP in an offer/answer protocol {{rfc("3264")}}.
