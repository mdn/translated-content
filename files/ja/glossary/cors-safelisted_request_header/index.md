---
title: CORS-safelisted request header (CORS セーフリストリクエストヘッダー)
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 5e9631df85d021e84133e14f4bd3c712e4f8fe08
---

{{GlossarySidebar}}

[CORS セーフリストリクエストヘッダー](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)は、次の [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)のうちの一つです:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

リクエストがこれらのヘッダーのみを含んでいて、なおかつ値が後述の追加要件に合致する場合は、{{glossary("preflight request", "プリフライトリクエスト")}}を [CORS](/ja/docs/Glossary/CORS) のコンテキストにおいて送る必要がありません。

{{HTTPHeader("Access-Control-Allow-Headers")}} ヘッダーを使うと、別のヘッダーをセーフリストとして追加したり、上記のヘッダーをリストアップすることで後述の追加要件を回避することができます。

#### 追加要件

CORS セーフリストリクエストヘッダーとなるためには、次の要件も満たさなければなりません。

- {{HTTPHeader("Accept-Language")}} と {{HTTPHeader("Content-Language")}} については、値が `0-9`・`A-Z`・`a-z`・空白・`*,-.;=` のみで構成されていなければなりません。
- {{HTTPHeader("Accept")}} と {{HTTPHeader("Content-Type")}} については、 *CORS アンセーフリクエストヘッダーバイト*と呼ばれる `0x00-0x1F` (ただし、`0x09 (HT)` は含めても良い)・`"():<>?@[\]{}`・`0x7F (DEL)` ををめてはいけません。
- {{HTTPHeader("Content-Type")}} は、値が解釈された結果の MIME タイプ（引数を除く）が、`application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain` のいずれかでなければなりません。
- {{HTTPHeader("Range")}} は単一バイトの範囲の値で、 `bytes=[0-9]+-[0-9]*` の形でなければなりません。
  詳しくは {{HTTPHeader("Range")}} ヘッダーのドキュメントをご覧ください。
- すべてのヘッダーについて、値の長さが 128 バイトを超えてはいけません。

## 関連情報

- {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
- {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
- {{Glossary("Request header", "リクエストヘッダー")}}
