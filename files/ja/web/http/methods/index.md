---
title: HTTP リクエストメソッド
short-title: リクエストメソッド
slug: Web/HTTP/Methods
l10n:
  sourceCommit: 3e525728d4f65438eea3ab052085d7aad14d1eba
---

{{HTTPSidebar}}

HTTP では、一連の**リクエストメソッド**を定義しています。これは、リクエストの目的と、リクエストが成功した場合に期待される結果を示しています。
リクエストメソッドは *HTTP 述語*と呼ばれることがありますが、名詞であることもあります。
それぞれのリクエストメソッドには独自の意味がありますが、複数のメソッドに共通する特徴もあります。具体的には、リクエストメソッドは{{glossary("Safe/HTTP", "安全")}}、{{glossary("idempotent", "べき等")}}、{{glossary("cacheable", "キャッシュ可能")}}である場合があります。

- {{HTTPMethod("GET")}}
  - : `GET` メソッドは、指定したリソースの表現をリクエストします。
    `GET` を使用するリクエストは、データの取得のみを行うべきであり、リクエストの{{Glossary("HTTP Content", "コンテンツ")}}を入れてはいけません。
- {{HTTPMethod("HEAD")}}
  - : `HEAD` メソッドは `GET` リクエストと同じレスポンスを、レスポンス本文なしで求めます。
- {{HTTPMethod("POST")}}
  - : `POST` は指定したリソースに実体を送信するために使用するメソッドであり、サーバー上の状態を変更したり、副作用が発生したりすることがよくあります。
- {{HTTPMethod("PUT")}}
  - : `PUT` メソッドは対象リソースの現在の表現全体を、リクエストの{{Glossary("HTTP Content", "コンテンツ")}}で置き換えます。
- {{HTTPMethod("DELETE")}}
  - : `DELETE` メソッドは、指定したリソースを削除します。
- {{HTTPMethod("CONNECT")}}
  - : `CONNECT` メソッドは、対象リソースで識別されるサーバーとの間にトンネルを確立します。
- {{HTTPMethod("OPTIONS")}}
  - : `OPTIONS` メソッドは、対象リソースの通信オプションを示すために使用します。
- {{HTTPMethod("TRACE")}}
  - : `TRACE` メソッドは、対象リソースへのパスに沿ってメッセージのループバックテストを実行します。
- {{HTTPMethod("PATCH")}}
  - : `PATCH` メソッドは、リソースを部分的に変更するために使用します。

## リクエストの安全性、べき等性、キャッシュ可否

以下の表では、 HTTP リクエストのメソッドと、それぞれの安全性、キャッシュ可否、べき等静による分類を示します。

| メソッド                  | 安全性 | べき等性 | キャッシュ |
| ------------------------- | ------ | -------- | ---------- |
| {{HTTPMethod("GET")}}     | あり   | あり     | 可         |
| {{HTTPMethod("HEAD")}}    | あり   | あり     | 可         |
| {{HTTPMethod("OPTIONS")}} | あり   | あり     | 不可       |
| {{HTTPMethod("TRACE")}}   | あり   | あり     | 不可       |
| {{HTTPMethod("PUT")}}     | なし   | あり     | 不可       |
| {{HTTPMethod("DELETE")}}  | なし   | あり     | 不可       |
| {{HTTPMethod("POST")}}    | なし   | なし     | 条件付き\* |
| {{HTTPMethod("PATCH")}}   | なし   | なし     | 条件付き\* |
| {{HTTPMethod("CONNECT")}} | なし   | なし     | 不可       |

\* `POST` と `PATCH` は、レスポンスに[鮮度](/ja/docs/Web/HTTP/Caching)情報と、一致する {{HTTPHeader("Content-Location")}} ヘッダーが明示的に含まれている場合、キャッシュ可能です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
