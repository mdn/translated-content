---
title: フェッチメタデータリクエストヘッダー
slug: Glossary/Fetch_metadata_request_header
---

**フェッチメタデータリクエストヘッダー**は、リクエストの発信元のコンテキストに関する追加情報を提供する HTTP リクエストヘッダーです。これらのヘッダー名には `Sec-` の接頭辞が付いており、{{Glossary("Forbidden header name", "禁止ヘッダー名")}}であるため、 JavaScript からヘッダーを変更することはできません。

フェッチメタデータリクエストヘッダーは、リクエストがどこから来たのかという追加情報をサーバーに提供し、悪意のあるリクエストを無視できるようになります。

フェッチメタデータリクエストヘッダーには以下のようなものがあります。

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

1. Fetch Me

   1. [すべての HTTP ヘッダーの一覧](/ja/docs/Web/HTTP/Headers)

2. [用語集](/ja/docs/Glossary)

   1. {{Glossary("Entity header")}}
   2. {{Glossary("Header")}}
   3. {{Glossary("Response header")}}
   4. {{Glossary("Request header")}}
