---
title: CORS-safelisted response header (CORS セーフリストレスポンスヘッダー)
slug: Glossary/CORS-safelisted_response_header
---

{{GlossarySidebar}}

_CORS セーフリストレスポンスヘッダー_ は、[CORS](/ja/docs/Web/HTTP/Guides/CORS) レスポンスに含まれる [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)で、クライアントスクリプトに公開しても _安全_ であると見なされます。セーフリストに含まれたレスポンスヘッダーのみがウェブページで利用できます。

既定では以下のレスポンスヘッダーがセーフリストに含まれます。

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

{{HTTPHeader("Access-Control-Expose-Headers")}} ヘッダーを使用して追加のヘッダーをセーフリストに追加することができます。

> [!NOTE]
> {{HTTPHeader("Content-Length")}} は既定のセーフリストではありませんでした。 \[[参照](https://github.com/whatwg/fetch/pull/626)]

## 例

### セーフリストの拡張

{{HTTPHeader("Access-Control-Expose-Headers")}} ヘッダーを使用して、CORS セーフリストレスポンスヘッダーのリストを拡張することができます。

```plain
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## 関連情報

- [HTTP](/ja/docs/Web/HTTP)
- [HTTP headers](/ja/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- 関連用語:
  - {{Glossary("CORS")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}
  - {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
  - {{Glossary("Request header", "リクエストヘッダー")}}
