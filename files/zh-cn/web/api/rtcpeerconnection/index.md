---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: 31fa0bbc78b87bf3ec7559906515fcd3dfde68de
---

{{APIRef('WebRTC')}}

**`RTCPeerConnection`** 接口表示本地端和远程对等端之间的 WebRTC 连接。它提供了创建远程对等端连接、维护和监视连接，以及在连接不再需要时关闭连接的方法。

{{InheritanceDiagram}}

## 构造函数

- {{DOMxRef("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}}
  - : 返回一个新的 `RTCPeerConnection` 实例，表示本地设备和远程对等端之间的连接。

## 实例属性

_也从 {{domxref("EventTarget")}} 继承属性。_

- {{DOMxRef("RTCPeerConnection.canTrickleIceCandidates", "canTrickleIceCandidates")}} {{ReadOnlyInline}}
  - : 返回一个布尔值，指示远程对等方是否可以接受[涓流 ICE 候选](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice)。
- {{DOMxRef("RTCPeerConnection.connectionState", "connectionState")}} {{ReadOnlyInline}}
  - : 返回表示连接当前状态的下列字符串之一：`new`（新建）、`connecting`（连接中）、`connected`（已连接）、`disconnected`（已断开连接）、`failed`（连接失败）或 `closed`（已关闭）。
- {{DOMxRef("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}} {{ReadOnlyInline}}
  - : 返回一个 {{DOMxRef("RTCSessionDescription")}} 对象，该对象描述自上次 `RTCPeerConnection` 完成协商并连接到远程对等设备后，最近一次成功协商的连接的本地端。同时也可能包括该描述所代表的提议或应答首次初始化的时候通过 ICE 代理生成的 ICE 候选项列表。
- {{DOMxRef("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}} {{ReadOnlyInline}}
  - : 返回一个 {{DOMxRef("RTCSessionDescription")}} 对象，该对象描述自上次 `RTCPeerConnection` 完成协商并连接到远程对等设备后，最近一次成功协商的连接的远程端。同时也可能包括该描述所代表的提议或应答首次初始化的时候通过 ICE 代理生成的 ICE 候选项列表。
- {{DOMxRef("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} {{ReadOnlyInline}}
  - : 返回与此 RTCPeerConnection 关联的 ICE 代理的状态字符串，可以是下列值之一：`new`、`checking`、`connected`、`completed`、`failed`、`disconnected` 或 `closed`。
- {{DOMxRef("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} {{ReadOnlyInline}}
  - : 返回一个描述连接的 ICE 收集状态的字符串。该属性可以检测 ICE 候选者是否已经收集完成，可能返回值有：`new`（新的）、`gathering`（收集中）、`complete`（完成）。
- {{DOMxRef("RTCPeerConnection.localDescription", "localDescription")}} {{ReadOnlyInline}}
  - : 返回一个 {{DOMxRef("RTCSessionDescription")}}，代表这条连接的本地端的会话描述。如果本地的会话描述还没有被设置，返回 `null`。
- {{DOMxRef("RTCPeerConnection.peerIdentity", "peerIdentity")}} {{ReadOnlyInline}}
  - : 返回一个兑现为标识远程对等端 {{DOMxRef("RTCIdentityAssertion")}}（其包含标识对等端身份的字符串）的 {{jsxref("Promise")}}。一旦这个 `Promise` 成功兑现，得到的身份信息就是目标对等端的身份信息，并且在连接期间不会改变。
- {{DOMxRef("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}} {{ReadOnlyInline}}
  - : 返回一个 {{DOMxRef("RTCSessionDescription")}} 对象，描述本地连接端的待定配置更改。这不是描述当前连接的状态，而是描述可能将存在的状态。
- {{DOMxRef("RTCPeerConnection.pendingRemoteDescription", "pendingRemoteDescription")}} {{ReadOnlyInline}}
  - : 返回一个 {{DOMxRef("RTCSessionDescription")}} 对象，描述远程连接端的待定配置更改。这不是描述当前连接的状态，而是描述可能将存在的状态。
- {{DOMxRef("RTCPeerConnection.remoteDescription", "remoteDescription")}} {{ReadOnlyInline}}
  - : 返回一个 {{DOMxRef("RTCSessionDescription")}} 对象，描述连接远端的会话，包括配置和媒体信息。如果当前尚未设置，将返回 `null`。
- {{DOMxRef("RTCPeerConnection.sctp", "sctp")}} {{ReadOnlyInline}}
  - : 返回一个 {{DOMxRef("RTCSctpTransport")}} 对象，该对象描述了发送和接收 SCTP 数据所使用的 {{Glossary("SCTP")}} 传输层。如果 SCTP 尚未协商完成，则该值为 `null`。
- {{DOMxRef("RTCPeerConnection.signalingState", "signalingState")}} {{ReadOnlyInline}}
  - : 返回一个字符串，说明在连接或重新连接另一个对等端时，连接本地端的信令进程的状态。它是以下值之一：`stable`（稳定）、`have-local-offer`（有本地提议）、`have-remote-offer`（有远程提议）、`have-local-pranswer`（有本地预答）、`have-remote-pranswer`（有远程预答）、`closed`（关闭）。

## 静态方法

- {{DOMxRef("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}}
  - : 创建一个 X.509 证书及其对应的私钥，返回一个 {{jsxref("Promise")}} 对象，其在证书生成后将会兑现为生成的新 {{DOMxRef("RTCCertificate")}}。

## 实例方法

_也从 {{DOMxRef("EventTarget")}} 继承方法。_

- {{DOMxRef("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
  - : 向 `RTCPeerConnection` 的远程描述中添加一个新的远程候选者，描述连接的远程端的状态。
- {{DOMxRef("RTCPeerConnection.addTrack", "addTrack()")}}
  - : 向要传输给对方的轨道集合中添加一个新的 {{DOMxRef("MediaStreamTrack")}}。
- {{DOMxRef("RTCPeerConnection.addTransceiver", "addTransceiver()")}}
  - : 创建一个新的 {{DOMxRef("RTCRtpTransceiver")}} 并将其添加到与连接关联的收发器集合中。每个收发器代表一个同时关联 {{DOMxRef("RTCRtpSender")}} 和 {{DOMxRef("RTCRtpReceiver")}} 的双向流。
- {{DOMxRef("RTCPeerConnection.close", "close()")}}
  - : 关闭当前连接，释放所有资源。
- {{DOMxRef("RTCPeerConnection.createAnswer", "createAnswer()")}}
  - : 发起创建 {{Glossary("SDP")}} 应答（answer），以响应来自远程对等方的提议（offer），在 `WebRTC` 连接的提议/应答协商过程中。应答包含会话中已附加的媒体、编解码器和浏览器支持的其它选项，以及已收集的 {{Glossary("ICE")}} 候选者的信息。
- {{DOMxRef("RTCPeerConnection.createDataChannel", "createDataChannel()")}}
  - : 创建一个与远程对等连接的新通道，该通道可以传输任何类型的数据。例如图像、文件传输、文本聊天、游戏更新包等。
- {{DOMxRef("RTCPeerConnection.createOffer", "createOffer()")}}
  - : 创建一个信息 {{Glossary("SDP")}} 提议（offer），以启动与远程对等方的新 WebRTC 连接。SDP 提议（offer）的内容包括已附加到 WebRTC 会话、编解码器和浏览器支持的选项的任何 {{DOMxRef("MediaStreamTrack")}} 对象的信息，以及 {{Glossary("ICE")}} 代理已收集的任何候选信息，目的是通过信令信道发送给潜在对等方，以请求连接或更新现有连接的配置。
- {{DOMxRef("RTCPeerConnection.getConfiguration", "getConfiguration()")}}
  - : 返回一个包含当前连接配置的对象。
- {{DOMxRef("RTCPeerConnection.getIdentityAssertion", "getIdentityAssertion()")}}
  - : 该方法返回一个 {{jsxref("Promise")}} ，该 `Promise` 兑现为编码为字符串的身份断言。仅在 {{DOMxRef("RTCPeerConnection.signalingState", "signalingState")}} 的值不为 `closed` 时解析有效。
- {{DOMxRef("RTCPeerConnection.getReceivers", "getReceivers()")}}
  - : 返回 {{DOMxRef("RTCRtpReceiver")}} 对象数组，每个对象都代表一个 {{Glossary("RTP")}} 接收器。
- {{DOMxRef("RTCPeerConnection.getSenders", "getSenders()")}}
  - : 返回 {{DOMxRef("RTCRtpSender")}} 对象数组，每个对象都代表负责传输单个轨道数据的 {{Glossary("RTP")}} 发送器。
- {{DOMxRef("RTCPeerConnection.getStats", "getStats()")}}
  - : 返回一个 {{jsxref("Promise")}} ，它兑现为有关整个连接或特定 {{DOMxRef("MediaStreamTrack")}} 的统计数据。
- {{DOMxRef("RTCPeerConnection.getTransceivers", "getTransceivers()")}}
  - : 返回用于在连接上发送和接收数据的所有 {{DOMxRef("RTCRtpTransceiver")}} 对象的列表。
- {{DOMxRef("RTCPeerConnection.removeTrack", "removeTrack()")}}
  - : 停止从指定的轨道发送媒体数据，该方法不会从发送者列表（由 {{DOMxRef("RTCPeerConnection.getSenders", "getSenders()")}} 报告）中删除相应的 {{DOMxRef("RTCRtpSender")}} 对象。如果轨道已经停止或者不在连接的发送者列表中，此方法没有效果。
- {{DOMxRef("RTCPeerConnection.restartIce", "restartIce()")}}
  - : 允许轻松地要求在连接的两端重新进行 {{Glossary("ICE")}} 候选人收集，这简化了通过允许调用方或接收方使用相同的方法来触发 {{Glossary("ICE")}} 重启（重新收集候选者的）过程。
- {{DOMxRef("RTCPeerConnection.setConfiguration", "setConfiguration()")}}
  - : 根据指定对象中的值设置连接的当前配置信息。这样你就可以更改连接使用的 {{Glossary("ICE")}} 服务器以及使用的传输策略。
- {{DOMxRef("RTCPeerConnection.setIdentityProvider", "setIdentityProvider()")}}
  - : 将身份供应商（IdP）设置为参数中给出的三元组：名称（`name`）、用于与其通信的协议（`protocol`）和用户名（`username`），其中 `protocol` 和 `username` 为可选参数。
- {{DOMxRef("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}
  - : 修改与连接关联的本地描述，此描述指定连接的本地端的连接属性，包括媒体格式。此方法返回一个 {{jsxref("Promise")}}, 配置修改成功后，该 `Promise` 状态才会变更为 `fulfilled`，这是一个异步操作。
- {{DOMxRef("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}
  - : 修改与连接关联的远程描述，此描述指定连接的远程端的连接属性，包括媒体格式。此方法返回一个 {{jsxref("Promise")}}, 配置修改成功后，该 `Promise` 状态才会变更为 `fulfilled`，这是一个异步操作。

## 废弃方法

- {{DOMxRef("RTCPeerConnection.addStream", "addStream()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 添加 {{DOMxRef("MediaStream")}} 作为本地音频或视频源。不应使用这种过时的方法，而应针对希望发送到远程对等设备的每个轨道调用一次 {{DOMxRef("RTCPeerConnection.addTrack", "addTrack()")}}。
- {{DOMxRef("RTCPeerConnection.createDTMFSender", "createDTMFSender()")}} {{Deprecated_Inline}}
  - : 创建一个新的 {{DOMxRef("RTCDTMFSender")}}，并与特定的 {{DOMxRef("MediaStreamTrack")}} 相关联，以便通过连接发送 {{Glossary("DTMF")}} 电话信令。
- {{DOMxRef("RTCPeerConnection.removeStream", "removeStream()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 移除作为本地音频或视频源的 {{DOMxRef("MediaStream")}}。由于该方法已过时，应改用 {{DOMxRef("RTCPeerConnection.removeTrack", "removeTrack()")}}。

## 事件

使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 或将事件监听器分配给此接口的 `oneventname` 属性，即可监听这些事件。

- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : 当连接 `RTCPeerConnection` 状态改变时触发。
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : 当远程端添加 {{domxref("RTCDataChannel")}} 至连接时触发。
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : 当接收到新的 ICE 候选者时触发。
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : 当收集 {{Glossary("ICE")}} 连接候选者时发生错误触发。
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : 当与 {{Glossary("ICE")}} 连接状态发生变更时触发。
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : 当 {{Glossary("ICE")}} 的收集状态 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} 发生变更时触发，状态值表示 ICE 协商状态：`new`（尚未开始协商）、`gathering`（开始收集候选者）、`completed`（协商完成）。
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : 当 {{Glossary("ICE")}} 连接需要协商或重新协商时触发，在第一次打开连接时或者网络发生变更时都会触发该事件，接收方应通过创建提议并将其发送给另一对等方来进行响应。
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : 当连接的 {{Glossary("ICE")}} 信令状态发生变更时触发。
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : 当新的轨道添加到连接中的 {{domxref("RTCRtpReceiver")}} 实例时触发。

## 废弃事件

- {{domxref("RTCPeerConnection.addstream_event", "addstream")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 当新的 {{domxref("MediaStream")}} 添加到连接时触发。与其监听这个过时的事件，不如监听 {{domxref("RTCPeerConnection.track_event", "track")}} 事件；每向连接添加一个 {{domxref("MediaStreamTrack")}}，就会触发一次。
- {{domxref("RTCPeerConnection.removestream_event", "removestream")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 当 {{domxref("MediaStream")}} 被移除时触发。与其监听这个过时的事件，不如在每个流上监听 {{domxref("MediaStream.removetrack_event", "removetrack")}} 事件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [WebRTC 入门](https://web.developers.google.cn/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom)：Node.js HTML 视频捕获，点对点视频和文件共享应用（[GitHub 上的源代码](https://github.com/chrisjohndigital/TutorRoom)）
