---
title: CORS-safelisted request header (CORS セーフリストリクエストヘッダー)
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 4bd65a01204446af2254bb8864bd22ad87bc86b0
---

[CORS セーフリストリクエストヘッダー](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)は、次の [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)のうちの一つです:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}

リクエストがこれらのヘッダーのみを含んでいて、なおかつ値が後述の追加要件に合致する場合は、{{glossary("preflight request", "プリフライトリクエスト")}}を [CORS](/ja/docs/Glossary/CORS) のコンテキストにおいて送る必要がありません。

{{HTTPHeader("Access-Control-Allow-Headers")}} ヘッダーを使うと、別のヘッダーをセーフリストとして追加したり、上記のヘッダーをリストアップすることで後述の追加要件を回避することができます:

#### 追加要件

CORS セーフリストリクエストヘッダーとなるためには、次の要件も満たさなければなりません:

- {{HTTPHeader("Accept-Language")}} と {{HTTPHeader("Content-Language")}} については、値が次の文字のみで構成されていなければなりません: `0-9`・`A-Z`・`a-z`・空白・`*,-.;=`
- {{HTTPHeader("Accept")}} と {{HTTPHeader("Content-Type")}} については、次の *CORS アンセーフリクエストヘッダーバイト*と呼ばれる文字を含んではいけません: `0x00-0x1F` (ただし、`0x09 (HT)` は含めても良い)・`"():<>?@[\]{}`・`0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} について: 値をパースした結果（パラメーターを除く）が、`application/x-www-form-urlencoded` か、`multipart/form-data`、`text/plain` のうち、いずれかの MIME タイプでなければなりません。
- すべてのヘッダーについて: 値の長さが128バイトを超えてはいけません。

## 関連情報

- {{Glossary("CORS-safelisted response header")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Request header")}}
