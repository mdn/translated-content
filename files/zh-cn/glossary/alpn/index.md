---
title: 应用层协议协商（ALPN）
slug: Glossary/ALPN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

**应用层协议协商**（**Application-Layer Protocol Negotiation**，简称 **ALPN**）是由 [RFC 7301](https://www.rfc-editor.org/rfc/rfc7301) 定义的一个 {{Glossary("TLS")}} 扩展，用于在协商加密连接时识别应用层协议，避免了额外的往返通讯开销。

| 协议                                        | 标识符字节序列                                          |
| ------------------------------------------- | ------------------------------------------------------- |
| {{Glossary("HTTP", "HTTP/1.1")}}            | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31`（“http/1.1”） |
| {{Glossary("HTTP 2", "HTTP/2")}}            | `0x68 0x32`（“h2”）                                     |
| 基于明文 {{Glossary("TCP")}} 的 HTTP/2 协议 | `0x68 0x32 0x63`（“h2c”）                               |
| {{Glossary("HTTP 3", "HTTP/3")}}            | `0x68 0x33`（“h3”）                                     |

## 参见

- [性能资源计时 `nextHopProtocol`](/zh-CN/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) 属性
- [性能监测对象 API](/zh-CN/docs/Web/API/PerformanceObserver)
- [IANA 注册的 ALPN 标识符](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
