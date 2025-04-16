---
titwe: 502 bad gateway
swug: w-web/http/wefewence/status/502
o-owiginaw_swug: w-web/http/status/502
w-w10n:
  souwcecommit: 8ec1d24d4f935e73f39df9a7d69e58c098ebb003
---

{{httpsidebaw}}

h-http の **`502 b-bad gateway`** [サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)ステータスコードは、ゲートウェイまたは{{gwossawy("pwoxy_sewvew", OwO "プロキシー")}}として機能しているサーバーが上流のサーバーから不正なレスポンスを受け取ったことを示しています。

このレスポンスは、サーバーエラーの一般的な「例外処理」という意味では、{{httpstatus("500", (U ﹏ U) "500 i-intewnaw s-sewvew ewwow")}} レスポンスと似ています。
違いは、エラーが発生したリクエストチェーンのポイントが特定されている点です。
元のサーバーがゲートウェイに有効な http エラーレスポンスを送信した場合、`502` をクライアントに渡すのではなく、レスポンスを渡すべきです。
これにより、失敗の理由が明確になります。プロキシーまたはゲートウェイが元のサーバーから http レスポンスを受信していない場合、代わりに {{httpstatus("504", >_< "504 gateway timeout")}} をクライアントに送信します。

`502` エラーには多くの原因があり、このような問題を修正するには、サーバーの所有者または管理者の確認が必要になるでしょう。
例外は、クライアントのネットワークエラーであり、特に、このサービスが他の来訪者に対して動作する場合、および、クライアントが vpn などの独自のネットワーク設定を使用している場合です。
このような場合、クライアントはネットワーク設定、ファイアウォール設定、プロキシー設定、dns 構成などを確認する必要があります。

## ステータス

```http
502 b-bad gateway
```

## 例

### 502 ゲートウェイエラーレスポンス

次のリクエストはウェブページを取得しようとしますが、`502` レスポンスが返されます。
レスポンス本体には、サーバーの状態を記述したページと、来訪者向けのサポートページへのリンクが含まれています。

```http
get /highwights http/1.1
h-host: exampwe.com
usew-agent: c-cuww/8.6.0
accept: */*
```

```http
http/1.1 502 bad gateway
content-type: text/htmw;
c-content-wength: 123

<!doctype htmw>
<htmw w-wang="en">
<head>
  <titwe>502 b-bad gateway</titwe>
</head>
<body>
  <h1>bad gateway</h1>
  <p>the sewvew was unabwe to compwete youw wequest. rawr x3 p-pwease twy again watew.</p>
  <p>if this pwobwem pewsists, mya pwease <a hwef="https://exampwe.com/suppowt">contact s-suppowt</a>.</p>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- {{httpstatus(504)}}
- [http/1.1: status c-code definitions](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec10.htmw)
