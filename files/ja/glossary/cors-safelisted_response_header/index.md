---
title: CORS-safelisted response header (CORS セーフリストレスポンスヘッダー)
slug: Glossary/CORS-safelisted_response_header
tags:
  - CORS
  - Fetch
  - HTTP
  - 用語集
translation_of: Glossary/CORS-safelisted_response_header
---
_CORS セーフリストレスポンスヘッダー_ は、セーフリストに掲載されている [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)であり、レスポンスが CORS によって処理されたときに、 ({{HTTPHeader("Access-Control-Expose-Headers")}} に掲載された場合と同様に) _安全_ であると見なされ、フィルタリングされないものです。既定でセーフリストには、以下のレスポンスヘッダーが含まれています。

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

## 例

### セーフリストの拡張

{{HTTPHeader("Access-Control-Expose-Headers")}} ヘッダーを使用して、CORS セーフリストレスポンスヘッダーのリストを拡張することができます。

```plain
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## 関連情報

- [HTTP](/ja/docs/Web/HTTP)
- [HTTP headers](/ja/docs/Web/HTTP/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- [Glossary](/en-US/docs/Glossary)

   - {{Glossary("CORS")}}
   - {{Glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}
   - {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
   - {{Glossary("Request header", "リクエストヘッダー")}}
