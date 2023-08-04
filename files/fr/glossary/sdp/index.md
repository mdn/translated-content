---
title: SDP
slug: Glossary/SDP
---

**SDP** (Session Description {{glossary("Protocol")}}) est le standard décrivant une connexion {{Glossary("P2P","pair-à-pair")}}. SDP contient le {{Glossary("codec")}}, l'adresse source, et des informations temporelles pour l'audio et la vidéo.

Voici un message SDP typique :

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

SDP n'est jamais employé seul, mais des protocoles comme {{Glossary("RTP")}} et {{Glossary("RTSP")}} l'utilisent. SDP est également un composant de {{Glossary("WebRTC")}}, ce dernier se servant de SDP pour décrire une session.

## Voir aussi

### Culture générale

- [Protocoles WebRTC](/fr/docs/Web/API/WebRTC_API/Protocols)
- [SDP](https://fr.wikipedia.org/wiki/Session_Description_Protocol) sur Wikipédia
