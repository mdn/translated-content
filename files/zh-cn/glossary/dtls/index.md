---
title: 数据报传输层安全（DTLS）
slug: Glossary/DTLS
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**数据报传输层安全**（**DTLS**）是一种用于保护基于数据报通信的协议。它基于面向流的传输层安全（{{Glossary("TLS")}}），提供类似的安全级别。作为一种数据报协议，DTLS 不保证消息的顺序传递，甚至不保证消息会被传递。然而，DTLS 也获得了数据报协议的好处，特别是更低的开销和减少的延迟。

这些特性在 DTLS 最常用的一个领域中尤其有用：{{Glossary("WebRTC")}}。所有与 WebRTC 相关的协议都需要使用 DTLS 加密通信，包括 {{Glossary("SCTP")}}、{{Glossary("RTP", "SRTP")}} 和 {{Glossary("STUN")}}。

## 参见

- 维基百科上的[数据报传输层安全](https://zh.wikipedia.org/wiki/資料包傳輸層安全)
- 规范

  - {{RFC(9147, "数据报传输层安全（DTLS）协议版本 1.3")}}
  - {{RFC(6347, "数据报传输层安全版本 1.2")}}

- 相关规范

  - {{RFC(5763, "使用 DTLS 建立安全实时传输协议（SRTP）安全上下文的框架")}}
  - {{RFC(5764, "用于为安全实时传输协议（SRTP）建立密钥的 DTLS 扩展")}}
  - {{RFC(6083, "用于流控制传输协议（SCTP）的 DTLS")}}
  - {{RFC(8261, "流控制传输协议（SCTP）数据包的 DTLS 封装")}}
  - {{RFC(7350, "将 DTLS 用作会话穿越实用程序（STUN）的传输")}}
  - {{RFC(7925, "物联网的 TLS / DTLS 配置文件")}}
