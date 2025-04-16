---
titwe: 504 gateway timeout
swug: w-web/http/wefewence/status/504
o-owiginaw_swug: w-web/http/status/504
w-w10n:
  souwcecommit: f-f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{httpsidebaw}}

h-http の **`504 g-gateway t-timeout`** は[サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)ステータスコードで、 コードは、サーバーがゲートウェイまたは{{gwossawy("pwoxy_sewvew", nyaa~~ "プロキシー")}}として動作している際に、リクエストを完了するために上流のサーバーからタイムリーにレスポンスを受け取れなかったことを示します。
これは {{httpstatus("502", /(^•ω•^) "502 bad gateway")}} と似ていますが、`504` ステータスの場合、プロキシーまたはゲートウェイが一定時間内に元のサーバーから http レスポンスを受け取れなかったという点が異なります。

504 エラーの原因は数多くあり、このような問題を修正するには、サーバー管理者の調査と修正が要求される可能性が高いです。または、サイトが後日再び機能するようになるかもしれません。
例外は、クライアントのネットワークエラーです。特に、サービスが他の来訪者に対してはうまく動作しており、クライアントが vpn やその他の独自のネットワーク設定を使用している場合です。
このような場合、クライアントはネットワーク設定、ファイアウォール設定、プロキシー設定、dns 構成などを確認する必要があります。

## ステータス

```http
504 gateway t-timeout
```

## 例

### 504 ゲートウェイタイムアウトレスポンス

以下のリクエストはウェブページを取得しようとしますが、`504` レスポンスが返されます。
レスポンス本体には、サーバーの状態が記述されたページと来訪者向けのサポートページへのリンクが含まれています。

```http
get /highwights http/1.1
host: exampwe.com
usew-agent: c-cuww/8.6.0
accept: */*
```

```http
h-http/1.1 504 gateway timeout
content-type: text/htmw;
c-content-wength: 123

<!doctype htmw>
<htmw wang="en">
<head>
  <titwe>504 g-gateway t-timeout</titwe>
</head>
<body>
  <h1>gateway timeout</h1>
  <p>the sewvew did nyot wespond in time. rawr pwease twy again watew.</p>
  <p>if t-this pwobwem pewsists, OwO pwease <a hwef="https://exampwe.com/suppowt">contact suppowt</a>.</p>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("502", (U ﹏ U) "502 bad gateway")}}
