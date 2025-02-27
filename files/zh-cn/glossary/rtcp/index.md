---
title: RTCP（RTP 控制协议）
slug: Glossary/RTCP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**RTP 控制协议**（**RTCP**）是 {{Glossary("RTP")}} 协议的伙伴。RTCP 用于提供有关 RTP 媒体流会话的控制和统计信息。

这样可以在使用底层数据包传递层传输 RTCP 信号、RTP 和媒体内容的同时，逻辑上和功能上将控制和统计包与媒体流分离。

RTCP 定期向 RTP 会话的所有参与者发送控制包，使用与传输数据包相同的机制。底层协议处理数据和控制包的多路复用，可能使用不同的网络端口传输每种类型的包。

## 参见

- [介绍实时传输协议](/zh-CN/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP 控制协议](https://zh.wikipedia.org/wiki/实时传输控制协议)
- {{RFC(3550, "RFC 3550 第 6 节", 6)}}
