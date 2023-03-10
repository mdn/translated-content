---
title: WebRTC API
slug: Web/API/WebRTC_API
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC**（Web Real-Time Communications）是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。WebRTC 包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（Peer-to-Peer）的数据分享和电话会议成为可能。

WebRTC 包含了若干相互关联的 API 和协议以达到这个目标。你在这里看到的文档将会帮助你理解 WebRTC 的基本概念，还会教你如何去建立和使用可以传输媒体数据和其他任意数据的连接。当然你还会学到更多其他的东西。

## 参考

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

## 指南

- [WebRTC 架构概述](/zh-CN/docs/Web/API/WebRTC_API/Architecture)
  - : 用来创建 WebRTC 连接的 API 底层使用了一系列的网络协议和连接标准。这篇文章涵盖了这些标准。
- [WebRTC 基础](/zh-CN/docs/Web/API/WebRTC_API/WebRTC_basics)
  - : 这篇文建将带你贯穿一个跨浏览器 RTC 应用的整个创建过程。结束的时候，你将拥有一个可以运行的点对点（peer-to-peer）数据通道（data channel）和媒体通道（media channel）。
- [WebRTC 协议](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
  - : 这篇文章介绍了一系列的协议，WebRTC API 就是建立于他们之上。
- [WebRTC 连接](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)
  - : 这篇文章将向你介绍为创建点对点的连接并且实现数据或/和媒体的传输，各个 WebRTC 相关的协议是如何相互协作的。
- [WebRTC API 概览](/zh-CN/docs/Web/API/WebRTC_API/Overview)
  - : WebRTC 包含了一些关联的 API 和协议，它们相互协作以支持数据或媒体在两个或多个点之间传输。这篇文章将向你展示这些 API 的简要介绍以及它们的用途。
- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC 让你可以在基于浏览器应用中实现任意点对点（peer-to-peer）的数据、音频、视频 或它们的任意组合的通信。在这篇文章中我们一起来看一下 WebRTC 的生命周期。从建立连接开始，一直到不再需要的时候将它关闭掉。

## 教程

- [使用 WebRTC 拍摄静止的照片](/zh-CN/docs/Web/API/WebRTC_API/Taking_still_photos)
  - : 这篇文章介绍了如何在 WebRTC 的支持下可以访问到电脑或者手机的摄像头并且使用它来拍摄照片。
- [一个简易 RTCDataChannel 的例子](/zh-CN/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : {{domxref("RTCDataChannel")}} 接口是一个特性，使用它你可以在两个点之间发送和接收任意数据。它的 API 和[WebSocket API](/zh-CN/docs/Web/API/WebSocket_API)非常相似，所以同样的代码对他们来说都可以使用。

## 资源

### 协议

#### WebRTC-proper protocols

- [Application Layer Protocol Negotiation for Web Real-Time Communications](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-alpn/)
- [WebRTC Audio Codec and Processing Requirements](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-audio/)
- [RTCWeb Data Channels](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-channel/)
- [RTCWeb Data Channel Protocol](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-protocol/)
- [Web Real-Time Communication (WebRTC): Media Transport and Use of RTP](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-rtp-usage/)
- [WebRTC Security Architecture](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-security-arch/)
- [Transports for RTCWEB](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-transports/)

#### 相关的支持协议

- [Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal for Offer/Answer Protocol](https://tools.ietf.org/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://tools.ietf.org/html/rfc5389)
- [URI Scheme for the Session Traversal Utilities for NAT (STUN) Protocol](https://tools.ietf.org/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://tools.ietf.org/html/rfc7065)
- [An Offer/Answer Model with Session Description Protocol (SDP)](https://tools.ietf.org/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Extension for Third Party Authorization](https://datatracker.ietf.org/doc/draft-ietf-tram-turn-third-party-authz/)

## 规范

{{Specifications}}

除了这些定义 WebRTC 需要的 API 的标准之外，还有其他的一些协议，在[资源](#Protocols)中列了出来。

## 相关链接

- [Firefox multistream and renegotiation for Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering Through the WebRTC Fog with SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
