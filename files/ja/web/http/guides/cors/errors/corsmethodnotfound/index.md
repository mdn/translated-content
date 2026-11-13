---
title: "Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

## 理由

```plain
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## エラーの原因

{{Glossary("CORS")}} リクエストで使われている HTTP メソッドが、レスポンスの {{HTTPHeader("Access-Control-Allow-Methods")}} ヘッダーで指定されたメソッドの一覧に含まれていません。このヘッダーは、 CORS を使用してリクエストで指定された URL にアクセスする時に使われる HTTP メソッドのカンマ区切りのリストを指定します。リクエストが他のメソッドを使用していると、このエラーが発生します。

例えば、レスポンスに以下の行が含まれていると、

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

{{HTTPMethod("PUT")}} リクエストを使おうとすると、リクエストが失敗し、このエラーが発生します。

コードからサービスにアクセスするときは、許可された HTTP メソッドのみを使用するように確認してください。

> [!NOTE]
> サーバーが `Access-Control-Allow-methods` ヘッダーに理解できないまたは未定義のメソッド名を含めた場合、別なエラー [Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'](/ja/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod) が発生します。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/Guides/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
