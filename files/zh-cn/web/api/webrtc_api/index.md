---
title: WebRTC API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC**（Web 实时通信）是一种使 Web 应用程序和站点能够捕获和选择性地流式传输音频或视频媒体，以及在浏览器之间交换任意数据的而无需中间件的技术。WebRTC 的一系列标准使得在不需要用户安装插件或任何其他第三方软件的情况下，可以实现点对点数据共享和电话会议。

WebRTC 由几个相互关联的 API 和协议组成，它们共同工作以实现这一目标。你在这里找到的文档将帮助你了解 WebRTC 的基础知识，以及如何设置和使用数据和媒体连接等更多内容。

## WebRTC 概念和用法

WebRTC 有多种用途；与[媒体捕捉与媒体流 API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API) 一起使用时，它们为 Web 提供了强大的多媒体功能，包括支持音频和视频会议、文件交换、屏幕共享、身份管理以及与传统电话系统的接口，包括发送 {{Glossary("DTMF")}}（按键拨号）信号。两个对等方之间的连接可以在不需要任何特殊驱动程序或插件的情况下建立，并且通常可以在没有任何中间服务器的情况下建立连接。

两个对等方之间的连接由 {{DOMxRef("RTCPeerConnection")}} 接口表示。一旦使用 `RTCPeerConnection` 建立并打开了连接，就可以向连接添加媒体流（{{DOMxRef("MediaStream")}}）或数据通道（{{DOMxRef("RTCDataChannel")}}）。

媒体流可以由任意数量的媒体信息轨道组成；轨道由基于 {{DOMxRef("MediaStreamTrack")}} 接口的对象表示，可以包含多种类型的媒体数据，包括音频、视频和文本（例如字幕甚至章节名称）。大多数流至少包含一个音频轨道和可能也包含一个视频轨道，并且可以用于发送和接收实时媒体或存储的媒体信息（例如流媒体电影）。

你还可以使用两个对等方之间的连接来交换任意二进制数据，使用 {{DOMxRef("RTCDataChannel")}} 接口。这可以用于背向通道信息、元数据交换、游戏状态数据包、文件传输，甚至作为数据传输的主要通道。

### 互操作性

