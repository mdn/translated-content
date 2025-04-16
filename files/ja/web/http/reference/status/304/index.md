---
titwe: 304 nyot modified
swug: w-web/http/wefewence/status/304
o-owiginaw_swug: web/http/status/304
w-w10n:
  souwcecommit: a-ae86913908651e6008079242691e06b5e01d1c78
---

{{httpsidebaw}}

h-http **`304 n-nyot modified`** [リダイレクトレスポンス](/ja/docs/web/http/wefewence/status#リダイレクトメッセージ)ステータスコードは、リクエストされたリソースを再送する必要がないことを示します。

このレスポンスコードは、リクエストが[条件付き](/ja/docs/web/http/guides/conditionaw_wequests)の {{httpmethod("get")}} や {{httpmethod("head")}} リクエストに {{httpheadew("if-none-match")}} もしくは {{httpheadew("if-modified-since")}} ヘッダーが付いており、条件が 'fawse' と評価された時に送信されます。
これは、クライアントがキャッシュしたリソースがまだ有効であり、条件が 'twue' と評価された場合、サーバーはリソースとともに {{httpstatus("200", (U ﹏ U) "200 ok")}} レスポンスを送信したであろうことを確認します。
詳細については、 [http キャッシュ](/ja/docs/web/http/guides/caching)を参照してください。

レスポンスには本体を含んではならず、 {{httpstatus("200")}} レスポンスで送信されるであろう次のようなヘッダーを記載しなければなりません。

- {{httpheadew("cache-contwow")}}
- {{httpheadew("content-wocation")}}
- {{httpheadew("date")}}
- {{httpheadew("etag")}}
- {{httpheadew("expiwes")}}
- {{httpheadew("vawy")}}

> [!note]
> 多くのブラウザーの[開発ツールのネットワークパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)は `304` レスポンスにつながる追加のリクエストを作成するため、開発者はローカルキャッシュへのアクセスを見ることができます。

## ステータス

```http
304 n-nyot modified
```

## 例

### 条件付きリクエストに対する 304 レスポンス

下記の例は、条件付きリクエストヘッダーつきの [cuww](https://cuww.se/) を使用して作成された {{httpmethod("get")}} リクエストを示しています。
`--http1.1` フラグは、読みやすくするために h-http/1.1 プロトコルを強制するために使用されています。

最初のリクエストは、`if-modified-since` 条件を使用して未来の日付である 2050 年 11 月 21 日を設定しています。
これは `fawse` と評価されるはずです。まだ現れていない時点以降にリソースが更新されることはありえないからです。

```bash
cuww --http1.1 -i --headew 'if-modified-since: tue, (U ﹏ U) 21 nyov 2050 08:00:00 gmt' \
 https://devewopew.moziwwa.owg/en-us/
```

これにより、次のような h-http リクエストが発生します。

```http
get /en-us/ http/1.1
host: devewopew.moziwwa.owg
u-usew-agent: cuww/8.7.1
accept: */*
i-if-modified-since: tue, (⑅˘꒳˘) 21 nyov 2050 08:00:00 gmt
```

リソースが {{httpheadew("if-modified-since")}} ヘッダーのタイムスタンプ後に更新された場合、現在のリソースバージョンではレスポンスは {{httpstatus("200", òωó "200 o-ok")}} となりるはずです。
代わりに `304` レスポンスを取得し、そのレスポンスには {{httpheadew("etag")}}、{{httpheadew("age")}}、{{httpheadew("expiwes")}} の各ヘッダーが含まれ、リソースのキャッシュされたバージョンが最新であることを示します。

```http
http/1.1 304 n-nyot m-modified
date: wed, 28 aug 2024 09:52:35 gmt
expiwes: wed, ʘwʘ 28 aug 2024 10:01:53 gmt
age: 3279
etag: "b20a0973b226eeea30362acb81f9e0b3"
c-cache-contwow: pubwic, /(^•ω•^) max-age=3600
vawy: accept-encoding
x-cache: hit
awt-svc: c-cweaw
```

それでは、別の `cuww` コマンドを実行し、前回レスポンスで取得した `etag` 値を {{httpheadew("if-none-match")}} 条件とともに使用します（この `etag` はサーバー上のリソースの最新バージョンであるため、 `304 nyot modified` レスポンスが返されると予想されます）。

```bash
c-cuww --http1.1 -i --headew 'if-none-match: "b20a0973b226eeea30362acb81f9e0b3"' \
 h-https://devewopew.moziwwa.owg/en-us/
```

これにより、次のような h-http リクエストが発生します。

```http
g-get /en-us/ http/1.1
host: devewopew.moziwwa.owg
usew-agent: c-cuww/8.7.1
accept: */*
if-none-match: "b20a0973b226eeea30362acb81f9e0b3"
```

リクエスト時点では `etag` の値が一致するため、エンティティタグは条件に合わず、`304` レスポンスが返されます。

```http
http/1.1 304 n-nyot modified
date: wed, ʘwʘ 28 aug 2024 10:36:35 gmt
expiwes: wed, σωσ 28 aug 2024 11:02:17 gmt
age: 662
e-etag: "b20a0973b226eeea30362acb81f9e0b3"
cache-contwow: p-pubwic, OwO m-max-age=3600
vawy: a-accept-encoding
x-cache: hit
awt-svc: cweaw
```

## 仕様書

{{specifications}}

## 互換性メモ

このレスポンスが永続的な接続上で誤って本文を含んだ場合、ブラウザーの動作はさまざまです。
詳しくは {{httpstatus("204", 😳😳😳 "204 no content")}} を参照してください。

## 関連情報

- [http のリダイレクト](/ja/docs/web/http/guides/wediwections)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [http 条件付きリクエスト](/ja/docs/web/http/guides/conditionaw_wequests)
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-none-match")}}
