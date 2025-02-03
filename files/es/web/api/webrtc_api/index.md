---
title: API de WebRTC
slug: Web/API/WebRTC_API
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (_Web real-time communications_ o comunicaciones web en tiempo real) es una tecnología que permite a aplicaciones y sitios web capturar y opcionalmente retransmitir audio/vídeo, así como intercambiar datos arbitrarios entre navegadores sin necesidad de un intermediario. El conjunto de estándares que comprende WebRTC hace posible compartir datos y realizar teleconferencias de igual-a-igual (_peer-to-peer_), sin requerir que el usuario instale complementos (_plug-ins_) o cualquier otro software de terceros.

WebRTC consta de varias API y protocolos interrelacionados que trabajan juntos para lograr esto. La documentación que encontrará aquí le ayudará a entender los fundamentos de WebRTC, cómo configurarlo y usar tanto datos como conexiones de medios, etc.

## Referencia

- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCSessionDescription")}}
- {{domxref("RTCIceCandidate")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("MessageEvent")}}
- {{domxref("MediaStream")}}
- {{domxref("RTCStatsReport")}}
- {{domxref("RTCIdentityEvent")}}
- {{domxref("RTCIdentityErrorEvent")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaDevices")}}

## Guías

- [Visión general de la arquitectura de WebRTC](/es/docs/Web/API/WebRTC_API/Protocols)
  - : Debajo de las API que los desarrolladores usan para crear y usar conexiones WebRTC se encuentran varios protocolos de red y estándares de conectividad. Esta breve descripción cubre estos estándares.
- [Lo esencial de WebRTC](/es/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Este artículo le muestra la creación de una aplicación RTC a través del navegador. Al final, debe tener un canal de datos punto a punto y un canal de medios en funcionamiento.
- [Protocolos de WebRTC](/es/docs/Web/API/WebRTC_API/Protocols)
  - : Este artículo presenta los protocolos sobre los cuales se construye la API WebRTC.
- [Conectividad de WebRTC](/es/docs/Web/API/WebRTC_API/Connectivity)
  - : Este artículo describe cómo los diversos protocolos relacionados con WebRTC interactúan entre sí para crear una conexión y transferir datos y / o medios entre pares.
- [Nociones sobre la API WebRTC](#WebRTC_concepts_and_usage)
  - : WebRTC consta de varias API y protocolos interrelacionados que trabajan juntos para admitir el intercambio de datos y medios entre dos o más pares. Este artículo proporciona una breve descripción de cada una de estas API y para qué sirve.
- [Duración de una sesión de WebRTC](/es/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC le permite construir una comunicación punto a punto de datos arbitrarios, audio o video, o cualquier combinación de los mismos, en una aplicación de navegador. En este artículo, veremos la duración de una sesión de WebRTC, desde establecer la conexión hasta cerrarla cuando ya no sea necesaria.

## Tutoriales

- [Improving compatibility using WebRTC adapter.js](#interoperability)
  - : The WebRTC organization [provides on GitHub the WebRTC adapter](https://github.com/webrtc/adapter/) to work around compatibility issues in different browsers' WebRTC implementations. The adapter is a JavaScript shim which lets your code to be written to the specification so that it will "just work" in all browsers with WebRTC support.
- [Taking still photos with WebRTC](/es/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
  - : This article shows how to use WebRTC to access the camera on a computer or mobile phone with WebRTC support and take a photo with it.
- [A simple RTCDataChannel sample](/es/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : The {{domxref("RTCDataChannel")}} interface is a feature which lets you open a channel between two peers over which you may send and receive arbitrary data. The API is intentionally similar to the [WebSocket API](/es/docs/Web/API/WebSockets_API), so that the same programming model can be used for each.

## Recursos

### Protocolos

#### WebRTC-proper protocols

- [Application Layer Protocol Negotiation for Web Real-Time Communications](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-alpn/)
- [WebRTC Audio Codec and Processing Requirements](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-audio/)
- [RTCWeb Data Channels](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-channel/)
- [RTCWeb Data Channel Protocol](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-protocol/)
- [Web Real-Time Communication (WebRTC): Media Transport and Use of RTP](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-rtp-usage/)
- [WebRTC Security Architecture](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-security-arch/)
- [Transports for RTCWEB](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-transports/)

#### Related supporting protocols

- [Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal for Offer/Answer Protocol](https://tools.ietf.org/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://tools.ietf.org/html/rfc5389)
- [URI Scheme for the Session Traversal Utilities for NAT (STUN) Protocol](https://tools.ietf.org/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://tools.ietf.org/html/rfc7065)
- [An Offer/Answer Model with Session Description Protocol (SDP)](https://tools.ietf.org/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Extension for Third Party Authorization](https://datatracker.ietf.org/doc/draft-ietf-tram-turn-third-party-authz/)

## Especificaciones

{{Specifications}}

## Ver también

- [Firefox multistream and renegotiation for Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering Through the WebRTC Fog with SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
