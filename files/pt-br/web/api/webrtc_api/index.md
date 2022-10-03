---
title: WebRTC API
slug: Web/API/WebRTC_API
tags:
  - API
  - Audio
  - Landing
  - Media
  - NeedsTranslation
  - Networking
  - TopicStub
  - Video
  - WebRTC
  - WebRTC API
  - streaming
translation_of: Web/API/WebRTC_API
---
{{APIRef("WebRTC")}}

**WebRTC** (Web Real-Time Communications) é uma tecnologia que permite aplicativos e sites da Web a capturarem e opcionalmente transmitirem mídia de áudio e/ou vídeo, assim como trocar informação arbitrária entre navegadores sem a necessidade de um intermediador. O conjunto de padrões que abrangem WebRTC possibilita o compartilhamento de informação e a realização de teleconferência peer-to-peer, dispensando a instalação de _plug-ins_ ou quaisquer softwares de terceiros.

WebRTC consiste em diversas APIs e protocolos interrelacionados que trabalham juntos. A documentação que você encontrará aqui o ajudará a entender os fundamentos de WebRTC, como configurar e usar, tanto informação, quanto conexões de mídia e mais.

## WebRTC conceitos e uso

WebRTC serve à diversas propostas, e sobrepõe-se substancialmente com a API de Captura e Transmissão. Juntas, provém capacidades poderosas de multimídia para a Web, incluíndo suporte para conferência em áudio e vídeo, troca de arquivos, administração de identidade, e lidando com sistemas telefônicos legados enviando sinais {{Glossary("DTMF")}}.

Conexões entre dois _peers_ são criadas usando—e representadas por—uma interface {{DOMxRef("RTCPeerConnection")}}. Uma vez que a conexão tenha sido estabilizada e iniciada, media streams ({{DOMxRef("MediaStream")}}s) (transmissões de mídia) e/ou data channels ({{DOMxRef("RTCDataChannel")}}s) (canais de dados) podem ser adicionados à conexão.

Dados de mídia podem consistir em qualquer número de _tracks_(faixas) de dados de mídia; _tracks_, que são representados por objetos baseados na interface {{DOMxRef("MediaStreamTrack")}} , que podem conter um número dentre tipos de dados de mídia, incluíndo áudio, vídeo e texto (como legendas ou até mesmo nomes de capítulos). A maioria das transmissões consiste de ao menos uma faixa de áudio e comumente também uma faixa de vídeo, e podem ser usadas para enviar e receber ambas as mídias ao vivo ou dados salvos de mídia (como um filme transmitido).

Você também pode usar a conexão entre dois _peers_ para trocar dados arbitrários binários usando a interface {{DOMxRef("RTCDataChannel")}}. Isto pode ser usado para informação de _back-channel_ (canal de volta), troca de _metadata_, pacotes de _status_ de games, transferência de arquivos, ou até mesmo como um canal primário para transferir dados.

_**são necessários mais detalhes e links e tutoriais relevantes**_

## WebRTC interfaces

Porque WebRTC provê interfaces que trabalham em conjunto para realizar uma variedade de tarefas, nós dividimos as interfaces na listagem abaixo por categoria. Por favor, atente-se a sidebar para uma listagem em ordem alfabética.

### Conexão, configuração e gerenciamento

Estas interfaces são usadas para configurar, abrir e gerenciar conexões WebRTC.

- {{domxref("RTCPeerConnection")}}
  - : Representa a conexão WebRTC entre o computador local e um peer remoto. É usado para lidar com um streaming eficiente de dados entre os dois peers.
- {{domxref("RTCDataChannel")}}
  - : Representa um canal de dados bidirecional entre dois peers de uma conexão
- {{domxref("RTCDataChannelEvent")}}
  - : Represents events that occur while attaching a {{domxref("RTCDataChannel")}} to a {{domxref("RTCPeerConnection")}}. The only event sent with this interface is {{event("datachannel")}}.
- {{domxref("RTCSessionDescription")}}
  - : Represents the parameters of a session. Each `RTCSessionDescription` consists of a description [`type`](/pt-BR/docs/Web/API/RTCSessionDescription/type) indicating which part of the offer/answer negotiation process it describes and of the [SDP](/pt-BR/docs/Glossary/SDP) descriptor of the session.
- {{domxref("RTCStatsReport")}}
  - : Provides information detailing statistics for a connection or for an individual track on the connection; the report can be obtained by calling {{domxref("RTCPeerConnection.getStats()")}}.
