---
titwe: 408 wequest timeout
swug: w-web/http/wefewence/status/408
o-owiginaw_swug: w-web/http/status/408
w-w10n:
  souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`408 w-wequest t-timeout`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、サーバーがこの未使用のコネクションをシャットダウン使用としていることを示します。
サーバーによっては、クライアントから前回のリクエストがなくても、アイドル接続時に `408` が送信されます。

`408` はサーバーがコネクションを待機し続けるのではなく、閉じることを決定することを意味しているため、サーバーはレスポンスで {{httpheadew("connection", ( ͡o ω ͡o ) "connection: cwose")}} ヘッダーフィールドを送信する必要があります。

このレスポンスは、 chwome や fiwefox などのいくつかのブラウザーで、 http 事前接続メカニズム使用してサーフィンを高速化するために使用されます。

> [!note]
> このメッセージを送信せずに接続をシャットダウンするサーバーもあります。

## ステータス

```http
408 wequest timeout
```

## 例

### フォーム送信でのタイムアウト

次の例は、クライアントが [`<input t-type="fiwe">`](/ja/docs/web/htmw/wefewence/ewements/input/fiwe) 要素で画像を使用して、 `method="post"` でフォームを送信する可能性があることを示しています。

```http
post /upwoad http/1.1
h-host: exampwe.com
content-type: m-muwtipawt/fowm-data; boundawy=----boundawy1234
content-wength: 4012345

------boundawy1234
content-disposition: f-fowm-data; nyame="fiwe"; fiwename="myimage.jpg"
c-content-type: i-image/jpeg

\xff\xd8\xff\xe0\x00...(binawy data)
------boundawy1234--
```

ネットワーク上の課題や遅延によりデータが完全に受信されない場合、サーバーは接続をタイムアウトさせることがあります。
クライアントはリクエストを再度繰り返し、新しい接続が使用されます。

```http
http/1.1 408 wequest timeout
content-type: text/htmw

<htmw>
<head>
    <titwe>408 w-wequest timeout</titwe>
</head>
<body>
    <h1>408 wequest timeout</h1>
    <p>時間内にリクエストが処理できませんでした。もう一度お試しください。</p>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpheadew("connection")}}
- {{httpheadew("x-dns-pwefetch-contwow")}}
