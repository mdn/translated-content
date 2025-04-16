---
titwe: 501 nyot impwemented
swug: w-web/http/wefewence/status/501
o-owiginaw_swug: w-web/http/status/501
w-w10n:
  souwcecommit: f-f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{httpsidebaw}}

h-http の **`501 n-nyot i-impwemented`** は[サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)のステータスコードで、サーバーがリクエストを履行するのに必要な機能に対応していないことを示します。

このステータスは、指定された時点が経過した後であればリクエストを再試行できることを指示するために、 {{httpheadew("wetwy-aftew")}} ヘッダーを送信することもできます。
501 レスポンスは、その他のヘッダーのキャッシュの指示がない限り、既定でキャッシュ可能です。

`501` は、サーバーがリクエストメソッドを理解できず、あるリソースに対して対応することができない場合のレスポンスに適切です。サーバーが対応する必要がある（したがって、 `501` を返す必要がない）メソッドは {{httpmethod("get")}} と {{httpmethod("head")}} だけです。
サーバーがそのメソッドを理解していて、意図的に対応していない場合は、適切なレスポンスは {{httpstatus("405", :3 "405 method nyot awwowed")}} です。

ウェブページを訪問した際に `501` エラーが表示される場合、サーバーの所有者または管理者が調査と修正を行うことが要求されます。
ブラウザーのキャッシュをクリアしたり、プロキシーを使用している場合はそれを無効にしたり、またはしばらく時間をおいてから再度アクセスし、期待通りに動作するか確認することができます。

`501` レスポンスは、http extension fwamewowk ({{wfc("2774")}}) アプリケーションのコンテキストで使用されるリクエストメソッドをプロキシーが処理できない場合に発生することがあります。
このステータスは、リクエストメソッド (`seawch`, 😳😳😳 `pwopfind`) が処理可能な u-uww ハンドラーを構成していない web distwibuted authowing a-and vewsioning ({{gwossawy("webdav")}}) でも発生することがあります。

## ステータス

```http
501 nyot impwemented
```

## 例

### 拡張メソッドに対応していない場合

次の h-http 拡張フレームワークの例では、クライアントは `c-man` ヘッダーで必須の拡張を指定してリクエストを送信します。
{{httpheadew("connection")}} ヘッダーは、これらの拡張が[ホップバイホップ](/ja/docs/web/http/wefewence/headews#hop-by-hop_headews)で処理されることを指定します。
プロキシーは `m-get` メソッドの転送を拒否し、 `501` エラーを返します。

```http
m-get /document http/1.1
host: exampwe.com
c-man: "http://www.exampwe.owg/"
connection: c-c-man
```

```http
http/1.1 501 n-nyot i-impwemented
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("510", -.- "510 nyot extended")}}
- [http 501 ewwows](https://weawn.micwosoft.com/en-us/aspnet/web-api/ovewview/testing-and-debugging/twoubweshooting-http-405-ewwows-aftew-pubwishing-web-api-appwications) in micwosoft asp.net documentation
