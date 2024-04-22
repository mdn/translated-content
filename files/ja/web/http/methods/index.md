---
title: HTTP リクエストメソッド
slug: Web/HTTP/Methods
---

{{HTTPSidebar}}

HTTP では、リソースに対して実行したいアクションを示す一連の**リクエストメソッド**を定義しています。リクエストメソッドは *HTTP 述語*と呼ばれることがありますが、名詞も存在します。それぞれのメソッドがさまざまな意味を持っていますが、いくつかの共通的な機能が、メソッドのグループで共有されています。例えば、リクエストメソッドは{{glossary("Safe/HTTP", "安全")}}、{{glossary("idempotent", "べき等")}}、{{glossary("cacheable", "キャッシュ可能")}}であることがあります。

- [`GET`](/ja/docs/Web/HTTP/Methods/GET)
  - : `GET` メソッドは、指定したリソースの表現をリクエストします。 `GET` を使用するリクエストは、データの取り込みに限ります。
- [`HEAD`](/ja/docs/Web/HTTP/Methods/HEAD)
  - : `HEAD` メソッドは `GET` リクエストと同じレスポンスを、レスポンス本文なしで求めます。
- [`POST`](/ja/docs/Web/HTTP/Methods/POST)
  - : `POST` は指定したリソースに実体を送信するために使用するメソッドであり、サーバー上の状態を変更したり、副作用が発生したりすることがよくあります。
- [`PUT`](/ja/docs/Web/HTTP/Methods/PUT)
  - : `PUT` メソッドは対象リソースの現在の表現全体を、リクエストのペイロードで置き換えます。
- [`DELETE`](/ja/docs/Web/HTTP/Methods/DELETE)
  - : `DELETE` メソッドは、指定したリソースを削除します。
- [`CONNECT`](/ja/docs/Web/HTTP/Methods/CONNECT)
  - : `CONNECT` メソッドは、対象リソースで識別されるサーバーとの間にトンネルを確立します。
- [`OPTIONS`](/ja/docs/Web/HTTP/Methods/OPTIONS)
  - : `OPTIONS` メソッドは、対象リソースの通信オプションを示すために使用します。
- [`TRACE`](/ja/docs/Web/HTTP/Methods/TRACE)
  - : `TRACE` メソッドは、対象リソースへのパスに沿ってメッセージのループバックテストを実行します。
- [`PATCH`](/ja/docs/Web/HTTP/Methods/PATCH)
  - : `PATCH` メソッドは、リソースを部分的に変更するために使用します。

## 仕様書

| 仕様書                                  | 表題                                                          | 備考                                                           |
| --------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| {{RFC("7231", "Request methods", "4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content | GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE を定義。 |
| {{RFC("5789", "Patch method", "2")}}    | PATCH Method for HTTP                                         | PATCH を定義。                                                 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
