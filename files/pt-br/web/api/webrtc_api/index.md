---
title: WebRTC API
slug: Web/API/WebRTC_API
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communications) é uma tecnologia que permite aplicativos e sites da Web a capturarem e opcionalmente transmitirem mídia de áudio e/ou vídeo, assim como trocar informação arbitrária entre navegadores sem a necessidade de um intermediador. O conjunto de padrões que abrangem WebRTC possibilita o compartilhamento de informação e a realização de teleconferência peer-to-peer, dispensando a instalação de _plug-ins_ ou quaisquer softwares de terceiros.

WebRTC consiste em diversas APIs e protocolos interrelacionados que trabalham juntos. A documentação que você encontrará aqui o ajudará a entender os fundamentos de WebRTC, como configurar e usar, tanto informação, quanto conexões de mídia e mais.

## Conceitos e uso

WebRTC serve à diversas propostas; junto com a [Media Capture and Streams API](/pt-BR/docs/Web/API/Media_Capture_and_Streams_API), eles fornecem poder multimídia para a Web, incluindo suporte para áudio e vídeo conferência, troca de arquivos, compartilhamento de tela, gerenciamento de identidade e interface com sistemas telefônicos legados, incluindo suporte para envio de sinais {{Glossary("DTMF")}} (touch-tone dialing). As conexões entre pares podem ser feitas sem a necessidade de drivers ou plug-ins especiais e, muitas vezes, sem servidores intermediários.

As conexões entre dois pares são representadas pela interface {{DOMxRef("RTCPeerConnection")}}. Uma vez que uma conexão foi estabelecida e aberta usando `RTCPeerConnection`, _streams_ de mídia ({{DOMxRef("MediaStream")}}s) e/ou canais de dados ({{DOMxRef("RTCDataChannel")}}s) podem ser adicionados à conexão.

Dados de mídia podem consistir em qualquer número de _tracks_(faixas) de dados de mídia; _tracks_, que são representados por objetos baseados na interface {{DOMxRef("MediaStreamTrack")}} , que podem conter um número dentre tipos de dados de mídia, incluíndo áudio, vídeo e texto (como legendas ou até mesmo nomes de capítulos). A maioria das transmissões consiste de ao menos uma faixa de áudio e comumente também uma faixa de vídeo, e podem ser usadas para enviar e receber ambas as mídias ao vivo ou dados salvos de mídia (como um filme transmitido).

Você também pode usar a conexão entre dois _peers_ para trocar dados arbitrários binários usando a interface {{DOMxRef("RTCDataChannel")}}. Isto pode ser usado para informação de _back-channel_ (canal de volta), troca de _metadata_, pacotes de _status_ de games, transferência de arquivos, ou até mesmo como um canal primário para transferir dados.

### Interoperabilidade

