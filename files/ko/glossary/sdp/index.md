---
title: SDP
slug: Glossary/SDP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**세션 기술 프로토콜 (Session Description Protocol, SDP)** 은 {{Glossary("P2P","피어 투 피어(peer-to-peer)")}} 연결을 설명하는 표준입니다. SDP에는 오디오 및 비디오의 {{Glossary("codec", "코덱")}}, 소스 주소, 타이밍 정보가 포함되어 있습니다.

아래는 일반적인 SDP 메시지입니다.

```plain
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

SDP는 단독으로 사용되지 않으며, {{Glossary("RTP")}} and {{Glossary("RTSP")}}와 같은 프로토콜에 의해 사용됩니다. SDP는 세션을 설명하는 방법으로, SDP를 사용하는 {{Glossary("WebRTC")}}의 구성요소이기도 합니다.

## 같이 보기

- [WebRTC 프로토콜](/ko/docs/Web/API/WebRTC_API/Protocols)
- 위키백과의 [세션 기술 프로토콜](https://en.wikipedia.org/wiki/Session_Description_Protocol)
