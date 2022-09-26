---
title: WebRTC API
slug: Web/API/WebRTC_API
---

{{APIRef("WebRTC")}}

**WebRTC**（網路即時通訊技術）是一個提供 Web 應用程式及網站進行錄影或隨選播放串流音訊與影像的技術，可以直接使用瀏覽器進行資料交換而無須透過中介服務。作為一個標準規格，WebRTC 可以提供任何瀏覽器在不需要安裝外掛程式或第三方軟體下，分享應用程式的資料和進行電話會議。

WebRTC 由數個相關而互相協作的 API 以及網路協定組成。

這裡的技術文件會幫助你了解 :

WebRTC 的基本構成，如何設置並同時使用其資料與媒體傳輸連線，以及更多有關資訊。

## WebRTC 概念與使用

WebRTC 有許多服務目的，基本涵括了媒體獲取與串流 API，他們為網頁提供了強大的多媒體功能，包括: 音視訊會議，檔案傳輸，身分識別管理，以及提供以傳輸{{Glossary("DTMF")}}訊號來與現存電話系統交互的介面。

建立端點與端點間的連線完全不需要特定驅動程式抑或者第三方插件，在通常情況下也不需要任何中介伺服器

WebRTC serves multiple purposes, and overlaps substantially with the Media Capture and Streams API. Together, they provide powerful multimedia capabilities to the Web, including support for audio and video conferencing, file exchange, identity management, and interfacing with legacy telephone systems by sending {{Glossary("DTMF")}} signals. Connections between peers can be made without requiring any special drivers or plug-ins, and can often be made without any intermediary servers.

Connections between two peers are created using—and represented by—the {{domxref("RTCPeerConnection")}} interface. Once a connection has been established and opened, media streams ({{domxref("MediaStream")}}s) and/or data channels ({{domxref("RTCDataChannel")}}s) can be added to the connection.

Media streams can consist of any number of tracks of media information; tracks, which are represented by objects based on the {{domxref("MediaStreamTrack")}} interface, may contain one of a number of types of media data, including audio, video, and text (such as subtitles or even chapter names). Most streams consist of at least one audio track and likely also a video track, and can be used to send and receive both live media or stored media information (such as a streamed movie).

You can also use the connection between two peers to exchange arbitrary binary data using the {{domxref("RTCDataChannel")}} interface. This can be used for back-channel information, metadata exchange, game status packets, file transfers, or even as a primary channel for data transfer.

_**more details and links to relevant guides and tutorials needed**_

## WebRTC interfaces

Because WebRTC provides interfaces that work together to accomplish a variety of tasks, we have divided up the interfaces in the list below by category. Please see the sidebar for an alphabetical list.

### Connection setup and management

These interfaces are used to set up, open, and manage WebRTC connections.

- {{domxref("RTCPeerConnection")}}
  - : Represents a WebRTC connection between the local computer and a remote peer. It is used to handle efficient streaming of data between the two peers.
- {{domxref("RTCDataChannel")}}
  - : Represents a bi-directional data channel between two peers of a connection.
- {{domxref("RTCDataChannelEvent")}}
  - : Represents events that occur while attaching a {{domxref("RTCDataChannel")}} to a {{domxref("RTCPeerConnection")}}. The only event sent with this interface is {{event("datachannel")}}.
- {{domxref("RTCSessionDescription")}}
  - : Represents the parameters of a session. Each `RTCSessionDescription` consists of a description [`type`](/zh-TW/docs/Web/API/RTCSessionDescription/type) indicating which part of the offer/answer negotiation process it describes and of the [SDP](/zh-TW/docs/Glossary/SDP) descriptor of the session.
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

- [Introduction to WebRTC protocols](/zh-TW/docs/Web/API/WebRTC_API/Protocols)
  - : This article introduces the protocols on top of which the WebRTC API is built.
- [WebRTC connectivity](/zh-TW/docs/Web/API/WebRTC_API/Connectivity)
  - : A guide to how WebRTC connections work and how the various protocols and interfaces can be used together to build powerful communication apps.
- [Lifetime of a WebRTC session](/zh-TW/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC lets you build peer-to-peer communication of arbitrary data, audio, or video—or any combination thereof—into a browser application. In this article, we'll look at the lifetime of a WebRTC session, from establishing the connection all the way through closing the connection when it's no longer needed.
- [Signaling and two-way video calling](/zh-TW/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : A tutorial and example which turbs a WebSocket-based chat system created for a previous example and adds support for opening video calls among participants. The chat server's WebSocket connection is used for WebRTC signaling.
- [Using WebRTC data channels](/zh-TW/docs/Web/API/WebRTC_API/Using_data_channels)
  - : This guide covers how you can use a peer connection and an associated {{domxref("RTCDataChannel")}} to exchange arbitrary data between two peers.
- [Using DTMF with WebRTC](/zh-TW/docs/Web/API/WebRTC_API/Using_DTMF)
  - : WebRTC's support for interacting with gateways that link to old-school telephone systems includes support for sending DTMF tones using the {{domxref("RTCDTMFSender")}} interface. This guide shows how to do so.

## 教學

- [Improving compatibility using WebRTC adapter.js](/zh-TW/docs/Web/API/WebRTC_API/adapter.js)
  - : The WebRTC organization [provides on GitHub the WebRTC adapter](https://github.com/webrtc/adapter/) to work around compatibility issues in different browsers' WebRTC implementations. The adapter is a JavaScript shim which lets your code to be written to the specification so that it will "just work" in all browsers with WebRTC support.
- [Taking still photos with WebRTC](/zh-TW/docs/Web/API/WebRTC_API/Taking_still_photos)
  - : This article shows how to use WebRTC to access the camera on a computer or mobile phone with WebRTC support and take a photo with it.
- [一個簡單的 RTCDataChannel 範例](/zh-TW/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : {{domxref("RTCDataChannel")}} 介面用於讓兩端點間建立起資料的通道，你可以利用通道來收發資料。這組 API 被設計成與 [WebSocket API](/zh-TW/docs/Web/API/WebSocket_API) 相似，所以可以利用同樣的程式模型套用在這兩套 API 之上。

## 資源

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

## 規範

{{Specifications}}

In additions to these specifications defining the API needed to use WebRTC, there are several protocols, listed under [resources](#Protocols).

## 參見

- {{domxref("MediaDevices")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MediaStreamConstraints")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MessageEvent")}}
- {{domxref("MediaStream")}}
- [Firefox multistream and renegotiation for Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering Through the WebRTC Fog with SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
