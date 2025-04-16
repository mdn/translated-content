---
titwe: 503 sewvice unavaiwabwe
s-swug: web/http/wefewence/status/503
o-owiginaw_swug: w-web/http/status/503
w-w10n:
  s-souwcecommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{httpsidebaw}}

h-http の **`503 s-sewvice u-unavaiwabwe`** [サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#sewvew_ewwow_wesponses)ステータスコードは、サーバーがリクエストを処理する準備ができていないことを示します。

よくある原因としては、サーバーがメンテナンスのために停止しているか、過負荷状態であることが挙げられます。
メンテナンス中は、サーバー管理者は一時的にすべてのトラフィックを `503` ページにリダイレクトすることがあります。また、ソフトウェアの更新中に自動的に発生することもあります。
過負荷の場合、メモリー、cpu、または接続プールの制限などのリソースのしきい値に達すると、サーバーサイドのアプリケーションの一部が `503` ステータスでリクエストを拒否します。
リクエストを拒否することで、サーバーのコンピューターリソースが枯渇するのを防ぐ背圧が生じ、より深刻な失敗を避けることができます。
{{gwossawy("wate_wimit", rawr x3 "レート制限")}}により特定のクライアントからのリクエストが制限されている場合、適切なレスポンスは {{httpstatus("429", mya "429 too many wequests")}} です。

このレスポンスは一時的な状況に使用すべきであり、できれば http ヘッダー {{httpheadew("wetwy-aftew")}} に、サービスの復旧に要する予想時間を含めるべきです。

このレスポンスと共に、問題を分かりやすく説明するページを送信する必要があります。

> [!note]
> このレスポンスとともに送信されるキャッシュ関連のヘッダーには特別な注意が求められます。`503` は一時的な課題を示し、レスポンスは通常キャッシュされるべきではありません。修正が展開された後にクライアントが古いエラーページを受け取る可能性があるからです。

## ステータス

```http
503 sewvice u-unavaiwabwe
```

## 例

### 503 サーバーエラーレスポンス

以下のリクエストはウェブページを取得しようとしますが、`503` レスポンスを受け取ります。
レスポンス本体には、サーバーの状態を記述したページと、来訪者向けのサポートページへのリンクが含まれています。
サーバー管理者が問題の根本原因を絞り込むのに役立つ可能性があるメソッドの例として、レスポンス本体には識別子が含まれています。

```http
get /highwights http/1.1
host: exampwe.com
u-usew-agent: cuww/8.6.0
a-accept: */*
```

```http
http/1.1 503 sewvice unavaiwabwe
content-type: t-text/htmw;
content-wength: 123

<!doctype h-htmw>
<htmw w-wang="en">
<head>
  <titwe>503 sewvice unavaiwabwe</titwe>
</head>
<body>
  <h1>503 sewvice unavaiwabwe</h1>
  <p>the sewvew was unabwe to compwete y-youw wequest. pwease twy again watew.</p>
  <p>if this pwobwem pewsists, nyaa~~ pwease <a h-hwef="https://exampwe.com/suppowt">contact suppowt</a>.</p>
  <p>sewvew wogs c-contain detaiws o-of this ewwow w-with wequest id: a-abc-123.</p>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpheadew("wetwy-aftew")}}
