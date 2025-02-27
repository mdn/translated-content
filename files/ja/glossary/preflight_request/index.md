---
title: Preflight request (プリフライトリクエスト)
slug: Glossary/Preflight_request
l10n:
  sourceCommit: 9902715d9ac9f2bf60cbb9a6fcc744f5e0dfc80a
---

{{GlossarySidebar}}

CORS のプリフライトリクエストは {{Glossary("CORS")}} のリクエストの一つであり、サーバーが CORS プロトコルを理解していて準備がされていることを、特定のメソッドとヘッダーを使用してチェックします。

これは {{HTTPMethod("OPTIONS")}} リクエストであり、 {{HTTPHeader("Access-Control-Request-Method")}},{{HTTPHeader("Access-Control-Request-Headers")}}, {{HTTPHeader("Origin")}} の 3 つの HTTP リクエストヘッダー使用します。

プリフライトリクエストはブラウザーが自動的に発行するものであり、通常は、フロントエンドの開発者が自分でそのようなリクエストを作成する必要はありません。これはリクエストが ["to be preflighted"](/ja/docs/Web/HTTP/CORS#プリフライトリクエスト) と修飾されている場合に現れ、[単純リクエスト](/ja/docs/Web/HTTP/CORS#単純リクエスト)の場合は省略されます。

例えば、クライアントはプリフライトリクエストを使用して、 {{HTTPMethod("DELETE")}} リクエストを送信する前に、 `DELETE` リクエストを許可するかどうかをサーバーに尋ねるかもしれません。

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: Origin, X-Requested-With
Origin: https://foo.bar.org
```

サーバーが許可している場合は、プリフライトリクエストへのレスポンスで、 {{HTTPHeader("Access-Control-Allow-Methods")}} レスポンスヘッダーに `DELETE` を含めます。

```http
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: Origin, X-Requested-With
Access-Control-Max-Age: 86400
```

プリフライトレスポンスは、例えば上の例のように {{HTTPHeader("Access-Control-Max-Age")}} ヘッダーを使用して、同じ {{Glossary("URL")}} で作成されたリクエストに対してオプションでキャッシュすることができます。プリフライトレスポンスをキャッシュするには、ブラウザーが管理する一般的な HTTP キャッシュとは別個の固有のキャッシュを使用します。プリフライトレスポンスがブラウザーの一般的な HTTP キャッシュにキャッシュされることはありません。

## 関連情報

- {{Glossary("CORS")}}
- {{HTTPMethod("OPTIONS")}}
