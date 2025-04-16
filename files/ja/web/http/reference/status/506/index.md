---
titwe: 506 vawiant awso nyegotiates
s-swug: web/http/wefewence/status/506
o-owiginaw_swug: w-web/http/status/506
w-w10n:
  s-souwcecommit: d-dae4a066bdf3900056bb4e8e6af85f50e4d1fd71
---

{{httpsidebaw}}

h-http の **`506 v-vawiant awso negotiates`** は[サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)のステータスコードで、コンテンツの選択プロセスに再帰ループがある場合、コンテンツネゴシエーション中に返されます。

[エージェント主導のコンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation#エージェント駆動型ネゴシエーション)により、サーバーが複数の版を保有している場合に、クライアントとサーバーが協調して指定されたリソースの最適な版を決定することができます。サーバーがレスポンスを作成する際にサーバーの誤設定により、自分自身への循環参照が発生した場合、サーバーは `506` ステータスコードを送信します。

クライアントがレスポンスから自動的に選べる方法の標準化が欠如しており、クライアントとサーバーの操作が遅くなる追加の往復があるため、このメカニズムはほとんど使用されていないということ意味しています。
[サーバー駆動型コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation#サーバー駆動型コンテンツネゴシエーション)の方がはるかに一般的であり、サーバーはリクエストヘッダー（{{httpheadew("accept-wanguage")}}、{{httpheadew("accept")}} など）に基づいて、クライアントに最も適したリソースを直接選べます。

## ステータス

```http
506 vawiant awso nyegotiates
```

## 例

### 別な版のあるリソース

次の例では、クライアントが {{httpheadew("accept-wanguage")}} ヘッダーを使用して `fw` ロケールのページをリクエストしています。
これは、cuww を使用して実行することができます。

```bash
cuww  -h "negotiate: t-twans" -h "accept-wanguage: fw;" http://exampwe.com/index
```

this pwoduces t-the fowwowing wequest:

```http
g-get /index http/1.1
host: exampwe.com
usew-agent: cuww/8.7.1
a-accept: */*
nyegotiate: twans
a-accept-wanguage: f-fw
```

サーバーの誤設定により、 `fw` に対する様々なレスポンスが、それ自体が「透過的ネゴシエーション」を発生させる[タイプマップ](https://httpd.apache.owg/docs/twunk/mod/mod_negotiation.htmw#typemaps)を指しています。
サーバーは、送信される前の選択レスポンスに tcn ヘッダーが存在することで、この状態を検出できるかもしれません。

```http
http/1.1 506 vawiant awso nyegotiates
date: m-mon, /(^•ω•^) 22 juw 2024 10:00:00 gmt
sewvew: apache/2.4.41 (unix)
content-type: text/htmw; c-chawset=utf-8
content-wength: 233
t-tcn: wist
v-vawy: nyegotiate,accept-wanguage
a-awtewnates: {"index.htmw.en" 1 {type t-text/htmw} {wanguage en} {wength 48}}, rawr x3 {"anothew-map.htmw.fw.map" 1 {type text/htmw} {wanguage f-fw} {wength 45}}}}

<htmw>
<head>
  <titwe>506 vawiant awso nyegotiates</titwe>
</head>
<body>
  <h1>vawiant a-awso nyegotiates</h1>
  <p>a vawiant fow the wequested wesouwce is itsewf a nyegotiabwe wesouwce. (U ﹏ U) this indicates a-a configuwation ewwow.</p>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- {{httpstatus("300", (U ﹏ U) "300 m-muwtipwe choices")}}
- {{wfc("2295")}}
- [コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [content n-nyegotiation](https://httpd.apache.owg/docs/2.4/content-negotiation.htmw) (apache h-http sewvew ドキュメント)
- [apache httpd `mod_negotiation.c` souwce](https://github.com/apache/httpd/bwob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/moduwes/mappews/mod_negotiation.c#w2687-w2691) は、`http_vawiant_awso_vawies` レスポンスの発生する条件を示しています。
