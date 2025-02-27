---
title: QUIC
slug: Glossary/QUIC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**QUIC** 是一个基于 UDP 实现的多路传输协议。它在 HTTP/3 中作为传输层，取代了 {{Glossary("TCP")}}。

QUIC 旨在为 HTTP 连接提供更快的建立和更低的延迟。具体来说：

- 在 TCP 中，初始 TCP 握手后可以选择进行 TLS 握手，数据传输前必须完成 TLS 握手。由于现在几乎所有连接都使用 TLS，QUIC 将 TLS 握手整合到初始 QUIC 握手中，减少了建立连接时必须交换的消息数量。

- HTTP/2 是一个多路复用协议，允许多个 HTTP 事务同时进行。然而，这些事务是在单个 TCP 连接上进行多路复用的，这意味着 TCP 层的数据包丢失和随后的重传可能会阻塞所有事务。QUIC 通过在 UDP 上运行并为每个流实现数据包丢失检测和重传，避免了这种情况，这意味着数据包丢失只会阻塞丢失数据包的特定流。

## 参见

- {{rfc("9000", "QUIC 规范")}}
- {{rfc("9114", "HTTP/3 规范")}}