- {{domxref("RTCIceCandidate")}}
  - : Represents a candidate internet connectivity establishment (ICE) server for establishing an {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCIceTransport")}}
  - : Represents information about an internet connectivity establishment (ICE) transport.
- {{domxref("RTCPeerConnectionIceEvent")}}
  - : Represents events that occurs in relation to ICE candidates with the target, usually an {{domxref("RTCPeerConnection")}}. Only one event is of this type: {{event("icecandidate")}}.
- {{domxref("RTCRtpSender")}}
  - : Manages the encoding and transmission of data for a {{domxref("MediaStreamTrack")}} on an {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCRtpReceiver")}}
  - : Manages the reception and decoding of data for a {{domxref("MediaStreamTrack")}} on an {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCTrackEvent")}}
  - : Indicates that a new incoming {{domxref("MediaStreamTrack")}} was created and an associated {{domxref("RTCRtpReceiver")}} object was added to the {{domxref("RTCPeerConnection")}} object.

### Identity and security

The WebRTC API includes a number of interfaces to manage security and identity.

- {{domxref("RTCIdentityProvider")}}
  - : Enables a user agent is able to request that an identity assertion be generated or validated.
- {{domxref("RTCIdentityAssertion")}}
  - : Represents the identity of the a remote peer of the current connection. If no peer has yet been set and verified this interface returns `null`. Once set it can't be changed.
- {{domxref("RTCIdentityProviderRegistrar")}}
  - : Registers an identity provider (idP).
- {{domxref("RTCIdentityEvent")}}
  - : Represents an identity assertion generated by an identity provider (idP). This is usually for an {{domxref("RTCPeerConnection")}}. The only event sent with this type is {{event("identityresult")}}.
- {{domxref("RTCIdentityErrorEvent")}}
  - : Represents an error associated with the identity provider (idP). This is usually for an {{domxref("RTCPeerConnection")}}. Two events are sent with this type: {{event("idpassertionerror")}} and {{event("idpvalidationerror")}}.
- {{domxref("RTCCertificate")}}
  - : Represents a certificate that an {{domxref("RTCPeerConnection")}} uses to authenticate.

### Telephony

These interfaces are related to interactivity with public-switched telephone networks (PTSNs).

- {{domxref("RTCDTMFSender")}}
  - : Manages the encoding and transmission of dual-tone multi-frequency (DTMF) signaling for an {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCDTMFToneChangeEvent")}}
  - : Indicates an occurrence of a of dual-tone multi-frequency (DTMF). This event does not bubble (except where otherwise stated) and is not cancelable (except where otherwise stated).

## Guides

- [Introduction to WebRTC protocols](/pt-BR/docs/Web/API/WebRTC_API/Protocols)
  - : This article introduces the protocols on top of which the WebRTC API is built.
- [WebRTC connectivity](/pt-BR/docs/Web/API/WebRTC_API/Connectivity)
  - : A guide to how WebRTC connections work and how the various protocols and interfaces can be used together to build powerful communication apps.
- [Lifetime of a WebRTC session](/pt-BR/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC lets you build peer-to-peer communication of arbitrary data, audio, or video—or any combination thereof—into a browser application. In this article, we'll look at the lifetime of a WebRTC session, from establishing the connection all the way through closing the connection when it's no longer needed.
- [Signaling and two-way video calling](/pt-BR/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : A tutorial and example which turbs a WebSocket-based chat system created for a previous example and adds support for opening video calls among participants. The chat server's WebSocket connection is used for WebRTC signaling.
- [Using WebRTC data channels](/pt-BR/docs/Web/API/WebRTC_API/Using_data_channels)
  - : This guide covers how you can use a peer connection and an associated {{domxref("RTCDataChannel")}} to exchange arbitrary data between two peers.
- [Using DTMF with WebRTC](/pt-BR/docs/Web/API/WebRTC_API/Using_DTMF)
  - : WebRTC's support for interacting with gateways that link to old-school telephone systems includes support for sending DTMF tones using the {{domxref("RTCDTMFSender")}} interface. This guide shows how to do so.

## Tutorials

- [Improving compatibility using WebRTC adapter.js](/pt-BR/docs/Web/API/WebRTC_API/adapter.js)
  - : The WebRTC organization [provides on GitHub the WebRTC adapter](https://github.com/webrtc/adapter/) to work around compatibility issues in different browsers' WebRTC implementations. The adapter is a JavaScript shim which lets your code to be written to the specification so that it will "just work" in all browsers with WebRTC support.
- [Taking still photos with WebRTC](/pt-BR/docs/Web/API/WebRTC_API/Taking_still_photos)
  - : This article shows how to use WebRTC to access the camera on a computer or mobile phone with WebRTC support and take a photo with it.
- [A simple RTCDataChannel sample](/pt-BR/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : The {{domxref("RTCDataChannel")}} interface is a feature which lets you open a channel between two peers over which you may send and receive arbitrary data. The API is intentionally similar to the [WebSocket API](/pt-BR/docs/Web/API/WebSocket_API), so that the same programming model can be used for each.

## Resources

### Protocols

#### WebRTC-proper protocols

- [Application Layer Protocol Negotiation for Web Real-Time Communications](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-alpn/)
- [WebRTC Audio Codec and Processing Requirements](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-audio/)
- [RTCWeb Data Channels](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-channel/)
- [RTCWeb Data Channel Protocol](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-protocol/)
- [Web Real-Time Communication (WebRTC): Media Transport and Use of RTP](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-rtp-usage/)
- [WebRTC Security Architecture](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-security-arch/)
- [Transports for RTCWEB](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-transports/)

#### Related supporting protocols

- [Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal for Offer/Answer Protocol](https://tools.ietf.org/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://tools.ietf.org/html/rfc5389)
- [URI Scheme for the Session Traversal Utilities for NAT (STUN) Protocol](https://tools.ietf.org/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://tools.ietf.org/html/rfc7065)
- [An Offer/Answer Model with Session Description Protocol (SDP)](https://tools.ietf.org/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Extension for Third Party Authorization](https://datatracker.ietf.org/doc/draft-ietf-tram-turn-third-party-authz/)

## Specifications

| Specification                                            | Status                                               | Comment                                                                     |
| -------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------- |
| {{SpecName('WebRTC 1.0')}}                     | {{Spec2('WebRTC 1.0')}}                     | The initial definition of the API of WebRTC.                                |
| {{SpecName('Media Capture')}}                 | {{Spec2('Media Capture')}}                 | The initial definition of the object conveying the stream of media content. |
| {{SpecName('Media Capture DOM Elements')}} | {{Spec2('Media Capture DOM Elements')}} | The initial definition on how to obtain stream of content from DOM Elements |

In additions to these specifications defining the API needed to use WebRTC, there are several protocols, listed under [resources](#Protocols).

## See also

- {{domxref("MediaDevices")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MediaStreamConstraints")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MessageEvent")}}
- {{domxref("MediaStream")}}
- [Firefox multistream and renegotiation for Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering Through the WebRTC Fog with SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
