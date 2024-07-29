---
title: WebRTC
slug: Glossary/WebRTC
---

{{GlossarySidebar}}

**WebRTC** (_Web Real-Time Communication_) é uma {{Glossary("API")}} que pode ser usado por chat de vídeo, chamadas de voz e aplicativos da Web de compartilhamento de arquivos P2P.

O WebRTC consiste principalmente destas partes:

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : Concede acesso à câmera e/ou microfone de um dispositivo e pode conectar seus sinais a uma conexão RTC.
- {{domxref("RTCPeerConnection")}}
  - : Uma interface para configurar chat de vídeo ou chamadas de voz.
- {{domxref("RTCDataChannel")}}
  - : Fornece um método para configurar um caminho de dados {{Glossary("P2P", "peer-to-peer")}} entre navegadores.

## Veja também

- [WebRTC](https://pt.wikipedia.org/wiki/WebRTC) na Wikipedia
- [WebRTC API na MDN](/pt-BR/docs/Web/API/WebRTC_API)
- [Suporte do navegador para WebRTC](https://caniuse.com/rtcpeerconnection)
