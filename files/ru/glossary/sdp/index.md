---
title: SDP
slug: Glossary/SDP
---

**SDP** (Session Description {{glossary("Protocol")}} - протокол описания сессии) - это текстовый формат для описания {{Glossary("P2P","peer-to-peer")}}-соединения. SDP содержит описание {{Glossary("кодеков")}}, адрес источника и информацию для синхронизации аудио и видео.

Here is a typical SDP message:

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

SDP is never used alone, but by protocols like {{Glossary("RTP")}} and {{Glossary("RTSP")}}. SDP is also as component of {{Glossary("WebRTC")}}, which uses SDP as a way of describing a session.

## Learn more

### General knowledge

- [WebRTC protocols](/ru/docs/Web/API/WebRTC_API/Architecture/Protocols)
