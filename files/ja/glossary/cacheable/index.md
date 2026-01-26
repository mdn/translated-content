---
title: Cacheable (キャッシュ可能)
slug: Glossary/Cacheable
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**キャッシュ可能**なレスポンス（応答）とは、キャッシュすることが可能な HTTP レスポンスで、後で取り出して使用するために格納され、サーバーへの新しいリクエスト（要求）を節約します。 すべての HTTP レスポンスがキャッシュされるわけではなく、キャッシュされる HTTP レスポンスには次の制約があります。

- リクエストで使用されるメソッドは、それ自体が*キャッシュ可能*です ({{HTTPMethod("GET")}} メソッドまたは {{HTTPMethod("HEAD")}} メソッド)。{{HTTPMethod("POST")}} または {{HTTPMethod("PATCH")}} リクエストへのレスポンスも、新鮮さ (freshness) が示され、{{HTTPHeader("Content-Location")}} ヘッダーが設定されている場合はキャッシュできますが、これはほとんど実装されていません。例えば、 Firefox は対応していません ([Firefox バグ 109553](https://bugzil.la/109553))。 {{HTTPMethod("PUT")}} や {{HTTPMethod("DELETE")}} のような他のメソッドはキャッシュ可能ではなく、その結果をキャッシュすることはできません。
- レスポンスのステータスコードはアプリケーションキャッシュによって*認識*され、*キャッシュ可能*と見なされている場合。キャッシュ可能なステータスコードは、 {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}}, {{HTTPStatus("501")}} です。
- レスポンスに特定のヘッダー、たとえば {{HTTPHeader("Cache-Control")}} にキャッシュを禁止する値がついたものがない場合。

特定の URI に対するキャッシュ不可能なリクエスト/レスポンスの中には、同じ URI で以前にキャッシュされたレスポンスを無効にするものがあることに注意してください。たとえば、 {{HTTPMethod("PUT")}} を `/pageX.html` に実行すると、`/pageX.html` に対する {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} リクエストのレスポンスを無効化します。

リクエストのメソッドとレスポンスのステータスの両方がキャッシュ可能な場合、リクエストに対するレスポンスをキャッシュすることができます。

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

{{HTTPMethod("PUT")}} リクエストはキャッシュできません。 さらに、{{HTTPMethod("HEAD")}} または {{HTTPMethod("GET")}} を介して行われた同じ URI へのリクエストに対して、キャッシュされたデータを無効にします。

```http
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

レスポンス内の特定の {{HTTPHeader("Cache-Control")}} ヘッダーは、キャッシュすることを防止できます。

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

## 関連情報

- HTTP 仕様書の [methods and caching](https://httpwg.org/specs/rfc9110.html#rfc.section.9.2.3) に関する詳細
- 一般的にキャッシュ可能なメソッドの説明: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}
- 一般的にキャッシュ不可能なメソッドの説明: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, しばしば {{HTTPMethod("POST")}}
