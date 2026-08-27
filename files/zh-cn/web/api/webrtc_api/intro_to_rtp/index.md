---
title: 实时传输协议（RTP）介绍
slug: Web/API/WebRTC_API/Intro_to_RTP
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

**实时传输协议**（**RTP**，Real-time Transport Protocol），定义于 {{RFC(3550)}}，是一个 IETF 标准协议，是为需要实时优先级的数据交换提供实时连接。本文概述了什么是 RTP 以及它在 WebRTC 上下文中的工作原理。

> [!NOTE]
> WebRTC 实际上使用的是 **SRTP**（安全实时传输协议，Secure Real-time Transport Protocol）来确保交换数据的安全性和身份验证。

对于 WebRTC 来说，将延迟降至最低尤为重要，因为面对面的通信需要尽可能低的{{Glossary("latency", "延迟")}}。从一个用户说话到另一个用户听到之间的时间延迟越大，就越容易出现串音和其他形式的混乱。

## RTP 的主要特性

在探讨 RTP 在 WebRTC 上下文中的使用之前，有必要先了解 RTP 能做什么和不能做什么。RTP 是一种数据传输协议，其任务是在当前条件下尽可能高效地在两个端点之间传输数据。这些条件可能受到从网络栈底层到物理网络连接、中间网络、远程端点的性能、噪声水平、流量水平等各种因素的影响。

由于 RTP 是一种数据传输协议，因此它由紧密相关的 **RTP 控制协议**（**RTCP**，RTP Control Protocol）增强，后者定义于 {{RFC(3550, "", 6)}}。RTCP 增加了包括**服务质量**（**QoS**，Quality of Service）监控、参与者信息共享等功能。它不足以完全管理用户、成员资格、权限等，但为不受限制的多用户通信会话提供了所需的基础功能。

RTCP 与 RTP 定义在同一份 RFC 中，这一事实本身就说明了这两个协议之间的紧密相关性。

### RTP 的能力

RTP 在 WebRTC 方面的主要优势包括：

- 通常具有较低的延迟。
- 数据包带有序列号和时间戳，以便在乱序到达时重新组装。这使得使用 RTP 发送的数据可以在不保证顺序甚至不保证送达的传输层上传输。
- 这意味着 RTP 可以（但并非必须）在 {{Glossary("UDP")}} 之上使用，以利用其性能、多路复用和校验和特性。
- RTP 支持多播；虽然这对 WebRTC 来说还不重要，但未来当 WebRTC（希望）增强以支持多用户对话时，这一点可能会变得很重要。
- RTP 不局限于音视频通信。它可用于任何形式的连续或活动数据传输，包括数据流、活动状态或状态显示更新，以及控制和测量信息传输。

### RTP 不能做的事情

RTP 本身并不提供所有功能，因此 WebRTC 也使用了其他协议。RTP 缺少的一些重要功能包括：

