---
title: Preflight request (プリフライトリクエスト)
slug: Glossary/Preflight_request
---

CORS のプリフライトリクエストは {{Glossary("CORS")}} のリクエストの一つであり、サーバーが CORS プロトコルを理解していて準備がされていることを、特定のメソッドとヘッダーを使用してチェックします。

これは {{HTTPMethod("OPTIONS")}} リクエストであり、 {{HTTPHeader("Access-Control-Request-Method")}},{{HTTPHeader("Access-Control-Request-Headers")}}, {{HTTPHeader("Origin")}} の 3 つの HTTP リクエストヘッダー使用します。

プリフライトリクエストはブラウザーが自動的に発行するものであり、通常は、フロントエンドの開発者が自分でそのようなリクエストを作成する必要はありません。これはリクエストが["to be preflighted"](/ja/docs/Web/HTTP/CORS#Preflighted_requests)と修飾されている場合に現れ、[単純リクエスト](/ja/docs/Web/HTTP/CORS#Simple_requests)の場合は省略されます。

例えば、クライアントはプリフライトリクエストを使用して、 {{HTTPMethod("DELETE")}} リクエストを送信する前に、 `DELETE` リクエストを許可するかどうかをサーバーに尋ねるかもしれません。

```
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

サーバーが許可している場合は、プリフライトリクエストへのレスポンスで、 {{HTTPHeader("Access-Control-Allow-Methods")}} レスポンスヘッダーに `DELETE` を含めます。

```
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

プリフライトレスポンスは、上記の例のように {{HTTPHeader("Access-Control-Max-Age")}} ヘッダを使用して同じ URL で作成されたリクエストに対して、オプションでキャッシュすることができます。

## 関連情報

- {{Glossary("CORS")}}
- {{HTTPMethod("OPTIONS")}}
