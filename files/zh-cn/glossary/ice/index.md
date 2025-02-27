---
title: 交互式连接建立（ICE）
slug: Glossary/ICE
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**ICE**（_交互式连接建立_）是 {{glossary("WebRTC")}}（与其他技术一起）用于连接两个对等端的框架，不受网络拓扑结构的限制（通常用于视频或语音聊天）。这个协议让两端能够互相找到对方并建立一个连接，即便它们都使用了网络地址转译（{{glossary("NAT")}}）去跟内网的其他设备共享同一个公网 IP 地址。

这个框架的算法是寻找连接两个对等节点的最低延迟路径，通常采用以下顺序寻找：

1. 直接的 UDP 连接（当且仅当在这种情况下，{{glossary("STUN")}} 服务器会被用来查找对等端面向网络的地址）。
2. 直接的 TCP 连接，通过 HTTP 端口
3. 直接的 TCP 连接，通过 HTTPS 端口
4. 间接的连接通过中继器／{{glossary("TURN")}} 服务器（如果直接连接方式失败，例如，如果一个对等端位于阻止穿越 NAT 的防火墙后面）

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)，使用 ICE 的主要网络相关协议
- [WebRTC 协议](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
- {{rfc("5245")}}，IETF 关于 ICE 的规范
- {{domxref("RTCIceCandidate")}}，表现 ICE 候选的接口