- RTP *不*保证[**服务质量**](https://zh.wikipedia.org/wiki/服务质量)（**QoS**）。
- 虽然 RTP 旨在用于延迟敏感的场景，但它本身并不提供任何确保 QoS 的功能。相反，它仅提供必要的信息，以便在协议栈的其他地方实现 QoS。
- RTP 不处理可能需要的资源分配或预留。

在涉及 WebRTC 的情况下，这些问题在 WebRTC 基础设施的各个地方得到处理。例如，RTCP 负责 QoS 监控。

## RTCPeerConnection 与 RTP

每个 {{domxref("RTCPeerConnection")}} 都有方法提供对服务于该对等连接的 RTP 传输列表的访问。这些对应于 `RTCPeerConnection` 支持的以下三种传输类型：

- {{domxref("RTCRtpSender")}}
  - : `RTCRtpSender` 负责将 {{domxref("MediaStreamTrack")}} 数据编码并传输到远程对等端。可以通过调用 {{domxref("RTCPeerConnection.getSenders()")}} 获取给定连接的发送器。
- {{domxref("RTCRtpReceiver")}}
  - : `RTCRtpReceiver` 提供检查和获取传入 `MediaStreamTrack` 数据信息的能力。可以通过调用 {{domxref("RTCPeerConnection.getReceivers()")}} 获取连接的接收器。
- {{domxref("RTCRtpTransceiver")}}
  - : `RTCRtpTransceiver` 是一对 RTP 发送器和 RTP 接收器，它们共享一个 SDP `mid` 属性，这意味着它们共享相同的 SDP 媒体 m 行（代表双向 SRTP 流）。这些由 {{domxref("RTCPeerConnection.getTransceivers()")}} 方法返回，每个 `mid` 和收发器一一对应，`mid` 对于每个 `RTCPeerConnection` 是唯一的。

### 利用 RTP 实现“保持”功能

由于 `RTCPeerConnection` 的流是使用 RTP 和[上述](#rtcpeerconnection_与_rtp)接口实现的，因此你可以利用这种访问权限来调整流的内部机制。其中最简单的做法之一是实现“保持”功能，即通话中的参与者可以点击按钮关闭麦克风，开始向另一个对等端播放音乐，并停止接收传入的音频。

> [!NOTE]
> 本示例使用了现代 JavaScript 特性，包括[异步函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)和 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 表达式。这极大地简化并提高了处理 WebRTC 方法返回的 promise 的代码的可读性。

在下面的示例中，我们将开启和关闭"保持"模式的对等端称为本地对等端，而处于保持状态的用户称为远程对等端。

#### 激活保持模式

##### 本地对等端

当本地用户决定启用保持模式时，会调用下面的 `enableHold()` 方法。它接受一个 {{domxref("MediaStream")}} 作为输入，其中包含在通话保持期间播放的音频。

```js
async function enableHold(audioStream) {
  try {
    await audioTransceiver.sender.replaceTrack(audioStream.getAudioTracks()[0]);
    audioTransceiver.receiver.track.enabled = false;
    audioTransceiver.direction = "sendonly";
  } catch (err) {
    /* 处理错误 */
  }
}
```

[`try`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 块中的三行代码执行以下步骤：

1. 将其输出音频轨道替换为包含等待音乐的 {{domxref("MediaStreamTrack")}}。
2. 禁用传入的音频轨道。
3. 将音频收发器切换为仅发送模式。

这会触发 `RTCPeerConnection` 的重新协商，通过向其发送 {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 事件，你的代码会据此使用 {{domxref("RTCPeerConnection.createOffer")}} 生成 SDP 提议，并通过信令服务器将其发送给远程对等端。

`audioStream` 包含用于替代本地对等端麦克风音频的音频，可以来自任何地方。一种可能的方法是使用隐藏的 {{HTMLElement("audio")}} 元素，并使用 {{domxref("HTMLMediaElement.captureStream", "HTMLAudioElement.captureStream()")}} 获取其音频流。

##### 远程对等端

在远程对等端，当我们收到方向设置为 `"sendonly"` 的 SDP 提议时，我们使用 `holdRequested()` 方法处理它，该方法接受一个 SDP 提议字符串作为输入。

```js
async function holdRequested(offer) {
  try {
    await peerConnection.setRemoteDescription(offer);
    await audioTransceiver.sender.replaceTrack(null);
    audioTransceiver.direction = "recvonly";
    await sendAnswer();
  } catch (err) {
    /* 处理错误 */
  }
}
```

这里执行的步骤是：

1. 通过调用 {{domxref("RTCPeerConnection.setRemoteDescription()")}} 将远程描述设置为指定的 `offer`。
2. 将音频收发器的 {{domxref("RTCRtpSender")}} 的轨道替换为 `null`，表示没有轨道。这会停止在收发器上发送音频。
3. 将音频收发器的 {{domxref("RTCRtpTransceiver.direction", "direction")}} 属性设置为 `"recvonly"`，指示收发器仅接收音频而不发送任何音频。
4. 使用名为 `sendAnswer()` 的方法生成并发送 SDP 应答，该方法使用 {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} 生成应答，然后将生成的 SDP 通过信令服务发送给另一个对等端。

#### 停用保持模式

##### 本地对等端

当本地用户点击界面控件以禁用保持模式时，会调用 `disableHold()` 方法来开始恢复常规功能。

```js
async function disableHold(micStream) {
  await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
  audioTransceiver.receiver.track.enabled = true;
  audioTransceiver.direction = "sendrecv";
}
```

这逆转了 `enableHold()` 中的步骤，具体如下：

1. 音频收发器的 `RTCRtpSender` 的轨道被替换为指定流的第一个音频轨道。
2. 收发器的传入音频轨道被重新启用。
3. 音频收发器的方向设置为 `"sendrecv"`，表示它应恢复发送和接收音频流，而不是仅发送。

就像启用保持模式时一样，这会再次触发协商，导致你的代码向远程对等端发送新的提议。

##### 远程对等端

当远程对等端接收到 `"sendrecv"` 提议时，它会调用其 `holdEnded()` 方法：

```js
async function holdEnded(offer, micStream) {
  try {
    await peerConnection.setRemoteDescription(offer);
    await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
    audioTransceiver.direction = "sendrecv";
    await sendAnswer();
  } catch (err) {
    /* 处理错误 */
  }
}
```

这里 `try` 块中执行的步骤是：

1. 通过调用 `setRemoteDescription()` 将接收到的提议存储为远程描述。
2. 使用音频收发器的 `RTCRtpSender` 的 {{domxref("RTCRtpSender.replaceTrack", "replaceTrack()")}} 方法将传出音频轨道设置为麦克风音频流的第一个轨道。
3. 收发器的方向设置为 `"sendrecv"`，表示其应恢复发送和接收音频。

从此时起，麦克风重新启用，远程用户再次能够听到本地用户的声音，也可以与本地用户通话。

## 参见

- [WebRTC 连接性](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)
- [WebRTC 协议介绍](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
