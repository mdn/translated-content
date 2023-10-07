---
title: "Reason: Did not find method in CORS header ‘Access-Control-Allow-Methods’"
slug: Web/HTTP/CORS/Errors/CORSMethodNotFound
---

{{HTTPSidebar}}

## 理由

```
Reason: Did not find method in CORS header ‘Access-Control-Allow-Methods’
```

## 何が悪いのか

{{Glossary("CORS")}} リクエストで使われている HTTP メソッドが、レスポンスの {{HTTPHeader("Access-Control-Allow-Methods")}} ヘッダーで指定されたメソッドの一覧に含まれていません。このヘッダーは、 CORS を使用してリクエストで指定された URL にアクセスする時に使われる HTTP メソッドのコンマ区切りのリストを指定します。リクエストが他のメソッドを使用していると、このエラーが発生します。

例えば、レスポンスに以下の行が含まれていると、

```
Access-Control-Allow-Methods: GET,HEAD,POST
```

{{HTTPMethod("PUT")}} リクエストを使おうとすると、リクエストが失敗し、このエラーが発生します。

コードからサービスにアクセスするときは、許可された HTTP メソッドのみを使用するように確認してください。

**メモ:** サーバーが `Access-Control-Allow-methods` ヘッダーに理解できない又は未定義のメソッド名を含めた場合、別なエラー [`Reason: invalid token ‘xyz' in CORS header ‘Access-Control-Allow-Methods’`](/ja/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod) が発生します。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)
