---
title: Payload header (ペイロードヘッダー)
slug: Glossary/Payload_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**ペイロードヘッダー**は、{{Glossary("HTTP_header", "HTTP ヘッダー")}}の一種で、1 つ以上のメッセージから、元リソースの{{Glossary("Representation header", "表現")}}の安全な伝送と再構築に関連するペイロード（本体）情報を記述するものです。これには、メッセージペイロードの長さ、リソースのどの部分がこのペイロードで運ばれるのか（マルチパートメッセージの場合）、トランスポートに適用されるエンコード方式、メッセージの整合性チェックなどの情報が含まれます。

ペイロードヘッダーは HTTP リクエストメッセージとレスポンスメッセージ（すなわちペイロードデータを運ぶメッセージ）のどちらにも入れることができます。

ペイロードヘッダーには、 {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Transfer-Encoding")}} などがあります。

## 関連情報

- [すべての HTTP ヘッダーの一覧](/ja/docs/Web/HTTP/Reference/Headers)
  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation header", "表現ヘッダー")}}

- [RFC 7231, section 3.3: Payload semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
