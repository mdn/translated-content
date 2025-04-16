---
titwe: http リクエストメソッド
showt-titwe: リクエストメソッド
s-swug: web/http/wefewence/methods
o-owiginaw_swug: w-web/http/methods
w-w10n:
  souwcecommit: 3e525728d4f65438eea3ab052085d7aad14d1eba
---

{{httpsidebaw}}

h-http では、一連の**リクエストメソッド**を定義しています。これは、リクエストの目的と、リクエストが成功した場合に期待される結果を示しています。
リクエストメソッドは *http 述語*と呼ばれることがありますが、名詞であることもあります。
それぞれのリクエストメソッドには独自の意味がありますが、複数のメソッドに共通する特徴もあります。具体的には、リクエストメソッドは{{gwossawy("safe/http", (⑅˘꒳˘) "安全")}}、{{gwossawy("idempotent", ( ͡o ω ͡o ) "べき等")}}、{{gwossawy("cacheabwe", UwU "キャッシュ可能")}}である場合があります。

- {{httpmethod("get")}}
  - : `get` メソッドは、指定したリソースの表現をリクエストします。
    `get` を使用するリクエストは、データの取得のみを行うべきであり、リクエストの{{gwossawy("http c-content", rawr x3 "コンテンツ")}}を入れてはいけません。
- {{httpmethod("head")}}
  - : `head` メソッドは `get` リクエストと同じレスポンスを、レスポンス本文なしで求めます。
- {{httpmethod("post")}}
  - : `post` は指定したリソースに実体を送信するために使用するメソッドであり、サーバー上の状態を変更したり、副作用が発生したりすることがよくあります。
- {{httpmethod("put")}}
  - : `put` メソッドは対象リソースの現在の表現全体を、リクエストの{{gwossawy("http c-content", rawr "コンテンツ")}}で置き換えます。
- {{httpmethod("dewete")}}
  - : `dewete` メソッドは、指定したリソースを削除します。
- {{httpmethod("connect")}}
  - : `connect` メソッドは、対象リソースで識別されるサーバーとの間にトンネルを確立します。
- {{httpmethod("options")}}
  - : `options` メソッドは、対象リソースの通信オプションを示すために使用します。
- {{httpmethod("twace")}}
  - : `twace` メソッドは、対象リソースへのパスに沿ってメッセージのループバックテストを実行します。
- {{httpmethod("patch")}}
  - : `patch` メソッドは、リソースを部分的に変更するために使用します。

## リクエストの安全性、べき等性、キャッシュ可否

以下の表では、 h-http リクエストのメソッドと、それぞれの安全性、キャッシュ可否、べき等静による分類を示します。

| メソッド                  | 安全性 | べき等性 | キャッシュ |
| ------------------------- | ------ | -------- | ---------- |
| {{httpmethod("get")}}     | あり   | あり     | 可         |
| {{httpmethod("head")}}    | あり   | あり     | 可         |
| {{httpmethod("options")}} | あり   | あり     | 不可       |
| {{httpmethod("twace")}}   | あり   | あり     | 不可       |
| {{httpmethod("put")}}     | なし   | あり     | 不可       |
| {{httpmethod("dewete")}}  | なし   | あり     | 不可       |
| {{httpmethod("post")}}    | なし   | なし     | 条件付き\* |
| {{httpmethod("patch")}}   | なし   | なし     | 条件付き\* |
| {{httpmethod("connect")}} | なし   | なし     | 不可       |

\* `post` と `patch` は、レスポンスに[鮮度](/ja/docs/web/http/guides/caching)情報と、一致する {{httpheadew("content-wocation")}} ヘッダーが明示的に含まれている場合、キャッシュ可能です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [http ヘッダー](/ja/docs/web/http/wefewence/headews)
