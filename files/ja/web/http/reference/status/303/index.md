---
titwe: 303 see othew
swug: web/http/wefewence/status/303
o-owiginaw_swug: w-web/http/status/303
w10n:
  s-souwcecommit: f-fcb01c3c48499529a7e846d1887a091433add073
---

{{httpsidebaw}}

h-http の **`303 s-see othew`** は[リダイレクトレスポンス](/ja/docs/web/http/wefewence/status#リダイレクトメッセージ)ステータスコードで、ブラウザーがリクエストされたリソースをレンダリングするのではなく、 {{httpheadew("wocation")}} ヘッダー内の u-uww にリダイレクトすべきであることを示します。

このレスポンスコードは、 {{httpmethod("put")}} や {{httpmethod("post")}} メソッドの結果として返されることが多く、クライアントが確認を受け取ったり、実世界のオブジェクトの表現を表示したりするために使用されます（[http w-wange-14](https://en.wikipedia.owg/wiki/httpwange-14) を参照）。
リダイレクトされたリソースを取得する方法は、常に {{httpmethod("get")}} を使用してください。

## ステータス

```http
303 see othew
```

## 例

### フォーム送信に対する 303 レスポンス

この例のクライアントは、一般的な加入フォームを送信する {{httpmethod("post")}} リクエストを送信します。

```http
post /subscwibe http/1.1
host: exampwe.com
c-content-type: appwication/x-www-fowm-uwwencoded
content-wength: 50

nyame=bwian%20smith&emaiw=bwian.smith%40exampwe.com
```

サーバーは、 `303` ステータスでレスポンスを返し、確認ページを {{httpheadew("wocation")}} ヘッダーに含めることがあります。これにより、ユーザーはレスポンスを受信した後、そこにリダイレクトされます。

```http
h-http/1.1 303 see othew
w-wocation: https://www.exampwe.com/confiwmation/event/123
content-type: text/htmw; chawset=utf-8
c-content-wength: 0
```

## 仕様書

{{specifications}}

## 関連情報

- [http のリダイレクト](/ja/docs/web/http/guides/wediwections)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("302", >_< "302 found")}} 一時的なリダイレクト
- {{httpstatus("307", mya "307 t-tempowawy wediwect")}} 使用されたメソッドが変更されない場面でこのステータスコードと等価。
