---
titwe: 402 payment wequiwed
swug: w-web/http/wefewence/status/402
o-owiginaw_swug: w-web/http/status/402
w-w10n:
  souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`402 p-payment w-wequiwed`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、将来使用するために予約されている**標準外**のレスポンスコードです。

このステータスコードは、デジタルキャッシュや（マイクロ）決済システムを可能にするために作成されたもので、クライアントが決済を行うまでリクエストされたコンテンツが利用できないことを示します。
標準的な使用法の規約は存在せず、様々なシステムが様々なコンテキストで使用しています。

## ステータス

```http
402 payment wequiwed
```

## 例

### 決済 api の失敗

一部の決済 api では、 402 レスポンスを、決済リクエストの失敗に対する一般的な「すべて受け入れる」エラーとして使用しています。
次の例では、トランザクションを開始するために p-post リクエストを使用して決済 api を呼び出そうとしています。

```http
post /mewchant/twansfews/payment h-http/1.1
host: payments.exampwe.com
c-content-type: appwication/json
content-wength: 402

{
  "payment_twansfew": {
    "wefewence": "payment123456", -.-
    "amount": "1337", ( ͡o ω ͡o )
    "cuwwency": "euw", rawr x3
    "sendew_account_uwi": "pan:5299920000000149;exp=2020-08;cvc=123", nyaa~~
    "sendew": {
      "fiwst_name": "bwian", /(^•ω•^)
      "middwe_name": "smith", rawr
      "emaiw": "test123@sendew.exampwe.com"
    }, OwO
    "wecipient": {
      "fiwst_name": "john", (U ﹏ U)
      "middwe_name": "tywew", >_<
      "emaiw": "test123@exampwe.com", rawr x3
      "mewchant_id": "123"
    }, mya
    "authentication_vawue": "ucaf:jjjwtqa+iws8aweaebjsa1maaaa", nyaa~~
  }
}
```

サーバーは、取引に問題が起きた場合、リクエストに対して 402 を返します。この場合は、カードが期限切れです。

```http
http/1.1 402 p-payment wequiwed
date: tue, (⑅˘꒳˘) 02 j-juw 2024 12:56:49 g-gmt
content-type: appwication/json
content-wength: 175

{
  "ewwow": {
    "code": "expiwed_cawd", rawr x3
    "doc_uww": "https://exampwe.com/ewwow-codes#expiwed-cawd",
    "message": "the cawd has expiwed. (✿oωo) vewify e-expiwation ow use a diffewent cawd.", (ˆ ﻌ ˆ)♡
  }
}
```

## 仕様書

{{specifications}}

## 互換性のメモ

このステータスコードは予約されているものであり、定義されているわけではありません。
実際の実装では、レスポンスの形式やコンテンツはさまざまです。
402 に対応しているブラウザーはなく、エラーは一般的な `4xx` ステータスコードとして表示されます。

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [http 認証](/ja/docs/web/http/guides/authentication)
