---
title: WebRTC API
slug: Web/API/WebRTC_API
---

{{APIRef("WebRTC")}}

**WebRTC** (Web Real-Time Communications) é uma tecnologia que permite aplicativos e sites da Web a capturarem e opcionalmente transmitirem mídia de áudio e/ou vídeo, assim como trocar informação arbitrária entre navegadores sem a necessidade de um intermediador. O conjunto de padrões que abrangem WebRTC possibilita o compartilhamento de informação e a realização de teleconferência peer-to-peer, dispensando a instalação de _plug-ins_ ou quaisquer softwares de terceiros.

WebRTC consiste em diversas APIs e protocolos interrelacionados que trabalham juntos. A documentação que você encontrará aqui o ajudará a entender os fundamentos de WebRTC, como configurar e usar, tanto informação, quanto conexões de mídia e mais.

## Interoperabilidade

Como as implementações de WebRTC ainda estão evoluindo e como cada navegador tem [diferentes níveis de suporte para codecs](/en-US/docs/Web/Media/Formats/WebRTC_codecs) e recursos de WebRTC, você deve _fortemente_ considerar fazer uso da [biblioteca Adapter.js](https://github.com/webrtcHacks/adapter) fornecida pelo Google antes de começar a escrever seu código.

Adapter.js usa shims e polyfills para suavizar as diferenças entre as implementações WebRTC nos ambientes que o suportam. O Adapter.js também lida com prefixos e outras diferenças de nomenclatura para facilitar todo o processo de desenvolvimento do WebRTC, com resultados mais amplamente compatíveis. A biblioteca também está [disponível como um pacote npm](https://www.npmjs.com/package/webrtc-adapter).

Para saber mais sobre o Adapter.js, veja: [Improving compatibility using WebRTC adapter.js](/en-US/docs/Web/API/WebRTC_API/adapter.js).

## WebRTC conceitos e uso

WebRTC serve à diversas propostas; junto com a [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API), eles fornecem poder multimídia para a Web, incluindo suporte para áudio e vídeo conferência, troca de arquivos, compartilhamento de tela, gerenciamento de identidade e interface com sistemas telefônicos legados, incluindo suporte para envio de sinais {{Glossary("DTMF")}} (touch-tone dialing). As conexões entre pares podem ser feitas sem a necessidade de drivers ou plug-ins especiais e, muitas vezes, sem servidores intermediários.

As conexões entre dois pares são representadas pela interface {{DOMxRef("RTCPeerConnection")}}. Uma vez que uma conexão foi estabelecida e aberta usando `RTCPeerConnection`, _streams_ de mídia ({{DOMxRef("MediaStream")}}s) e/ou canais de dados ({{DOMxRef("RTCDataChannel")}}s) podem ser adicionados à conexão.

Dados de mídia podem consistir em qualquer número de _tracks_(faixas) de dados de mídia; _tracks_, que são representados por objetos baseados na interface {{DOMxRef("MediaStreamTrack")}} , que podem conter um número dentre tipos de dados de mídia, incluíndo áudio, vídeo e texto (como legendas ou até mesmo nomes de capítulos). A maioria das transmissões consiste de ao menos uma faixa de áudio e comumente também uma faixa de vídeo, e podem ser usadas para enviar e receber ambas as mídias ao vivo ou dados salvos de mídia (como um filme transmitido).

Você também pode usar a conexão entre dois _peers_ para trocar dados arbitrários binários usando a interface {{DOMxRef("RTCDataChannel")}}. Isto pode ser usado para informação de _back-channel_ (canal de volta), troca de _metadata_, pacotes de _status_ de games, transferência de arquivos, ou até mesmo como um canal primário para transferir dados.

_**são necessários mais detalhes e links e tutoriais relevantes**_

## WebRTC interfaces

Porque WebRTC provê interfaces que trabalham em conjunto para realizar uma variedade de tarefas, nós dividimos as interfaces na listagem abaixo por categoria. Por favor, atente-se a sidebar para uma listagem em ordem alfabética.

### Conexão, configuração e gerenciamento

Essas interfaces, dicionários e tipos são usados para configurar, abrir e gerenciar conexões WebRTC. Estão incluídas as interfaces que representam conexões de mídia de mesmo nível, canais de dados e interfaces usadas ao trocar informações sobre as capacidades de cada par para selecionar a melhor configuração possível para uma conexão de mídia bidirecional.

#### Interfaces

- {{DOMxRef("RTCPeerConnection")}}
  - : Representa uma conexão WebRTC entre o computador local e um ponto remoto. Ele é usado para lidar com o streaming eficiente de dados entre os dois pares.
- {{DOMxRef("RTCDataChannel")}}
  - : Representa um canal de dados bidirecional entre dois pares de uma conexão.
- {{DOMxRef("RTCDataChannelEvent")}}
  - : Representa eventos que ocorrem ao anexar um {{DOMxRef("RTCDataChannel")}} a um {{DOMxRef("RTCPeerConnection")}}. O único evento enviado com esta interface é {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}.
- {{DOMxRef("RTCSessionDescription")}}
  - : Representa os parâmetros de uma sessão. Cada `RTCSessionDescription` consiste em uma descrição {{DOMxRef("RTCSessionDescription.type", "type")}} indicando qual parte do processo de negociação de oferta/resposta ela descreve e do descritor {{Glossary("SDP")}} da sessão.
- {{DOMxRef("RTCStatsReport")}}
  - : Fornece estatísticas detalhadas de informações para uma conexão ou para uma _track_ individual na conexão; o relatório pode ser obtido chamando {{DOMxRef("RTCPeerConnection.getStats()")}}. Detalhes sobre o uso de estatísticas WebRTC podem ser encontrados em [WebRTC Statistics API](/en-US/docs/Web/API/WebRTC_Statistics_API).
- {{DOMxRef("RTCIceCandidate")}}
  - : Representa um servidor _Interactive Connectivity Establishment_ (Estabelecimento de Conectividade Interativa) candidato ({{Glossary("ICE")}}) para estabelecer um {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCIceTransport")}}
  - : Representa informações sobre um transporte {{Glossary("ICE")}}.
- {{DOMxRef("RTCPeerConnectionIceEvent")}}
  - : Representa eventos que ocorrem em relação aos candidatos ICE com o destino, geralmente um {{DOMxRef("RTCPeerConnection")}}. Apenas um evento é deste tipo: {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}.
- {{DOMxRef("RTCRtpSender")}}
  - : Gerencia a codificação e a transmissão de dados para um {{DOMxRef("MediaStreamTrack")}} em um {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCRtpReceiver")}}
  - : Gerencia a recepção e decodificação de dados para um {{DOMxRef("MediaStreamTrack")}} em um {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCTrackEvent")}}
  - : A interface usada para representar um evento {{domxref("RTCPeerConnection.track_event", "track")}}, que indica que um objeto {{DOMxRef("RTCRtpReceiver")}} foi adicionado ao {{DOMxRef("RTCPeerConnection" )}}, indicando que um novo {{DOMxRef("MediaStreamTrack")}} de entrada foi criado e adicionado ao `RTCPeerConnection`.
- {{DOMxRef("RTCSctpTransport")}}
  - : Fornece informações que descrevem um transporte de _Stream Control Transmission Protocol_ (Protocolo de Transmissão de Controle de Fluxo / **{{Glossary("SCTP")}}**) e também fornece uma maneira de acessar a segurança da _Datagram Transport Layer Security_ (Camada de Transporte de Datagrama Subjacente / **{{Glossary("DTLS") }}**) através do qual os pacotes SCTP para todos os canais de dados de uma [`RTCPeerConnection`](/en-US/docs/Web/API/RTCPeerConnection) são enviados e recebidos.

#### Dictionaries

- {{DOMxRef("RTCIceServer")}}
  - : Defines how to connect to a single {{Glossary("ICE")}} server (such as a {{Glossary("STUN")}} or {{Glossary("TURN")}} server).
- {{DOMxRef("RTCRtpContributingSource")}}
  - : Contains information about a given contributing source (CSRC) including the most recent time a packet that the source contributed was played out.

#### Events

- {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
  - : The amount of data currently buffered by the data channel—as indicated by its {{domxref("RTCDataChannel.bufferedAmount", "bufferedAmount")}} property—has decreased to be at or below the channel's minimum buffered data size, as specified by {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}}.
- {{domxref("RTCDataChannel.close_event", "close")}}
  - : The data channel has completed the closing process and is now in the `closed` state. Its underlying data transport is completely closed at this point. You can be notified _before_ closing completes by watching for the `closing` event instead.
- {{domxref("RTCDataChannel.closing_event", "closing")}}
  - : The `RTCDataChannel` has transitioned to the `closing` state, indicating that it will be closed soon. You can detect the completion of the closing process by watching for the `close` event.
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : The connection's state, which can be accessed in {{domxref("RTCPeerConnection.connectionState", "connectionState")}}, has changed.
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : A new {{domxref("RTCDataChannel")}} is available following the remote peer opening a new data channel. This event's type is {{domxref("RTCDataChannelEvent")}}.
- {{domxref("RTCDataChannel.error_event", "error")}}
  - : An {{domxref("RTCErrorEvent")}} indicating that an error occurred on the data channel.
- {{domxref("RTCDtlsTransport.error_event", "error")}}
  - : An {{domxref("RTCErrorEvent")}} indicating that an error occurred on the {{domxref("RTCDtlsTransport")}}. This error will be either `dtls-failure` or `fingerprint-failure`.
- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
  - : The {{domxref("RTCIceTransport")}}'s gathering state has changed.
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : An {{domxref("RTCPeerConnectionIceEvent")}} which is sent whenever the local device has identified a new ICE candidate which needs to be added to the local peer by calling {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}.
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : An {{domxref("RTCPeerConnectionIceErrorEvent")}} indicating that an error has occurred while gathering ICE candidates.
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : Sent to an {{domxref("RTCPeerConnection")}} when its ICE connection's state—found in the {{domxref("RTCPeerConnection.iceconnectionstate", "iceconnectionstate")}} property—changes.
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : Sent to an {{domxref("RTCPeerConnection")}} when its ICE gathering state—found in the {{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}} property—changes.
- {{domxref("RTCDataChannel.message_event", "message")}}
  - : A message has been received on the data channel. The event is of type {{domxref("MessageEvent")}}.
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : Informs the `RTCPeerConnection` that it needs to perform session negotiation by calling {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} followed by {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}.
- {{domxref("RTCDataChannel.open_event", "open")}}
  - : The underlying data transport for the `RTCDataChannel` has been successfully opened or re-opened.
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}
  - : The currently-selected pair of ICE candidates has changed for the `RTCIceTransport` on which the event is fired.
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : The `track` event, of type {{domxref("RTCTrackevent")}} is sent to an {{domxref("RTCPeerConnection")}} when a new track is added to the connection following the successful negotiation of the media's streaming.
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : Sent to the peer connection when its {{domxref("RTCPeerConnection.signalingstate", "signalingstate")}} has changed. This happens as a result of a call to either {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} or {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}.
- {{domxref("RTCDtlsTransport.statechange_event", "statechange")}}
  - : The state of the `RTCDtlsTransport` has changed.
- {{domxref("RTCIceTransport.statechange_event", "statechange")}}
  - : The state of the `RTCIceTransport` has changed.
- {{domxref("RTCSctpTransport.statechange_event", "statechange")}}
  - : The state of the `RTCSctpTransport` has changed.

#### Types

- {{DOMxRef("RTCSctpTransport.state")}}
  - : Indicates the state of an {{DOMxRef("RTCSctpTransport")}} instance.

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
