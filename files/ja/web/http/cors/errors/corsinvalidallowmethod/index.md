---
title: "Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Methods’"
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowMethod
---

{{HTTPSidebar}}

## 理由

```
Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Methods’
```

## 何に失敗したか

サーバーから送信された {{Glossary("CORS")}} 要求への応答に、一つ以上の無効なメソッド名を含んだ {{HTTPHeader("Access-Control-Allow-Methods")}} ヘッダーが含まれています。

`Access-Control-Allow-Methods` ヘッダーは、どの [HTTP 要求メソッド](/ja/docs/Web/HTTP/Methods)が CORS 要求に対応しているかをクライアントに知らせます。ヘッダーの値は、{{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, {{HTTPMethod("HEAD")}} のような HTTP メソッド名をコンマで区切った文字列です。クライアントの{{Glossary("user agent", "ユーザーエージェント")}}が指定された値を理解できない場合、このエラーが発生します。

これはほとんどはサーバー側でしか修正できない問題であり、サーバーの構成を変更して、 `Access-Control-Allow-Methods` ヘッダーから無効又は未知のメソッド名を送らないようにします。クライアントで使用しているユーザーエージェントの HTTP ライブラリが最新版であるかどうかをチェックするのも良いかもしれません。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
