---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: 5525ac4f1e28d94beedee7196981eac0377f7bc3
---

**Application-Layer {{Glossary("Protocol")}} Negotiation** (**ALPN**) は、 {{Glossary("TLS")}} 拡張であり、追加のラウンドトリップを必要とせずに、暗号化された接続をネゴシエートするアプリケーションレイヤープロトコルを示します。

| プロトコル                                | 識別シーケンス                                         |
| ----------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}          | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP 2", "HTTP/2")}}          | `0x68 0x32` ("h2")                                     |
| HTTP/2 over cleartext {{Glossary("TCP")}} | `0x68 0x32 0x63` ("h2c")                               |

## 関連情報

- [IANA 登録 ALPN 識別子](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
