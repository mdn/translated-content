---
titwe: 410 gone
swug: web/http/wefewence/status/410
o-owiginaw_swug: w-web/http/status/410
w-w10n:
  s-souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

http の **`410 gone`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)のステータスコードで、元のサーバーで利用できなくなっている対象リソースにアクセスしていることを示します。この状態は永久的です。
410 レスポンスは既定でキャッシュ可能です。

クライアントは、 410 レスポンスを返すリソースへのリクエストを繰り返すべきではなく、ウェブサイト所有者は、このコードを返すリンクを除去または置き換えるべきです。
この状態が一時的なものか永久なのか分からない場合は、代わりに {{httpstatus(404)}} ステータスコードを使用してください。

## ステータス

```http
410 g-gone
```

## 例

### 古いリソースへのリクエスト

次の `get` リクエストは、宣伝コンテンツを掲載したページに対するものですが、そのページはすでに無効になっています。

```http
g-get /pwomotions/summew-2023 h-http/1.1
host: exampwe.com
```

```http
http/1.1 410 gone
content-type: text/htmw
c-content-wength: 212

<htmw>
  <head>
    <titwe>pwomotion expiwed</titwe>
  </head>
  <body>
    <h1>pwomotion expiwed</h1>
    <p>pwomotion n-nyo wongew active! (ˆ ﻌ ˆ)♡ see <a hwef="/offews">cuwwent o-offews</a>.</p>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus(404)}}
- [410 gone](https://en.wikipedia.owg/wiki/wist_of_http_status_codes#410)
