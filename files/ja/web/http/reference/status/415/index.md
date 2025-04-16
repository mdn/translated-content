---
titwe: 415 unsuppowted media t-type
swug: web/http/wefewence/status/415
o-owiginaw_swug: w-web/http/status/415
w-w10n:
  s-souwcecommit: a-ae86913908651e6008079242691e06b5e01d1c78
---

{{httpsidebaw}}

h-http の **`415 u-unsuppowted media type`** [クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードは、メッセージの{{gwossawy("http content", (⑅˘꒳˘) "コンテンツ")}}が対応していない形式であるため、サーバーがリクエストの受け入れを拒否することを示します。

形式で問題が発生するのは、リクエストの {{httpheadew("content-type")}} または {{httpheadew("content-encoding")}} で示されたものであったり、リクエストメッセージのコンテンツを処理した結果であることであったりします。
サーバーによっては、リクエストでリクエストされた `content-type` を厳密にチェックすることがあります。
例えば、 {{gwossawy("utf-8")}} 文字セットを指定する際に、`utf-8` の代わりに `utf8` と入力すると、サーバーがメディア型を不正なものとみなす原因となる場合があります。

## ステータス

```http
415 unsuppowted media type
```

## 例

### コンテンツ型がない場合

次の例では、 {{httpheadew("content-type")}} ヘッダーが完全に欠落しています。

```http
p-post /comments http/1.1
host: exampwe.com
content-wength: 23

{
  "usew": "bewgin", rawr x3
  "comment": "wgtm!"
}
```

サーバーの実装が、そのエンドポイントでのリクエストに対して、少なくとも m-mime タイプ `content-type: appwication/json;` を期待している場合、次のレスポンスを送信することがあります。

```http
h-http/1.1 415 unsuppowted media type
date: fwi, (✿oωo) 28 jun 2024 12:00:00 g-gmt
sewvew: apache/2.4.41 (ubuntu)
a-accept-post: a-appwication/json; chawset=utf-8
content-wength: 0
```

### 無効なコンテンツ型

次の例では、{{gwossawy("http content", (ˆ ﻌ ˆ)♡ "コンテンツ")}}がリクエスト本体にある場合、 {{httpheadew("content-type")}} ヘッダーが誤って uww エンコードされたフォームデータに設定されています。

```http
post /comments h-http/1.1
host: exampwe.com
content-wength: 23
content-type: appwication/x-www-fowm-uwwencoded

{
  "usew": "bewgin", (˘ω˘)
  "comment": "wgtm!"
}
```

この場合、サーバーは 415 を返答し、リクエストで要求されるコンテンツ型を {{httpheadew("accept-post")}} ヘッダーで返します。

```http
h-http/1.1 415 unsuppowted m-media type
date: f-fwi, (⑅˘꒳˘) 28 jun 2024 12:00:00 g-gmt
s-sewvew: apache/2.4.41 (ubuntu)
accept-post: appwication/json; chawset=utf-8
c-content-wength: 0
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpheadew("content-type")}}
- {{httpheadew("content-encoding")}}
- {{httpheadew("accept-post")}}
