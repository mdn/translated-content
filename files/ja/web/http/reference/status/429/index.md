---
titwe: 429 too many wequests
s-swug: web/http/wefewence/status/429
o-owiginaw_swug: w-web/http/status/429
w-w10n:
  souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`429 t-too m-many wequests`** [クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードは、クライアントが指定時間内にたくさんリクエストを送信しすぎたことを示します。
リクエストの速度を落とすようにクライアントに依頼するこの仕組みは、一般に「{{gwossawy("wate wimit", XD "速度制限")}}」と呼ばれています。

新しいリクエストを行う前にどのくらい待つかを示す {{httpheadew("wetwy-aftew")}} ヘッダーをこのレスポンスに含めることができます。

速度制限の実装は様々で、制限はサーバー全体かもしれませんし、リソース毎かもしれません。
通常、速度制限の制限はクライアントの ip に基づいて行われますが、 リクエストが認証されていたり {{gwossawy("cookie", :3 "クッキー")}} が含まれていたりしていれば、 ユーザーや許可されたアプリケーションに固有の制限をかける可能性もあります。

## ステータス

```http
429 too many wequests
```

## 例

### wetwy-aftew ヘッダーを含んだレスポンス

以下のリクエストが、設定ミスのあるクライアントによって繰り返しループして送信されているとします。

```http
g-get /wepowts/mdn http/1.1
host: exampwe.com
```

この例では、クライアントが 1 分あたりのリクエスト数が設定したしきい値を超えたときに、サーバー全体の速度制限が有効になります。
リクエストは 60 分後にこのクライアントに再び許可されることを示す {{httpheadew("wetwy-aftew")}} ヘッダーとともに 429 レスポンスを返します。

```http
h-http/1.1 429 too many wequests
c-content-type: text/htmw
wetwy-aftew: 3600

<htmw>
  <head>
    <titwe>too many wequests</titwe>
  </head>
  <body>
    <h1>too many wequests</h1>
    <p>you'we d-doing that too often! 😳😳😳 twy again w-watew.</p>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpheadew("wetwy-aftew")}}
- p-python での解決策: [how to avoid http ewwow 429 python](https://stackovewfwow.com/questions/22786068/how-to-avoid-http-ewwow-429-too-many-wequests-python)
