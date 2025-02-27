---
title: WebRTC connectivity
slug: Web/API/WebRTC_API/Connectivity
---

{{DefaultAPISidebar("WebRTC")}}

现在我们已经单独介绍了协议，我们可以将它们放在一起。本文介绍了 WebRTC 各种相关协议如何相互交互，以便在对等体之间创建连接和传输数据和/或媒体。

> [!NOTE]
> 这个页面需要对结构完整性和内容完整性进行大量重写。这里有很多信息，但是组织混乱，现在这里跟个垃圾场一样。

## 什么是提议/应答和信号通道？

不幸的是，WebRTC 中间无法创建没有某种服务器的连接。我们称之为信号通道。无论是通过电子邮件，明信片还是一只信鸽...，都可以通过任何通信方式交换信息，这取决于你。

我们需要交换的信息是提议和应答，其中仅包含下面提到的 SDP。

将作为连接发起者的同伴 A 将创建一个提议。然后他们将使用所选择的信号通道将此提议发送给对等体 B. 对等体 B 将从信号通道接收提议并创建应答。然后，它们将沿着信号通道发送回对等体 A。

### 会话描述

WebRTC 连接上的端点配置称为**会话描述**。该描述包括关于要发送的媒体类型，其格式，正在使用的传输协议，端点的 IP 地址和端口以及描述媒体传输端点所需的其他信息的信息。使用**会话描述协议**({{Glossary("SDP")}}) 来交换和存储该信息; 如果你想要有关 SDP 数据格式的详细信息，可以在{{RFC(2327)}}中找到。

当用户对另一个用户启动 WebRTC 调用时，将创建一个称为**提议**(offer) 的特定描述。该描述包括有关呼叫者建议的呼叫配置的所有信息。接收者然后用**应答**(answer) 进行响应，这是他们对呼叫结束的描述。以这种方式，两个设备彼此共享以便交换媒体数据所需的信息。该交换是使用交互式连接建立 (ICE)({{Glossary("ICE")}}处理的，这是一种协议，即使两个设备通过网络地址转换 ({{Glossary( "NAT")}})。

然后，每个对等端保持两个描述：描述本身的**本地描述**和描述呼叫的远端的**远程描述**。

在首次建立呼叫时，还可以在呼叫格式或其他配置需要更改的任何时候执行提议/应答过程。无论是新呼叫还是重新配置现有的呼叫，这些都是交换提议和回答所必需的基本步骤，暂时忽略了 ICE 层：

1. 呼叫者通过 {{domxref("navigator.mediaDevices.getUserMedia()")}} 捕捉本地媒体。
2. 呼叫者创建一个`RTCPeerConnection` 并调用 {{domxref("RTCPeerConnection.addTrack()")}} (注： `addStream` 已经过时。)
3. 呼叫者调用 {{domxref("RTCPeerConnection.createOffer()")}} 来创建一个提议 (offer).
4. 呼叫者调用 {{domxref("RTCPeerConnection.setLocalDescription()")}} 将提议 (Offer) 设置为本地描述 (即，连接的本地描述).
5. setLocalDescription() 之后，呼叫者请求 STUN 服务创建 ice 候选 (ice candidates)
6. 呼叫者通过信令服务器将提议 (offer) 传递至 本次呼叫的预期的接受者。
7. 接受者收到了提议 (offer) 并调用 {{domxref("RTCPeerConnection.setRemoteDescription()")}} 将其记录为远程描述 (也就是连接的另一端的描述).
8. 接受者做一些可能需要的步骤结束本次呼叫：捕获本地媒体，然后通过{{domxref("RTCPeerConnection.addTrack()")}}添加到连接中。
9. 接受者通过 {{domxref("RTCPeerConnection.createAnswer()")}} 创建一个应答。
10. 接受者调用 {{domxref("RTCPeerConnection.setLocalDescription()")}} 将应答 (answer) 设置为本地描述。此时，接受者已经获知连接双方的配置了。
11. 接受者通过信令服务器将应答传递到呼叫者。
12. 呼叫者接受到应答。
13. 呼叫者调用 {{domxref("RTCPeerConnection.setRemoteDescription()")}} 将应答设定为远程描述。如此，呼叫者已经获知连接双方的配置了。

### 待定的和当前描述

进一步了解该过程，我们发现 localDescription 和 remoteDescription(返回这两个描述的属性 ) 并不像外观那样简单。因为在重新协商期间，提议可能会被拒绝，因为它提出了不兼容的格式，每个端点都有能力提出一种新的格式，但是实际上不会切换到另一个对等体，直到它被其他对等体接受为止。因此，WebRTC 使用待定和当前的描述。

**当前描述**(由 {{domxref("RTCPeerConnection.currentLocalDescription")}} 和 {{domxref("RTCPeerConnection.currentRemoteDescription")}} 属性返回 ) 表示连接实际使用的描述。这是双方已经完全同意使用的最新连接。

**待定的描述**(由 {{domxref("RTCPeerConnection.pendingLocalDescription")}} 和 {{domxref("RTCPeerConnection.pendingRemoteDescription")}} 返回 ) 表示当 分别调用 setLocalDescription() 或 setRemoteDescription()。

当读取描述 ( {{domxref("RTCPeerConnection.localDescription")}} 和 {{domxref("RTCPeerConnection.remoteDescription")}} ) 返回时，返回的值是 pendingLocalDescription / pendingRemoteDescription 的值，如果有待处理的描述 ( 也就是说，待处理描述不为 null ); 否则，返回当前描述 (currentLocalDescription / currentRemoteDescription )。

通过调用 setLocalDescription() 或 setRemoteDescription() 更改描述时，将指定的描述设置为待定描述，WebRTC 层开始评估是否可以接受。一旦建议的描述已经达成一致，currentLocalDescription 或 currentRemoteDescription 的值将更改为待处理描述，并且待处理的描述再次设置为 null，表示没有待处理的描述。

> [!NOTE]
> pendingLocalDescription 不仅包含正在考虑的提议或答案，而且自从提议或应答以来已经收集到的任何本地 ICE 候选人都被创建。类似地，pendingRemoteDescription 包括通过调用 {{domxref("RTCPeerConnection.addIceCandidate()")}} 提供的任何远程 ICE 候选。

有关这些属性和方法的更多细节，请参阅各个文章。

## 什么是 ICE 候选地址？

除了交换关于媒体的信息 (上面提到的 Offer / Answer 和 SDP ) 中，对等体必须交换关于网络连接的信息。这被称为 ICE 候选者，并详细说明了对等体能够直接或通过 TURN 服务器进行通信的可用方法。通常，每个对点将优先提出最佳的 ICE 候选，逐次尝试到不佳的候选中。理想情况下，候选地址是 UDP(因为速度更快，媒体流能够相对容易地从中断恢复 )，但 ICE 标准也允许 TCP 候选。

> [!NOTE]
> 一般来说，使用 TCP 的 ICE 候选者只有当 UDP 不可用或被限制使其不适用于媒体流时才会被使用。不是所有的浏览器都支持 ICE over TCP。

## 整个交换的复杂图表

![展示 WebRTC 完整流程的架构图。](webrtc-complete-diagram.png)

[原始来源](https://hacks.mozilla.org/2013/07/webrtc-and-the-ocean-of-acronyms/)
