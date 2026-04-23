---
title: SDP
slug: Glossary/SDP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

**SDP**（会话描述{{glossary("Protocol", "协议")}}）是一个描述 {{Glossary("P2P")}} 连接的标准，包含音视频的{{Glossary("codec", "编解码器")}}、源地址和时间信息。

下面是一个典型的 SDP 信息示例：

```plain
v=0
o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
s=
c=IN IP4 host.anywhere.com
t=0 0
m=audio 49170 RTP/AVP 0
a=rtpmap:0 PCMU/8000
m=video 51372 RTP/AVP 31
a=rtpmap:31 H261/90000
m=video 53000 RTP/AVP 32
a=rtpmap:32 MPV/90000
```

SDP 协议从不会被单独使用，而依赖于 {{Glossary("RTP")}} 和 {{Glossary("RTSP")}} 等协议。SDP 也作为 {{Glossary("WebRTC")}} 的组件之一，用于描述一个会话。

## 参见

- [WebRTC 协议](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
- 维基百科上的[会话描述协议](https://zh.wikipedia.org/wiki/会话描述协议)