WebRTC 在现代浏览器中通常得到很好的支持，但仍存在一些不兼容性。[adapter.js](https://github.com/webrtcHacks/adapter) 库是一个垫片，可以使应用程序免受这些不兼容性的影响。

## WebRTC 参考

由于 WebRTC 提供了一系列共同工作以完成各种任务的接口，我们将参考资料按类别进行了划分。请参阅侧边栏中的按字母顺序排列的列表。

### 连接设置和管理

这些接口、字典和类型用于设置、打开和管理 WebRTC 连接。包括表示对等媒体连接、数据通道和在交换每个对等方的能力信息以选择最佳配置的接口时使用的接口。

#### 接口

- {{DOMxRef("RTCPeerConnection")}}
  - ：表示本地计算机与远程对等方之间的 WebRTC 连接。它用于处理两个对等方之间的数据流式传输。
- {{DOMxRef("RTCDataChannel")}}
  - ：表示连接的两个对等方之间的双向数据通道。
- {{DOMxRef("RTCDataChannelEvent")}}
  - ：表示在将 {{DOMxRef("RTCDataChannel")}} 附加到 {{DOMxRef("RTCPeerConnection")}} 时发生的事件。使用此接口发送的唯一事件是 {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}。
- {{DOMxRef("RTCSessionDescription")}}
  - ：表示会话的参数。每个 `RTCSessionDescription` 包括一个描述 {{DOMxRef("RTCSessionDescription.type", "type")}}，指示其描述的提议/应答协商过程的哪一部分，以及会话的 {{Glossary("SDP")}} 描述符。
- {{DOMxRef("RTCStatsReport")}}
  - ：提供有关连接或连接上的个别轨道的统计信息的详细信息；可以通过调用 {{DOMxRef("RTCPeerConnection.getStats()")}} 来获取报告。
- {{DOMxRef("RTCIceCandidate")}}
  - ：表示用于建立 {{DOMxRef("RTCPeerConnection")}} 的候选交互式连通性建立（{{Glossary("ICE")}}）服务器。
- {{DOMxRef("RTCIceTransport")}}
  - ：表示有关 {{Glossary("ICE")}} 传输的信息。
- {{DOMxRef("RTCPeerConnectionIceEvent")}}
  - ：表示与目标 ICE 候选项相关的事件，通常是 {{DOMxRef("RTCPeerConnection")}}。此类型仅有一个事件：{{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}。
- {{DOMxRef("RTCRtpSender")}}
  - ：管理在 {{DOMxRef("RTCPeerConnection")}} 上的 {{DOMxRef("MediaStreamTrack")}} 的编码和传输数据。
- {{DOMxRef("RTCRtpReceiver")}}
  - ：管理在 {{DOMxRef("RTCPeerConnection")}} 上的 {{DOMxRef("MediaStreamTrack")}} 的接收和解码数据。
- {{DOMxRef("RTCTrackEvent")}}
  - ：用于表示 {{domxref("RTCPeerConnection.track_event", "track")}} 事件的接口，该事件指示已将 {{DOMxRef("RTCRtpReceiver")}} 对象添加到 {{DOMxRef("RTCPeerConnection")}} 对象，表示已创建并添加了新的传入 {{DOMxRef("MediaStreamTrack")}} 至 `RTCPeerConnection`。
- {{DOMxRef("RTCSctpTransport")}}
  - ：提供描述流控制传输协议（**{{Glossary("SCTP")}}**）传输的信息，并提供一种访问底层的用于所有 [`RTCPeerConnection`](/zh-CN/docs/Web/API/RTCPeerConnection) 的数据通道发送和接收 SCTP 包的数据报传输层安全性（**{{Glossary("DTLS")}}**）传输的方式。

#### 事件

- {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
  - ：表示数据通道当前缓冲的数据量（由其 {{domxref("RTCDataChannel.bufferedAmount", "bufferedAmount")}} 属性指示）已经减少到或低于通道的最小缓冲数据大小，由 {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}} 指定。
- {{domxref("RTCDataChannel.close_event", "close")}}
  - ：数据通道已完成关闭过程，现在处于 `closed` 状态。此时，其基础数据传输完全关闭。你可以通过观察 `closing` 事件来在关闭完成之前得到通知。
- {{domxref("RTCDataChannel.closing_event", "closing")}}
  - ：`RTCDataChannel` 已转换为 `closing` 状态，表示它将很快关闭。你可以通过观察 `close` 事件来检测关闭过程的完成。
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - ：连接状态已更改，可以在 {{domxref("RTCPeerConnection.connectionState", "connectionState")}} 中访问。
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - ：远程对等方打开新数据通道后，会有一个新的 {{domxref("RTCDataChannel")}} 可用。此事件的类型是 {{domxref("RTCDataChannelEvent")}}。
- {{domxref("RTCDataChannel.error_event", "error")}}
  - ：表示数据通道上发生错误的 {{domxref("RTCErrorEvent")}}。
- {{domxref("RTCDtlsTransport.error_event", "error")}}
  - ：表示 {{domxref("RTCDtlsTransport")}} 上发生错误的 {{domxref("RTCErrorEvent")}}。此错误将是 `dtls-failure` 或 `fingerprint-failure`。
- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
  - ：{{domxref("RTCIceTransport")}} 的收集状态已更改。
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - ：每当本地设备识别出一个新的 ICE 候选项需要通过调用 {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} 添加到本地对等方时，就会发送一个 {{domxref("RTCPeerConnectionIceEvent")}}。
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - ：表示在收集 ICE 候选项时发生错误的 {{domxref("RTCPeerConnectionIceErrorEvent")}}。
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - ：在其 ICE 连接的状态（在 {{domxref("RTCPeerConnection.iceconnectionstate", "iceconnectionstate")}} 属性中找到）更改时，会发送给 {{domxref("RTCPeerConnection")}}。
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - ：在其 ICE 收集状态（在 {{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}} 属性中找到）更改时，会发送给 {{domxref("RTCPeerConnection")}}。
- {{domxref("RTCDataChannel.message_event", "message")}}
  - ：在数据通道上收到消息。该事件的类型为 {{domxref("MessageEvent")}}。
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - ：通知 `RTCPeerConnection` 需要通过调用 {{domxref("RTCPeerConnection.createOffer", "createOffer()")}}，然后是 {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} 来执行会话协商。
- {{domxref("RTCDataChannel.open_event", "open")}}
  - ：`RTCDataChannel` 的基础数据传输已成功打开或重新打开。
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}
  - ：`RTCIceTransport` 上的当前选择的 ICE 候选对已更改时触发的事件。
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - ：当成功协商了媒体流的流式传输后，将向 {{domxref("RTCPeerConnection")}} 添加新轨道时，会发送类型为 {{domxref("RTCTrackevent")}} 的 `track` 事件。
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - ：在其 {{domxref("RTCPeerConnection.signalingstate", "signalingstate")}} 更改时，会发送到对等连接。这是由于调用 {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} 或 {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} 引起的。
- {{domxref("RTCDtlsTransport.statechange_event", "statechange")}}
  - ：`RTCDtlsTransport` 的状态已更改。
- {{domxref("RTCIceTransport.statechange_event", "statechange")}}
  - ：`RTCIceTransport` 的状态已更改。
- {{domxref("RTCSctpTransport.statechange_event", "statechange")}}
  - ：`RTCSctpTransport` 的状态已更改。
- {{DOMxRef("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}
  - ：编码的视频或音频帧已准备好在工作线程中使用转换流进行处理。

#### 类型

- {{DOMxRef("RTCSctpTransport.state")}}
  - ：指示 {{DOMxRef("RTCSctpTransport")}} 实例的状态。

### 身份和安全

这些 API 用于管理用户身份和安全性，以便为连接验证用户。

- {{DOMxRef("RTCIdentityProvider")}}
  - ：使用户代理能够请求生成或验证身份断言。
- {{DOMxRef("RTCIdentityAssertion")}}
  - ：表示当前连接的远程对等方的身份。如果尚未设置和验证对等方，则此接口返回 `null`。一旦设置，便无法更改。
- {{DOMxRef("RTCIdentityProviderRegistrar")}}
  - ：注册身份提供者（IdP）。
- {{DOMxRef("RTCCertificate")}}
  - ：表示 {{DOMxRef("RTCPeerConnection")}} 用于身份验证的证书。

### 电话

#### 接口

- {{DOMxRef("RTCDTMFSender")}}
  - ：管理 {{DOMxRef("RTCPeerConnection")}} 的双音多频（DTMF）信令的编码和传输。
- {{DOMxRef("RTCDTMFToneChangeEvent")}}
  - ：由 {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}} 事件使用，指示 DTMF 音调已开始或结束。此事件不冒泡（除非另有说明），也不可取消（除非另有说明）。

#### 事件

- {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}}
  - ：连接上已开始播放新的 DTMF 音调，或者 `RTCDTMFSender` 的 {{domxref("RTCDTMFSender.toneBuffer", "toneBuffer")}} 中的最后一个音调已发送，且缓冲区现在为空。事件的类型为 {{domxref("RTCDTMFToneChangeEvent")}}。

### 编码转换

这些接口和事件用于使用在工作线程中运行的转换流处理传入和传出的编码视频和音频帧。

#### 接口

- {{DOMxRef("RTCRtpScriptTransform")}}
  - ：用于将在工作线程中运行的转换流插入 RTC 流水线的接口。
- {{DOMxRef("RTCRtpScriptTransformer")}}
  - ：`RTCRtpScriptTransform` 的工作线程对应项，传递来自主线程的选项，以及可用于通过 {{DOMxRef("TransformStream")}} 将编码帧传递的可读流和可写流。
- {{DOMxRef("RTCEncodedVideoFrame")}}
  - ：表示要在 RTC 流水线中进行转换的编码视频帧。
- {{DOMxRef("RTCEncodedAudioFrame")}}
  - ：表示要在 RTC 流水线中进行转换的编码音频帧。

#### 属性

- {{DOMxRef("RTCRtpReceiver.transform")}}
  - ：用于将转换流插入接收器流水线以处理传入的编码视频和音频帧的属性。
- {{DOMxRef("RTCRtpSender.transform")}}
  - ：用于将转换流插入发送器流水线以处理传出的编码视频和音频帧的属性。

#### 事件

- {{DOMxRef("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}
  - ：RTC 转换准备在工作线程中运行，或者编码视频或音频帧准备进行处理时触发的事件。

## 指南

- [WebRTC 协议简介](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
  - ：本文介绍了构建 WebRTC API 的底层协议。
- [WebRTC 连接性](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)
  - ：介绍了 WebRTC 连接的工作原理以及如何将各种协议和接口结合起来构建功能强大的通信应用程序的指南。
- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
  - ：WebRTC 允许你将任意数据、音频或视频（或其任意组合）构建为浏览器应用程序之间的点对点通信。在本文中，我们将从建立连接一直到关闭连接（不再需要时）的整个 WebRTC 会话生命周期进行探讨。
- [建立连接：完美协商模式](/zh-CN/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - ：**完美协商**是一种建议你的信令流程遵循的设计模式，它在协商过程中提供了透明性，同时允许双方都是提供方或应答方，而无需进行大量的编码来区分两者。
- [信令和双向视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - ：一个教程和示例，它将一个基于 WebSocket 的聊天系统扩展为支持参与者之间的视频通话。聊天服务器的 WebSocket 连接用于 WebRTC 信令。
- [WebRTC 使用的编解码器](/zh-CN/docs/Web/Media/Formats/WebRTC_codecs)
  - ：介绍了 WebRTC 所需浏览器支持的编解码器以及各种流行浏览器支持的可选编解码器。本文还包括了一个帮助你选择最适合你需求的编解码器的指南。
- [使用 WebRTC 数据通道](/zh-CN/docs/Web/API/WebRTC_API/Using_data_channels)
  - ：本指南介绍了如何使用对等连接和相关的 {{DOMxRef("RTCDataChannel")}} 在两个对等方之间交换任意数据。
- [使用 WebRTC 与 DTMF](/zh-CN/docs/Web/API/WebRTC_API/Using_DTMF)
  - ：WebRTC 与连接到老式电话系统的网关进行交互的支持包括使用 {{DOMxRef("RTCDTMFSender")}} 接口发送 DTMF 音调。本指南展示了如何做到这一点。
- [使用 WebRTC 编码转换](/zh-CN/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - ：本指南展示了一个 Web 应用程序如何使用在工作线程中运行的 {{DOMxRef("TransformStream")}} 来修改传入和传出的 WebRTC 编码视频和音频帧。

## 教程

- [使用 WebRTC adapter.js 改善兼容性](#互操作性)
  - ：WebRTC 组织在 GitHub 上提供了 [WebRTC adapter](https://github.com/webrtc/adapter/) 来解决不同浏览器的 WebRTC 实现的兼容性问题。适配器是一个 JavaScript 包装器，使你的代码可以按照规范编写，以便在所有支持 WebRTC 的浏览器中“只需工作”。
- [一个简单的 RTCDataChannel 示例](/zh-CN/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - ：{{DOMxRef("RTCDataChannel")}} 接口是一个功能，它允许你在两个对等方之间打开一个通道，通过该通道你可以发送和接收任意数据。API 故意设计成与 [WebSocket API](/zh-CN/docs/Web/API/WebSockets_API) 类似，以便可以使用相同的编程模型。
- [使用 Peer.js 构建一个联网电话](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - ：本教程是一个逐步指南，介绍了如何使用 Peer.js 构建一个电话。

## 规范

{{Specifications}}

### WebRTC 相关协议

- [Web 实时通信的应用层协议协商](https://datatracker.ietf.org/doc/rfc8833/)
- [WebRTC 音频编解码器和处理要求](https://datatracker.ietf.org/doc/rfc7874/)
- [RTCWeb 数据通道](https://datatracker.ietf.org/doc/rfc8831/)
- [RTCWeb 数据通道协议](https://datatracker.ietf.org/doc/rfc8832/)
- [Web 实时通信（WebRTC）：媒体传输和 RTP 的使用](https://datatracker.ietf.org/doc/rfc8834/)
- [WebRTC 安全架构](https://datatracker.ietf.org/doc/rfc8827/)
- [RTCWEB 的传输](https://datatracker.ietf.org/doc/rfc8835/)

### 相关支持协议

- [交互式连接建立（ICE）：用于提供/应答协议的网络地址转换器（NAT）遍历的协议](https://datatracker.ietf.org/doc/html/rfc5245)
- [用于 NAT（STUN）的会话遍历实用工具](https://datatracker.ietf.org/doc/html/rfc5389)
- [用于会话遍历实用工具的 URI 方案（STUN）协议](https://datatracker.ietf.org/doc/html/rfc7064)
- [绕过 NAT 的中继遍历（TURN）统一资源标识符](https://datatracker.ietf.org/doc/html/rfc7065)
- [具有会话描述协议（SDP）的提供/应答模型](https://datatracker.ietf.org/doc/html/rfc3264)
- [用于 NAT（STUN）的会话遍历实用工具的第三方授权扩展](https://datatracker.ietf.org/doc/rfc7635/)

## 相关链接

- {{DOMxRef("MediaDevices")}}
- {{DOMxRef("MediaStreamEvent")}}
- {{DOMxRef("MediaStreamTrack")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MediaStream")}}
- [媒体捕捉与媒体流 API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API)
- [Firefox 多流和 Jitsi Videobridge 的重新协商](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [透过 WebRTC 雾霾与 SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Party Bus 内部：构建具有多个实时视频流和交互式图形的 Web 应用](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
- [Web 媒体技术](/zh-CN/docs/Web/Media)
