---
title: SDP
slug: Glossary/SDP
l10n:
  sourceCommit: 6c2954d3490bd0f445547e1ec359684c5cb36712
---

**SDP** (<i lang="en">Session Description {{Glossary("Protocol")}}</i> en anglais) est une norme permettant de décrire des sessions multimédias. Il contient des informations telles que les types de médias, les adresses de transport, la synchronisation et les {{Glossary("codec", "codecs")}}.

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

SDP est utilisé conjointement avec des protocoles tels que {{Glossary("RTP")}} et {{Glossary("RTSP")}}. Lors de la [négociation de session](/fr/docs/Web/API/WebRTC_API/Session_lifetime) WebRTC, un pair envoie une _offre_ décrivant la connexion qu'il souhaite, et l'autre répond avec une _réponse_ décrivant ce qu'il accepte. Les deux sont des descriptions de session au format SDP, échangées par un canal de signalisation et appliquées avec {{DOMxRef("RTCPeerConnection.setLocalDescription()")}} et {{DOMxRef("RTCPeerConnection.setRemoteDescription()")}}.

## Voir aussi

- L'interface {{DOMxRef("RTCSessionDescription")}}
- {{RFC(8866, "Session Description Protocol")}}
- [Protocoles WebRTC](/fr/docs/Web/API/WebRTC_API/Protocols)
- [Session Description Protocol](https://fr.wikipedia.org/wiki/Session_Description_Protocol) sur Wikipédia
