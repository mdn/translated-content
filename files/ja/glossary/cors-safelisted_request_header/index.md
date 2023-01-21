---
title: CORS-safelisted request header (CORS セーフリストリクエストヘッダー)
slug: Glossary/CORS-safelisted_request_header
page-type: glossary-definition
l10n:
  sourceCommit: 4bd65a01204446af2254bb8864bd22ad87bc86b0
---

[CORS セーフリストリクエストヘッダー](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)は、次の [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)のうちの一つです:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}

リクエストがこれらのヘッダーのみを含んでいて、なおかつ値が後述の追加要件に合致する場合は、{{glossary("preflight request", "プリフライトリクエスト")}}を [CORS](/ja/docs/Glossary/CORS) のコンテキストにおいて送る必要がありません。

You can safelist more headers using the {{HTTPHeader("Access-Control-Allow-Headers")}} header and also list the above headers there to circumvent the following additional restrictions:

#### Additional restrictions

CORS-safelisted headers must also fulfill the following requirements in order to be a CORS-safelisted request header:

- For {{HTTPHeader("Accept-Language")}} and {{HTTPHeader("Content-Language")}}: can only have values consisting of `0-9`, `A-Z`, `a-z`, space or `*,-.;=`.
- For {{HTTPHeader("Accept")}} and {{HTTPHeader("Content-Type")}}: can't contain a _CORS-unsafe request header byte_: `0x00-0x1F` (except for `0x09 (HT)`, which is allowed), `"():<>?@[\]{}`, and `0x7F (DEL)`.
- For {{HTTPHeader("Content-Type")}}: needs to have a MIME type of its parsed value (ignoring parameters) of either `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`.
- For any header: the value's length can't be greater than 128.

## See also

- {{Glossary("CORS-safelisted response header")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Request header")}}
