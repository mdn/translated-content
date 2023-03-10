---
title: ICE
slug: Glossary/ICE
---

**ICE** (_交互式连接建立_) 是一个被{{glossary("WebRTC")}}使用的框架（跟其他技术在一起使用），它被用在两端之间的连接，不管是何种网络类型 (通常用在视频或语音聊天)。这个协议让两端能够互相找到对方并建立一个连接，即便它们都使用了网络地址转译 ({{glossary("NAT")}}) 去跟内网的其他设备共享了一个公网 IP 地址。

这个框架的算法是寻找最低等待时间的路径去连接两端，通常采用以下顺序寻找：

1. 直接的 UDP 连接 (在且仅在这种情况下，一个{{glossary("STUN")}}的服务器会被用来查找主机端面向网络的地址)。
2. 直接的 TCP 连接，通过 HTTP 端口
3. 直接的 TCP 连接，通过 HTTPS 端口
4. 间接的连接通过中继器／{{glossary("TURN")}}服务器 (如果一个直接连接失败了，比如当一个主机端位于防火墙之后阻止了 NAT 穿越)

## 学习更多

### 通用知识

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API), 重要的使用 ICE 的网络相关协议
- [WebRTC 协议](/zh-CN/docs/Web/API/WebRTC_API/Protocols)

### 技术参考

- {{rfc("5245")}}, ICE 的 IETF 详细说明书
- {{domxref("RTCIceCandidate")}}, ICE candidate 的展现接口