O WebRTC é geralmente bem suportado em navegadores modernos, mas algumas incompatibilidades permanecem. A biblioteca [adapter.js](https://github.com/webrtcHacks/adapter) é um calço para isolar aplicativos dessas incompatibilidades.

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
  - : Fornece estatísticas detalhadas de informações para uma conexão ou para uma _track_ individual na conexão; o relatório pode ser obtido chamando {{DOMxRef("RTCPeerConnection.getStats()")}}. Detalhes sobre o uso de estatísticas WebRTC podem ser encontrados em [WebRTC Statistics API](/pt-BR/docs/Web/API/WebRTC_Statistics_API).
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
  - : Fornece informações que descrevem um transporte de _Stream Control Transmission Protocol ou **{{Glossary("SCTP")}}**_ (Protocolo de Transmissão de Controle de Fluxo) e também fornece uma maneira de acessar a segurança da _Datagram Transport Layer Security ou **{{Glossary("DTLS") }}**_ (Camada de Transporte de Datagrama Subjacente) através do qual os pacotes SCTP para todos os canais de dados de uma [`RTCPeerConnection`](/pt-BR/docs/Web/API/RTCPeerConnection) são enviados e recebidos.

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
  - : Enviado para um {{domxref("RTCPeerConnection")}} quando o estado de sua conexão ICE - encontrado na propriedade {{domxref("RTCPeerConnection.iceconnectionstate", "iceconnectionstate")}} - muda.
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : Enviado para um {{domxref("RTCPeerConnection")}} quando seu estado de coleta de ICE - encontrado na propriedade {{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}} - muda.
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
- {{domxref("RTCCertificate")}}
  - : Representa um certificado que um {{domxref("RTCPeerConnection")}} usa para autenticar.

### Telefonia

Essas interfaces e eventos estão relacionadas à interatividade com redes telefônicas públicas comutadas (PTSNs) Elas são primariamente usadas para enviar sons de discagem por tom - ou pacotes que representam esses tons - pela rede para um par remoto.

#### Interfaces

- {{DOMxRef("RTCDTMFSender")}}
  - : Gerencia a codificação e a transmissão da sinalização de multifrequência de tom duplo ({{Glossary("DTMF")}}) para um {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCDTMFToneChangeEvent")}}
  - : Usado pelo evento {{DOMxRef("RTCDTMFSender.tonechange_event", "tonechange")}} para indicar que um tom DTMF começou ou terminou. Este evento não propaga "bolhas" (exceto onde indicado de outra forma) e não é cancelável (exceto onde indicado de outra forma).

#### Eventos

- {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}}
  - : Um novo tom {{Glossary("DTMF")}} começou a tocar na conexão, ou o último tom no {{DOMxRef("RTCDTMFSender.toneBuffer", "toneBuffer")}} do `RTCDTMFSender` foi enviado e o buffer agora está vazio. O tipo do evento é {{DOMxRef("RTCDTMFToneChangeEvent")}}.

## Guias

- [Introdução aos protocolos WebRTC](/pt-BR/docs/Web/API/WebRTC_API/Protocols)
  - : Este artigo apresenta os protocolos sobre os quais a API WebRTC é construída.
- [Conectividade WebRTC](/pt-BR/docs/Web/API/WebRTC_API/Connectivity)
  - : Um guia de como as conexões WebRTC funcionam e como os vários protocolos e interfaces podem ser usados ​​juntos para criar aplicativos de comunicação poderosos.
- [Vida útil de uma sessão WebRTC](/pt-BR/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC permite criar comunicação _peer-to-peer_ de dados arbitrários, áudio ou vídeo — ou qualquer combinação deles — em um aplicativo de navegador. Neste artigo, veremos o tempo de vida de uma sessão WebRTC, desde o estabelecimento da conexão até o fechamento da conexão quando ela não for mais necessária.
- [Estabelecendo uma conexão: O padrão de negociação perfeito](/pt-BR/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Negociação perfeita** é um padrão de design recomendado para o seu processo de sinalização, que fornece transparência na negociação enquanto permite que ambos os lados sejam o _`offerer`_ (ofertante) ou o _`answerer`_ (respondente), sem necessidade de muito código para diferenciar os dois.
- [Sinalização e chamada de vídeo bidirecional](/pt-BR/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Um tutorial e exemplo que transforma um sistema de chat baseado em WebSocket criado para um exemplo anterior e adiciona suporte para abertura de chamadas de vídeo entre os participantes. A conexão WebSocket do servidor de bate-papo é usada para sinalização WebRTC.
- [Codecs usados ​​pelo WebRTC](/pt-BR/docs/Web/Media/Formats/WebRTC_codecs)
  - : Um guia para os codecs que o WebRTC exige que os navegadores suportem, bem como os opcionais suportados por vários navegadores populares. Está incluído um guia para ajudá-lo a escolher os melhores codecs para suas necessidades.
- [Usando canais de dados WebRTC](/pt-BR/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Este guia aborda como você pode usar uma conexão de mesmo nível e um {{DOMxRef("RTCDataChannel")}} associado para trocar dados arbitrários entre dois pares.
- [Usando DTMF com WebRTC](/pt-BR/docs/Web/API/WebRTC_API/Using_DTMF)
  - : O suporte do WebRTC para interagir com gateways que se conectam a sistemas telefônicos antigos inclui suporte para enviar tons DTMF usando a interface {{DOMxRef("RTCDTMFSender")}}. Este guia mostra como fazer isso.

## Tutoriais

- [Melhorando a compatibilidade usando o adaptador WebRTC.js](/pt-BR/docs/Web/API/WebRTC_API#interoperability)
  - : A organização WebRTC [fornece no GitHub o adaptador WebRTC](https://github.com/webrtc/adapter/) para solucionar problemas de compatibilidade em implementações WebRTC de diferentes navegadores. O adaptador é um shim JavaScript que permite que seu código seja escrito de acordo com a especificação para que "simplesmente funcione" em todos os navegadores com suporte a WebRTC.
- [Uma simples amostra de RTCDataChannel](/pt-BR/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : A interface {{DOMxRef("RTCDataChannel")}} é um recurso que permite abrir um canal entre dois pares através do qual você pode enviar e receber dados arbitrários. A API é intencionalmente semelhante à [API WebSocket](/pt-BR/docs/Web/API/WebSockets_API), para que o mesmo modelo de programação possa ser usado para cada uma.
- [Construindo um telefone conectado à Internet com Peer.js](/pt-BR/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : Este tutorial é um guia passo a passo sobre como construir um telefone usando Peer.js

## Especificações

{{Specifications}}

### Protocolos adequados para WebRTC

- [Negociação de protocolo de camada de aplicativo para comunicações em tempo real na Web (en-US)](https://datatracker.ietf.org/doc/rfc8833/)
- [Requisitos de processamento e codec de áudio WebRTC (en-US)](https://datatracker.ietf.org/doc/rfc7874/)
- [Canais de dados RTCWeb (en-US)](https://datatracker.ietf.org/doc/rfc8831/)
- [Protocolo de Canal de Dados RTCWeb (en-US)](https://datatracker.ietf.org/doc/rfc8832/)
- [Comunicação Web em Tempo Real (WebRTC): Transporte de Mídia e Uso de RTP (en-US)](https://datatracker.ietf.org/doc/rfc8834/)
- [Arquitetura de segurança WebRTC (en-US)](https://datatracker.ietf.org/doc/rfc8827/)
- [Transportes para RTCWEB (en-US)](https://datatracker.ietf.org/doc/rfc8835/)

### Protocolos de suporte relacionados

- [Estabelecimento de Conectividade Interativa (ICE): Um Protocolo para Tradutor de Endereço de Rede (NAT) Traversal para Protocolo de Oferta/Resposta (en-US)](https://datatracker.ietf.org/doc/html/rfc5245)
- [Utilitários de travessia de sessão para NAT (STUN) (en-US)](https://datatracker.ietf.org/doc/html/rfc5389)
- [Esquema de URI para o protocolo Session Traversal Utilities for NAT (STUN) (en-US)](https://datatracker.ietf.org/doc/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers (en-US)](https://datatracker.ietf.org/doc/html/rfc7065)
- [Um modelo de oferta/resposta com protocolo de descrição de sessão (SDP) (en-US)](https://datatracker.ietf.org/doc/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Extension for Third Party Authorization (en-US)](https://datatracker.ietf.org/doc/rfc7635/)

## Veja também

- {{DOMxRef("MediaDevices")}}
- {{DOMxRef("MediaStreamEvent")}}
- {{DOMxRef("MediaStreamTrack")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MediaStream")}}
- [API de captura de mídia e fluxos](/pt-BR/docs/Web/API/Media_Capture_and_Streams_API)
- [Firefox multistream e renegociação para Jitsi Videobridge (en-US)](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering através do WebRTC Fog com SocketPeer (en-US)](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Construindo um aplicativo da Web com vários fluxos de vídeo ao vivo + gráficos interativos (en-US)](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
- [Tecnologias de mídia da Web](/pt-BR/docs/Web/Media)
- [API de estatísticas WebRTC](/pt-BR/docs/Web/API/WebRTC_Statistics_API)
