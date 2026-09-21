---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

**Application-Layer Protocol Negotiation** (**ALPN**) は、 {{Glossary("TLS")}} 拡張（[RFC 7301](https://www.rfc-editor.org/info/rfc7301/) で定義）であり、追加のラウンドトリップを必要とせずに、暗号化された接続をネゴシエートするアプリケーションレイヤープロトコルを示します。

| プロトコル                                | 識別シーケンス                                         |
| ----------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}          | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP 2", "HTTP/2")}}          | `0x68 0x32` ("h2")                                     |
| HTTP/2 over cleartext {{Glossary("TCP")}} | `0x68 0x32 0x63` ("h2c")                               |
| {{Glossary("HTTP 3", "HTTP/3")}}          | `0x68 0x33` ("h3")                                     |

## 関連情報

- [パフォーマンスリソースタイミング `nextHopProtocol`](/ja/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) プロパティ
- [PerformanceObserver API](/ja/docs/Web/API/PerformanceObserver)
- [IANA 登録 ALPN 識別子](https://www.iana.org/assignments/tls-extensiontype-values#alpn-protocol-ids)
