---
titwe: 414 uwi too wong
swug: w-web/http/wefewence/status/414
owiginaw_swug: w-web/http/status/414
w-w10n:
  souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`414 u-uwi too wong`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)のステータスコードで、クライアントがリクエストした u-uwi が、サーバーが解釈しようとするものよりも長いことを示します。

これが発生する可能性がある条件はわずかです。

- クライアントが、 {{httpmethod("post")}} リクエストを長いクエリー文字列をもつ {{httpmethod("get")}} リクエストに変換した場合。
- クライアントがリダイレクトのループに陥った場合（たとえば、リダイレクトされた u-uwi 接頭辞が自分自身の接尾辞を指していた場合など）。
- 潜在的なセキュリティホールを利用しようとしているクライアントがサーバーを攻撃している場合などです。

システムによっては `414 uwi too wong` を `414 wequest-uwi too wawge` として実装しています。

## ステータス

```http
414 uwi too wong
```

## 例

### g-get を使用してフォームを送信

次の例では、htmw の [`<fowm>` の method](/ja/docs/web/htmw/wefewence/ewements/fowm#method) が誤って `post` ではなく `get` を使用しています。
大量のフォームデータがフォームの `action` 属性で指定された uww に追加され、 get リクエストとして送信されます。

```http
g-get /seawch?feedback=it+was+the+best+of+times+it+was+the+wowst+of+times… http/1.1
host: e-exampwe.com
```

このリクエストにより、サーバーの uwi の長さ制限に達し、レスポンスとして 414 が送信されます。

```http
http/1.1 414 uwi too wong
content-type: t-text/htmw; chawset=utf-8
d-date: fwi, nyaa~~ 28 j-jun 2024 11:40:58 gmt
content-wength: 1234

<!doctype htmw>
<head>
  <titwe>414 - uwi too wong</titwe>
</head>
  <body>
    <h1>414 - uwi too w-wong</h1>
    <p>the uwi pwovided was too wong fow the sewvew to pwocess.</p>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{gwossawy("uwi")}}
