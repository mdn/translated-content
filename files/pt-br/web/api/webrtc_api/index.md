---
title: WebRTC API
slug: Web/API/WebRTC_API
---
{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communications) é uma tecnologia que permite aplicativos e sites da Web a capturarem e opcionalmente transmitirem mídia de áudio e/ou vídeo, assim como trocar informação arbitrária entre navegadores sem a necessidade de um intermediador. O conjunto de padrões que abrangem WebRTC possibilita o compartilhamento de informação e a realização de teleconferência peer-to-peer, dispensando a instalação de _plug-ins_ ou quaisquer softwares de terceiros.

WebRTC consiste em diversas APIs e protocolos interrelacionados que trabalham juntos. A documentação que você encontrará aqui o ajudará a entender os fundamentos de WebRTC, como configurar e usar, tanto informação, quanto conexões de mídia e mais.

## Interoperabilidade

Como as implementações de WebRTC ainda estão evoluindo e como cada navegador tem [diferentes níveis de suporte para codecs](/en-US/docs/Web/Media/Formats/WebRTC_codecs) e recursos de WebRTC, você deve _fortemente_ considerar fazer uso da [biblioteca Adapter.js](https://github.com/webrtcHacks/adapter) fornecida pelo Google antes de começar a escrever seu código.

Adapter.js usa shims e polyfills para suavizar as diferenças entre as implementações WebRTC nos ambientes que o suportam. O Adapter.js também lida com prefixos e outras diferenças de nomenclatura para facilitar todo o processo de desenvolvimento do WebRTC, com resultados mais amplamente compatíveis. A biblioteca também está [disponível como um pacote npm](https://www.npmjs.com/package/webrtc-adapter).

Para saber mais sobre o Adapter.js, veja: [Improving compatibility using WebRTC adapter.js](/en-US/docs/Web/API/WebRTC_API/adapter.js).

## Conceitos e uso

WebRTC serve à diversas propostas; junto com a [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API), eles fornecem poder multimídia para a Web, incluindo suporte para áudio e vídeo conferência, troca de arquivos, compartilhamento de tela, gerenciamento de identidade e interface com sistemas telefônicos legados, incluindo suporte para envio de sinais {{Glossary("DTMF")}} (touch-tone dialing). As conexões entre pares podem ser feitas sem a necessidade de drivers ou plug-ins especiais e, muitas vezes, sem servidores intermediários.

As conexões entre dois pares são representadas pela interface {{DOMxRef("RTCPeerConnection")}}. Uma vez que uma conexão foi estabelecida e aberta usando `RTCPeerConnection`, _streams_ de mídia ({{DOMxRef("MediaStream")}}s) e/ou canais de dados ({{DOMxRef("RTCDataChannel")}}s) podem ser adicionados à conexão.

Dados de mídia podem consistir em qualquer número de _tracks_(faixas) de dados de mídia; _tracks_, que são representados por objetos baseados na interface {{DOMxRef("MediaStreamTrack")}} , que podem conter um número dentre tipos de dados de mídia, incluíndo áudio, vídeo e texto (como legendas ou até mesmo nomes de capítulos). A maioria das transmissões consiste de ao menos uma faixa de áudio e comumente também uma faixa de vídeo, e podem ser usadas para enviar e receber ambas as mídias ao vivo ou dados salvos de mídia (como um filme transmitido).

Você também pode usar a conexão entre dois _peers_ para trocar dados arbitrários binários usando a interface {{DOMxRef("RTCDataChannel")}}. Isto pode ser usado para informação de _back-channel_ (canal de volta), troca de _metadata_, pacotes de _status_ de games, transferência de arquivos, ou até mesmo como um canal primário para transferir dados.

_**são necessários mais detalhes e links para tutoriais relevantes**_

## Referência WebRTC

WebRTC provê interfaces que trabalham em conjunto para realizar uma variedade de tarefas, nós dividimos as interfaces na listagem abaixo por categoria. Por favor, atente-se a sidebar para uma listagem em ordem alfabética.

### Configuração e gerenciamento e conexão

Essas interfaces, dicionários e tipos são usados para configurar, abrir e gerenciar conexões WebRTC. Estão inclusas as interfaces que representam conexões de mídia de mesmo nível, canais de dados e interfaces usadas ao trocar informações sobre as capacidades de cada par para selecionar a melhor configuração possível para uma conexão de mídia bidirecional.

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
  - : Fornece informações que descrevem um transporte de _Stream Control Transmission Protocol ou **{{Glossary("SCTP")}}**_ (Protocolo de Transmissão de Controle de Fluxo) e também fornece uma maneira de acessar a segurança da _Datagram Transport Layer Security ou **{{Glossary("DTLS") }}**_ (Camada de Transporte de Datagrama Subjacente) através do qual os pacotes SCTP para todos os canais de dados de uma [`RTCPeerConnection`](/en-US/docs/Web/API/RTCPeerConnection) são enviados e recebidos.

#### Dicionários

- {{DOMxRef("RTCIceServer")}}
  - : Define como se conectar a um único servidor {{Glossary("ICE")}} (como um servidor {{Glossary("STUN")}} ou {{Glossary("TURN")}}).
- {{DOMxRef("RTCRtpContributingSource")}}
  - : Contém informações sobre uma determinada _fonte de contribuição (CSRC)_, incluindo a hora mais recente em que um pacote para o qual a fonte contribuiu foi reproduzido.

#### Eventos

- {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
  - : A quantidade de dados atualmente armazenados em buffer pelo canal de dados — conforme indicado por sua propriedade {{domxref("RTCDataChannel.bufferedAmount", "bufferedAmount")}} — diminuiu para ficar igual ou inferior ao tamanho mínimo de dados em buffer do canal, conforme especificado por {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}}.
- {{domxref("RTCDataChannel.close_event", "close")}}
  - : O canal de dados concluiu o processo de fechamento e agora está no estado 'fechado'. Seu transporte de dados subjacente está completamente fechado neste ponto. Você pode ser notificado _antes_ do fechamento, observando o evento `closing`.
- {{domxref("RTCDataChannel.closing_event", "closing")}}
  - : O `RTCDataChannel` fez a transição para o estado `closing`, indicando que será fechado em breve. Você pode detectar a conclusão do processo de fechamento observando o evento `close`.
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : O estado da conexão foi alterado, pode ser acessada em {{domxref("RTCPeerConnection.connectionState", "connectionState")}}.
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : Um novo {{domxref("RTCDataChannel")}} está disponível após o peer remoto abrir um novo canal de dados. O tipo deste evento é {{domxref("RTCDataChannelEvent")}}.
- {{domxref("RTCDataChannel.error_event", "error")}}
  - : Um {{domxref("RTCErrorEvent")}} indicando que ocorreu um erro no canal de dados.
- {{domxref("RTCDtlsTransport.error_event", "error")}}
  - : Um {{domxref("RTCErrorEvent")}} indicando que ocorreu um erro no {{domxref("RTCDtlsTransport")}}. Este erro será `dtls-failure` ou `fingerprint-failure`.
- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
  - : O estado de coleta do {{domxref("RTCIceTransport")}} mudou.
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : Um {{domxref("RTCPeerConnectionIceEvent")}} que é enviado sempre que o dispositivo local identifica um novo candidato ICE que precisa ser adicionado ao par local chamando {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()" )}}.
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : Um {{domxref("RTCPeerConnectionIceErrorEvent")}} indicando que ocorreu um erro durante a coleta de candidatos ICE.
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : Enviado para um {{domxref("RTCPeerConnection")}} quando o estado de sua conexão ICE - encontrado na propriedade {{domxref("RTCPeerConnection.iceconnectionstate", "iceconnectionstate")}} muda.
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : Enviado para um {{domxref("RTCPeerConnection")}} quando seu estado de coleta de ICE - encontrado na propriedade {{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}} muda.
- {{domxref("RTCDataChannel.message_event", "message")}}
  - : Uma mensagem foi recebida no canal de dados. O evento é do tipo {{domxref("MessageEvent")}}.
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : Informa ao `RTCPeerConnection` que ele precisa realizar negociação de sessão chamando {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} seguido por {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()") }}.
- {{domxref("RTCDataChannel.open_event", "open")}}
  - : O transporte de dados subjacente para o `RTCDataChannel` foi aberto ou reaberto com sucesso.
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}
  - : O par atualmente selecionado de candidatos ICE foi alterado para o `RTCIceTransport` no qual o evento é disparado.
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : O evento `track`, do tipo {{domxref("RTCTrackevent")}} é enviado para um {{domxref("RTCPeerConnection")}} quando uma nova trilha é adicionada à conexão após a negociação bem-sucedida da mídia transmissão.
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : Enviado para a conexão de mesmo nível quando seu {{domxref("RTCPeerConnection.signalingstate", "signalingstate")}} foi alterado. Isso acontece como resultado de uma chamada para {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} ou {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}.
- {{domxref("RTCDtlsTransport.statechange_event", "statechange")}}
  - : O estado do `RTCDtlsTransport` mudou.
- {{domxref("RTCIceTransport.statechange_event", "statechange")}}
  - : O estado do `RTCIceTransport` mudou.
- {{domxref("RTCSctpTransport.statechange_event", "statechange")}}
  - : O estado do `RTCSctpTransport` mudou.

#### Tipos

- {{DOMxRef("RTCSctpTransport.state")}}
  - : Indica o estado de uma instância {{DOMxRef("RTCSctpTransport")}}.

### Identidade e segurança

A API WebRTC inclui várias interfaces para gerenciar segurança e identidade.

- {{domxref("RTCIdentityProvider")}}
  - : Permite que um agente de usuário possa solicitar que uma declaração de identidade seja gerada ou validada.
- {{domxref("RTCIdentityAssertion")}}
  - : Representa a identidade de um ponto remoto da conexão atual. Se nenhum par ainda foi definido e verificado, esta interface retorna `null`. Uma vez definido, não pode ser alterado.
- {{domxref("RTCIdentityProviderRegistrar")}}
  - : Registra um provedor de identidade (idP).
- {{domxref("RTCIdentityEvent")}}
  - : Representa uma asserção de identidade gerada por um provedor de identidade (idP). Isso geralmente é para um {{domxref("RTCPeerConnection")}}. O único evento enviado com este tipo é {{event("identityresult")}}.
- {{domxref("RTCIdentityErrorEvent")}}
  - : Representa um erro associado ao provedor de identidade (idP). Isso geralmente é para um {{domxref("RTCPeerConnection")}}. Dois eventos são enviados com este tipo: {{event("idpassertionerror")}} e {{event("idpvalidationerror")}}.
- {{domxref("RTCCertificate")}}
  - : Representa um certificado que um {{domxref("RTCPeerConnection")}} usa para autenticar.

### Telefonia

Essas interfaces estão relacionadas à interatividade com redes telefônicas públicas comutadas (PTSNs).

- {{domxref("RTCDTMFSender")}}
  - : Gerencia a codificação e a transmissão da sinalização de multifrequência de tom duplo (DTMF) para um {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCDTMFToneChangeEvent")}}
  - : Indica uma ocorrência de multifrequência de tom duplo (DTMF). Este evento não borbulha (_bubbling_) (exceto se especificado ao contrário) e não é cancelável (_cancelable_)(exceto se especificado ao contrário).

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
