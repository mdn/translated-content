---
title: SDP
slug: Glossary/SDP
---

**SDP** (Session Description {{glossary("Protocol")}}) é o padrão que descreve uma conexão {{Glossary("P2P","ponto a ponto")}}. SDP contém o {{Glossary("codec")}}, o endereço de origem e as informações de tempo de áudio e vídeo.

Aqui está uma mensagem SDP típica:

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

O SDP nunca é usado sozinho, mas por protocolos como {{Glossary("RTP")}} e {{Glossary("RTSP")}}. O SDP também é um componente do {{Glossary("WebRTC")}}, que usa o SDP como forma de descrever uma sessão.

## Leia mais

### Conhecimentos gerais

- [Protocolos WebRTC](/pt-BR/docs/Web/API/WebRTC_API/Architecture/Protocols)
- [Session Description Protocol](https://pt.wikipedia.org/wiki/Session_description_protocol) no Wikipedia
