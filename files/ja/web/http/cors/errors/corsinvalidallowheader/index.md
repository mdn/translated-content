---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'"
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowHeader
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## 理由

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
```

## エラーの原因

サーバーから送信された {{Glossary("CORS")}} リクエストへの応答に、一つ以上の無効なヘッダー名を含んだ {{HTTPHeader("Access-Control-Allow-Headers")}} ヘッダーが含まれています。

`Access-Control-Allow-Headers` ヘッダーは、{{Glossary("preflight request", "プリフライトリクエスト")}}へのレスポンスの中でサーバーから送信されます。これはどの [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)が CORS リクエストで許可されているかをクライアントに知らせます。クライアントの{{Glossary("user agent", "ユーザーエージェント")}}が、このヘッダーで示されたコンマで区切られた値の中から理解できないヘッダーがあれば、このエラーが発生します。

これはほとんどはサーバー側でしか修正できない問題であり、サーバーの構成を変更して、 `Access-Control-Allow-Headers` ヘッダーから無効又は未知のヘッダー名を送らないようにします。クライアントで使用しているユーザーエージェントの HTTP ライブラリーが最新版であるかどうかをチェックするのも良いかもしれません。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
