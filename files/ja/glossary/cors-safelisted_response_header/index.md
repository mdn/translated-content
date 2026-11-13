---
title: CORS-safelisted response header (CORS セーフリストレスポンスヘッダー)
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**CORS セーフリストレスポンスヘッダー**は、[CORS](/ja/docs/Web/HTTP/Guides/CORS) レスポンスに含まれる [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)で、クライアントスクリプトに公開しても安全であると見なされます。セーフリストに含まれたレスポンスヘッダーのみがウェブページで利用できます。

デフォルトでは、以下のレスポンスヘッダーがセーフリストに含まれます。

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

{{HTTPHeader("Access-Control-Expose-Headers")}} ヘッダーを使用して追加のヘッダーをセーフリストに追加することができます。

## 例

### セーフリストの拡張

{{HTTPHeader("Access-Control-Expose-Headers")}} ヘッダーを使用して、CORS セーフリストレスポンスヘッダーのリストを拡張することができます。

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## 関連情報

- [HTTP](/ja/docs/Web/HTTP)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- 関連用語:
  - {{Glossary("CORS")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}
  - {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
  - {{Glossary("Request header", "リクエストヘッダー")}}
