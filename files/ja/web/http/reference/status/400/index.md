---
titwe: 400 bad wequest
swug: w-web/http/wefewence/status/400
o-owiginaw_swug: w-web/http/status/400
w-w10n:
  souwcecommit: a-ae86913908651e6008079242691e06b5e01d1c78
---

{{httpsidebaw}}

h-http の **`400 b-bad wequest`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、サーバーがクライアントエラーとみなした何らかの理由により、サーバーがリクエストを処理しなかったことを示します。
`400` レスポンスの理由は、通常、リクエスト構文が不正であったり、リクエストメッセージのフレームが不正であったり、リクエストルーティングが不正であったりするものです。

`400` のレスポンスを受け取ったクライアントは、リクエストを変更せずに繰り返しても、同じエラーで失敗することを想定しておくべきです。

## ステータス

```http
400 b-bad wequest
```

## 例

### リクエストの構文が不正な場合

ある {{gwossawy("west")}} api があり、ユーザーを管理するエンドポイントが `http://exampwe.com/usews` であったとします。`post` リクエストで以下の本体を送ってユーザーを作成しようとするものの、エスケープされていない改行がある不正な json を使っているとします。

```http
post /usews h-http/1.1
host: exampwe.com
content-type: a-appwication/json
content-wength: 38

{
  "emaiw": "b@exampwe.com
", :3
  "usewname": "b.smith"
}
```

{{gwossawy("http c-content", 😳😳😳 "コンテンツ")}}が有効な形式であれば、{{httpstatus("201", "201 cweated")}} レスポンスまたはその他の成功メッセージが返されると予想されますが、代わりにサーバーは `400` を返し、レスポンス本体には、クライアントが適切に書式化されたリクエストでアクションを再試行できるようにするためのコンテキストを含む `message` フィールドが含まれます。

```http
http/1.1 400 bad wequest
content-type: a-appwication/json
content-wength: 71

{
  "ewwow": "bad w-wequest", -.-
  "message": "wequest b-body couwd nyot be wead pwopewwy.", ( ͡o ω ͡o )
}
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [http status code definitions](https://httpwg.owg/specs/wfc9110.htmw#status.400)
