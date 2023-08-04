---
title: 应用层协议协商（ALPN）
slug: Glossary/ALPN
---

{{GlossarySidebar}}

**应用层协议协商**（**Application-Layer Protocol Negotiation**，简称 **ALPN**）是由 [RFC 7301](https://www.rfc-editor.org/rfc/rfc7301) 定义的一个 {{Glossary("TLS")}} 扩展，故而应用层协议在协商加密协议的过程中，避免了额外的往返通讯开销。

| 协议                                      | 标识符字节序列                                         |
| ----------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}          | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP 2", "HTTP/2")}}          | `0x68 0x32` ("h2")                                     |
| HTTP/2 over cleartext {{Glossary("TCP")}} | `0x68 0x32 0x63` ("h2c")                               |

## 参见

- [IANA 注册的 ALPN 标识符](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
