---
title: Cacheable (キャッシュ可能)
slug: Glossary/Cacheable
---

**キャッシュ可能**なレスポンス (応答) とは、キャッシュすることが可能な HTTP レスポンスで、後で取り出して使用するために格納され、サーバーへの新しいリクエスト (要求) を節約します。 すべての HTTP レスポンスがキャッシュされるわけではなく、キャッシュされる HTTP レスポンスには次の制約があります。

- リクエストで使用されるメソッドは、それ自体が*キャッシュ可能*です ({{HTTPMethod("GET")}} メソッドまたは {{HTTPMethod("HEAD")}} メソッド)。 フレッシュネス (新鮮さ) が示され、{{HTTPHeader("Content-Location")}} ヘッダーが設定されている場合は、{{HTTPMethod("POST")}} または {{HTTPMethod("PATCH")}} リクエストへのレスポンスもキャッシュできますが、これはほとんど実装されていません。 (例えば、 Firefox は <https://bugzilla.mozilla.org/show_bug.cgi?id=109553> により、それをサポートしていません。) {{HTTPMethod("PUT")}} や {{HTTPMethod("DELETE")}} のような他のメソッドはキャッシュ可能ではなく、その結果をキャッシュすることはできません。
- レスポンスのステータスコードはアプリケーション キャッシュによって*認識*され、*キャッシュ可能*と見なされます。キャッシュ可能なステータスコードは、 {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}}, {{HTTPStatus("501")}} です。
- レスポンスには、*具体的なヘッダー*があり、たとえば {{HTTPHeader("Cache-Control")}} はキャッシュを抑止します。

特定の URI に対するキャッシュ不可能なリクエスト/レスポンスの中には、同じ URI で以前にキャッシュされたレスポンスを無効にするものがあることに注意してください。たとえば、pageX.html への {{HTTPMethod("PUT")}} は、同じ URI に対して、キャッシュされたすべての {{HTTPMethod("GET")}} リクエストまたは {{HTTPMethod("HEAD")}} リクエストを無効化します。

リクエストのメソッドとレスポンスのステータスの両方がキャッシュ可能な場合、リクエストに対するレスポンスをキャッシュすることができます。

```
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

{{HTTPMethod("PUT")}} リクエストはキャッシュできません。 さらに、{{HTTPMethod("HEAD")}} または {{HTTPMethod("GET")}} を介して行われた同じ URI へのリクエストに対して、キャッシュされたデータを無効にします。

```
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

レスポンス内の特定の {{HTTPHeader("Cache-Control")}} ヘッダーは、キャッシュすることを防止できます。

```
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

1. 一般知識

   1. HTTP 仕様書の [cacheable](https://tools.ietf.org/html/rfc7231#section-4.2.3) の定義

2. 技術的な知識

   1. 一般的なキャッシュ可能なメソッドの説明: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}
   2. 一般的なキャッシュ不可能なメソッドの説明: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, often {{HTTPMethod("POST")}}
