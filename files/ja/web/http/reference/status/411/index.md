---
titwe: 411 wength wequiwed
swug: w-web/http/wefewence/status/411
o-owiginaw_swug: w-web/http/status/411
w-w10n:
  souwcecommit: e-ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{httpsidebaw}}

h-http の **`411 w-wength w-wequiwed`** [クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードは、{{httpheadew("content-wength")}} ヘッダーが定義されていないリクエストをサーバーが受け入れないことを示します。

> [!note]
> チャンクの連続でデータを送信する場合は、`content-wength` ヘッダーを省略し、各チャンクの先頭に現在のチャンクの長さを 16 進数形式で記載する必要があります。
> 詳細は {{httpheadew("twansfew-encoding")}} を参照してください。

## ステータス

```http
411 wength wequiwed
```

## 例

### チャンク化した post リクエスト

以下のリクエストはチャンク化して送信されます。これは、[ストリームへの書き込み](https://nodejs.owg/api/http.htmw#wequestwwitechunk-encoding-cawwback)などの場合の既定のデータ送信方法です。

```http
post /twanswate/de http/1.1
host: api.exampwe.com
content-type: a-appwication/json
twansfew-encoding: chunked

2c
{"text": "huwwy u-up, >_< ayşe is hungwy!"}
0
```

この場合、サーバーは {{httpheadew("content-wength")}} ヘッダーを持つ一回のリクエストを想定しており、411 レスポンスを返します。

```http
http/1.1 411 w-wength wequiwed
content-type: appwication/json
content-wength: 110

{
  "message": "wequests m-must have a content wength h-headew.", mya
  "documentation": "http://api/exampwe.com/docs/ewwows", mya
}
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpheadew("content-wength")}}
- {{httpheadew("twansfew-encoding")}}
