---
title: SDP
slug: Glossary/SDP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**SDP** (Session Description {{Glossary("Protocol")}}) est une norme permettant de décrire des sessions multimédias. Il contient des informations telles que les types de médias, les adresses de transport, la synchronisation et les {{Glossary("codec", "codecs")}}.

Voici un message SDP typique&nbsp;:

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

SDP est utilisé conjointement avec des protocoles tels que {{Glossary("RTP")}} et {{Glossary("RTSP")}}. Il est également utilisé par le {{Glossary("WebRTC")}} pour décrire les sessions multimédias.

## Voir aussi

- L'interface {{DOMxRef("RTCSessionDescription")}}
- {{RFC(8866, "Session Description Protocol")}}
- [Protocoles WebRTC](/fr/docs/Web/API/WebRTC_API/Protocols)
- [Session Description Protocol](https://fr.wikipedia.org/wiki/Session_Description_Protocol) sur Wikipédia
