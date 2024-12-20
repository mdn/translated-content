---
title: RTCIceCandidate
slug: Web/API/RTCIceCandidate
l10n:
  sourceCommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{APIRef("WebRTC")}}

**`RTCIceCandidate`** 是 [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API) 的接口之一，表示用于建立 {{domxref("RTCPeerConnection")}} 的候选交互连接建立（{{Glossary("ICE")}}）的配置信息。

`ICE` 候选者描述了 `WebRTC` 能够与远程设备通讯的协议、路由等信息，在启动 {{domxref("RTCPeerConnection")}} 对等连接时，通常由每个连接方各自提出多个候选者，直到它们互相同意一个它们都认为是最佳的连接候选者描述。`WebRTC` 将使用该候选者描述建立连接。

更多关于 `ICE` 的工作流程，可以参考 [WebRTC 会话生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)。[WebRTC 连接交互](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)这篇文章则详细介绍了 `ICE` 的工作原理。

## 构造函数

- {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate()")}}
  - : 构造一个新的表示 ICE 候选者的 `RTCIceCandidate` 对象。根据配置对象进行可选配置。
    > [!NOTE]
    > 为了向后兼容，构造函数也接受一个包含 {{domxref("RTCIceCandidate.candidate", "candidate")}} 属性值字符串参数，以此替代配置对象。

## 实例属性

- {{domxref("RTCIceCandidate.address", "address")}} {{ReadOnlyInline}}
  - : 表示候选者的 IP 地址的字符串。
- {{domxref("RTCIceCandidate.candidate", "candidate")}} {{ReadOnlyInline}}
  - : 表示用于连接检查的候选者的传输地址的字符串。此地址的格式是在 {{RFC(5245)}} 中定义的候选者属性（`candidate-attribute`）。如果 `RTCIceCandidate` 是候选者结束（"end of candidates"）指示器，则此字符串为空字符串（`""`）。
- {{domxref("RTCIceCandidate.component", "component")}} {{ReadOnlyInline}}
  - : 表示候选者是用 `RTP` 或者 `RTCP` 的字符串，返回值有 `rtp` 或 `rtcp`，该值是来自 `candidate` 属性行的 `"component-id"` 字段。
- {{domxref("RTCIceCandidate.foundation", "foundation")}} {{ReadOnlyInline}}
  - : 返回一个包含唯一标识符的字符串，该标识符对于来自相同的 {{Glossary("STUN")}} 服务器的相同类型、共享相同的基础（ICE 代理发送候选者的地址）的候选者都是相同的。这有助于优化 ICE 的性能，因为当在两个 {{domxref("RTCIceTransport")}} 对象上出现多个候选者时，可以利用这些标识符来进行优先级排序和关联性判断。
- {{domxref("RTCIceCandidate.port", "port")}} {{ReadOnlyInline}}
  - : 表示候选者端口号的整型数值。
- {{domxref("RTCIceCandidate.priority", "priority")}} {{ReadOnlyInline}}
  - : 表示候选者优先级的长整数值。
- {{domxref("RTCIceCandidate.protocol", "protocol")}} {{ReadOnlyInline}}
  - : 表示候选者协议是 `"tcp"` 还是 `"udp"` 的字符串。
- {{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}} {{ReadOnlyInline}}
  - : 如果候选者是从另一个候选者派生的，则 `relatedAddress` 是一个包含该主机候选者的 IP 地址的字符串。对于主机候选者，此值为 `null`。
- {{domxref("RTCIceCandidate.relatedPort", "relatedPort")}} {{ReadOnlyInline}}
  - : 对于从另一个候选者派生的候选者（例如中继或反射候选者），`relatedPort` 是指示派生此候选者的候选者的端口号的数字。对于主机候选者，`relatedPort` 属性为 `null`。
- {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} {{ReadOnlyInline}}
  - : 表示候选者的媒体流标识标签的字符串，该标签在候选者关联的组件中唯一标识媒体流，如果不存在这样的关联，则为 `null`。
- {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} {{ReadOnlyInline}}
  - : 如果值不为 `null`，`sdpMLineIndex` 表示 `SDP` 中候选者关联的从零开始的媒体描述索引编号（在 [RFC 4566](https://datatracker.ietf.org/doc/html/rfc4566) 中定义）。
- {{domxref("RTCIceCandidate.tcpType", "tcpType")}} {{ReadOnlyInline}}
  - : 如果 `protocol` 是 `"tcp"`，`tcpType` 表示 TCP 候选者的类型。否则 `tcpType` 为 `null`。
- {{domxref("RTCIceCandidate.type", "type")}} {{ReadOnlyInline}}
  - : 表示候选者类型的字符串，该值为 [`RTCIceCandidate.type`](/zh-CN/docs/Web/API/RTCIceCandidate/type#值) 中列出的字符串之一。
- {{domxref("RTCIceCandidate.usernameFragment", "usernameFragment")}} {{ReadOnlyInline}}
  - : 一个包含随机生成的用户名片段（“ice-ufrag”）的字符串，ICE 与随机生成的密码（“ice-pwd”）一起用于消息完整性。你可以使用此字符串来验证 ICE 生成的代数；同一 ICE 进程的每一代将使用相同的 `usernameFragment`，即使 ICE 重新启动也是如此。

## 实例方法

- {{domxref("RTCIceCandidate.toJSON", "toJSON()")}}
  - : 返回一个包含 `RTCIceCandidate` 当前配置的 {{Glossary("JSON")}} 对象。其格式与 `candidateInfo` 对象相同，可作为可选参数传入 {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate()")}} 构造函数构造一个新的 `RTCIceCandidate` 实例。

## 示例

请参阅文章[信令和视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)，其中演示了完整过程。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
