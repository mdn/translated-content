---
title: RTP（实时传输协议）和 SRTP（安全 RTP）
slug: Glossary/RTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**实时传输协议**（**RTP**）是一种用于描述如何在实时情况下从一个端点传输各种媒体（音频、视频）到另一个端点的网络协议。RTP 适用于视频流应用、基于 {{Glossary("IP")}} 的电话应用（如 Skype）和会议技术。

安全版本的 RTP，**安全 RTP**（**SRTP**），被用于 [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)，使用加密和认证来最小化拒绝服务攻击和安全漏洞的风险。

RTP 很少单独使用；相反，它通常与其他协议（如 {{Glossary("RTSP")}} 和 {{Glossary("SDP")}}）一起使用。

## 参见

- [介绍实施传输协议](/zh-CN/docs/Web/API/WebRTC_API/Intro_to_RTP)
- 维基百科上的 [RTP](https://zh.wikipedia.org/wiki/实时传输协议)
- {{RFC(3550)}}（其中一份具体介绍 RTP 协议如何运作的文档）
