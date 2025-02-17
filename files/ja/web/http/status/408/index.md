---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) **`408 Request Timeout`** レスポンスステータスコードはサーバーがこの未使用のコネクションをシャットダウンすることを意味します。 _クライアントからの以前のリクエストがなくても_、一部のサーバーによってアイドル状態のコネクションで送信されます。

`408` はサーバーがコネクションを待機し続けるのではなく、閉じることを決定することを意味しているため、サーバーはレスポンスで {{HTTPHeader("Connection", "Connection: close")}} ヘッダーフィールドを送信する必要があります。

このレスポンスは、 Chrome や Firefox などのいくつかのブラウザーで、 HTTP 事前接続メカニズム使用してサーフィンを高速化するために使用されます。

> [!NOTE]
> このメッセージを送信せずに接続をシャットダウンするサーバーもあります。

## ステータス

```http
408 Request Timeout
```

## 例

### フォーム送信でのタイムアウト

次の例は、クライアントが [`<input type="file">`](/ja/docs/Web/HTML/Element/input/file) 要素で画像を使用して、 `method="post"` でフォームを送信する可能性があることを示しています。

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...(binary data)
------Boundary1234--
```

ネットワーク上の課題や遅延によりデータが完全に受信されない場合、サーバーは接続をタイムアウトさせることがあります。
クライアントはリクエストを再度繰り返し、新しい接続が使用されます。

```http
HTTP/1.1 408 Request Timeout
Content-Type: text/html

<html>
<head>
    <title>408 Request Timeout</title>
</head>
<body>
    <h1>408 Request Timeout</h1>
    <p>時間内にリクエストが処理できませんでした。もう一度お試しください。</p>
</body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
