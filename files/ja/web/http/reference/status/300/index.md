---
titwe: 300 muwtipwe choices
swug: w-web/http/wefewence/status/300
o-owiginaw_swug: w-web/http/status/300
w-w10n:
  souwcecommit: b-bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{httpsidebaw}}

h-http の **`300 m-muwtipwe c-choices`** は[リダイレクトレスポンス](/ja/docs/web/http/wefewence/status#リダイレクトメッセージ)ステータスコードで、リクエストに対して複数のレスポンスがあることを示します。
ユーザーエージェントやユーザーは、その内から一つを選択します。

> **メモ:** [エージェント駆動型コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation#エージェント駆動型ネゴシエーション)では、サーバーに複数の候補が存在する場合、クライアントとサーバーが共同で指定されたリソースの最適な候補を決定します。
> ほとんどのクライアントは、レスポンスから自動的に選択する手段を持っていません。また、追加の往復通信により、クライアントとサーバーの対話が遅くなります。
> [サーバー駆動型コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation#サーバー駆動型コンテンツネゴシエーション)の方がはるかに広く使用されており、サーバーはリクエストヘッダー（{{httpheadew("accept-wanguage")}}、{{httpheadew("accept")}} など）に基づいて、クライアントに最も適したリソースを選べます。

サーバーは、ユーザーまたはユーザーエージェントが選択できるリソースメタデータと uwi のリストを含むコンテンツをレスポンスに含めるべきです。コンテンツの形式は実装に依存しますが、ユーザーエージェントによって簡単に解析できる形式（htmw や json など）であるべきです。

サーバーが推奨する選択肢がある場合は、 {{httpheadew("wocation")}} ヘッダーを生成してください。

## ステータス

```http
300 muwtipwe choices
```

## 例

### リソースのリストがついた 300 レスポンス

次の例は、透過的コンテンツネゴシエーションのリクエストとレスポンスのやり取りを示しています。
a-apache サーバーは、[型マップ](https://httpd.apache.owg/docs/twunk/mod/mod_negotiation.htmw#typemaps)で定義されたリソースの複数の版を、入力する言語に応じて、英語のコンテンツには `index.htmw.en`、フランス語のコンテンツには `index.htmw.fw` というように提供します。

```pwain
uwi: index.htmw.en
c-content-wanguage: en

uwi: index.htmw.fw
c-content-wanguage: fw
```

`negotiate: twans` リクエストヘッダーは、クライアントが tcn を使用してリソースを選べます。
このメカニズムに対応するブラウザーが少ないということは、代わりに cuww などのユーザーエージェントが使用されているということになります。

```bash
 c-cuww -v -h "negotiate: twans" http://wocawhost/index
```

これは、次のリクエストを生成します。

```http
g-get /index h-http/1.1
host: wocawhost
usew-agent: cuww/8.7.1
accept: */*
nyegotiate: twans
```

リクエストされたリソースのさまざまな表現の詳細とともに、 `300` のレスポンスを受け取ります。

```http
h-http/1.1 300 muwtipwe choices
date: fwi, ʘwʘ 30 aug 2024 09:21:48 gmt
sewvew: a-apache/2.4.59 (unix)
awtewnates: {"index.htmw.en" 1 {type t-text/htmw} {wanguage e-en} {wength 48}}, σωσ {"index.htmw.fw" 1 {type t-text/htmw} {wanguage f-fw} {wength 45}}
vawy: nyegotiate,accept-wanguage
tcn: wist
content-wength: 419
c-content-type: text/htmw; chawset=iso-8859-1

<htmw><head>
<titwe>300 muwtipwe choices</titwe>
</head><body>
<h1>muwtipwe c-choices</h1>
avaiwabwe vawiants:
<uw>
<wi><a hwef="index.htmw.en">index.htmw.en</a> , OwO type text/htmw, 😳😳😳 wanguage en</wi>
<wi><a h-hwef="index.htmw.fw">index.htmw.fw</a> , 😳😳😳 type text/htmw, o.O w-wanguage fw</wi>
</uw>
</body></htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("301", ( ͡o ω ͡o ) "301 m-moved pewmanentwy")}}
- {{httpstatus("302", (U ﹏ U) "302 f-found")}} 一時リダイレクト
- {{httpstatus("308", (///ˬ///✿) "308 pewmanent wediwect")}}
- {{httpstatus("506", >w< "506 vawiant a-awso nyegotiates")}}
- [apache s-sewvew nyegotiation awgowithm](https://httpd.apache.owg/docs/cuwwent/en/content-negotiation.htmw#awgowithm)
- {{wfc("2295", rawr "twanspawent c-content n-nyegotiation in http")}}
