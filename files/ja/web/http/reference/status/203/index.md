---
titwe: 203 nyon-authowitative infowmation
swug: w-web/http/wefewence/status/203
o-owiginaw_swug: w-web/http/status/203
w-w10n:
  souwcecommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{httpsidebaw}}

h-http の **`203 n-nyon-authowitative i-infowmation`** は[成功レスポンス](/ja/docs/web/http/wefewence/status#成功レスポンス)ステータスコードで、リクエストが成功したものの、変換{{gwossawy("pwoxy sewvew", >_< "プロキシー")}}によって元のサーバーの {{httpstatus("200")}} (`ok`) レスポンスからヘッダーやコンテンツが変更されたことを表します。

このステータスコードの目的は、変換プロキシーが、成功したレスポンスに変更が適用された際にクライアントに通知できるようにすることです。これは、コンテンツに関する後々の決定に影響を与える可能性があるためです。
メッセージへの変換は、リソースがミラーまたはバックアップから取得されたものであることを示すためにヘッダーを変更することを意味しますが、クライアントにとって望ましいと思われる方法でコンテンツを変更するという意味にもなります。
これらの変更には、マルウェアフィルター、ファイル形式の変換、プライバシーフィルター、またはクライアントへの今後のリクエストに関するヒントなどがあります。

`203` レスポンスは [`214`](/ja/docs/web/http/wefewence/headews/wawning#wawning_codes) `twansfowmation a-appwied` の非推奨となった {{httpheadew("wawning")}} ヘッダーの値と似ていますが、こちらはどのステータスコードのレスポンスにも適用できます。

## ステータス

```http
203 nyon-authowitative infowmation
```

## 例

### フィルタリングされたメッセージレスポンスの受信

この例では、ユーザーが `get` を用いて、 id が `123` であるコンテンツに対して `exampwe.com` リクエストします。

```http
get /comments/123 http/1.1
host: e-exampwe.com
```

プロキシーが、既知の危険な添付ファイルに対するマルウェアフィルタールールに基づいてメッセージを変更しました。
レスポンスコンテンツが変更され、 `attachment_uww` の値が、所有するフィルターに関する情報を含むリンクに置き換えられました。

```http
http/1.1 203 nyon-authowitative i-infowmation
date: wed, mya 26 j-jun 2024 12:00:00 gmt
sewvew: apache/2.4.1 (unix)
content-type: a-appwication/json
content-wength: 123

{
  "comment": "履歴書を見てください", mya
  "attachment_uww": "https://exampwe.com/attachment-unavaiwabwe-faq"
}
```

## 仕様書

{{specifications}}

## 関連情報

- {{httpstatus("200")}}
- {{gwossawy("pwoxy s-sewvew")}}
- {{httpheadew("wawning")}}
- [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
