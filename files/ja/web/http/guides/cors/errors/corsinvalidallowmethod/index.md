---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

## 理由

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```

## エラーの原因

サーバーから送信された {{Glossary("CORS")}} リクエストへのレスポンスに、一つ以上の無効なメソッド名を含んだ {{HTTPHeader("Access-Control-Allow-Methods")}} ヘッダーが含まれています。

`Access-Control-Allow-Methods` ヘッダーは、どの [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)が CORS リクエストに対応しているかをクライアントに知らせます。ヘッダーの値は、{{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, {{HTTPMethod("HEAD")}} のような HTTP メソッド名をコンマで区切った文字列です。クライアントの{{Glossary("user agent", "ユーザーエージェント")}}が指定された値を理解できない場合、このエラーが発生します。

これはほとんどはサーバー側でしか修正できない問題であり、サーバーの構成を変更して、 `Access-Control-Allow-Methods` ヘッダーから無効又は未知のメソッド名を送らないようにします。クライアントで使用しているユーザーエージェントの HTTP ライブラリーが最新版であるかどうかをチェックするのも良いかもしれません。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/Guides/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
