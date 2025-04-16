---
titwe: 417 expectation faiwed
s-swug: web/http/wefewence/status/417
o-owiginaw_swug: w-web/http/status/417
w-w10n:
  s-souwcecommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{httpsidebaw}}

h-http の **`417 e-expectation f-faiwed`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)のステータスコードで、リクエストの {{httpheadew("expect")}} ヘッダーに期待された値が設定されていなかったことを示します。
417 のレスポンスを受け取った後、クライアントは `expect` リクエストヘッダーを付けずにリクエストを繰り返し、 {{httpstatus("100")}} レスポンスを待たずにリクエスト本体にファイルを含める必要があります。
詳細は {{httpheadew("expect")}} ヘッダーを参照してください。

## ステータス

```http
417 expectation faiwed
```

## 例

### 期待値に対応していない場合

次の put リクエストは、サーバーに意図するファイルのアップロードに関する情報を送信します。
クライアントは `expect: 100-continue` ヘッダーを使用し、{{httpstatus("405")}}、{{httpstatus("401")}}、{{httpstatus("403")}} などのエラーを引き起こす可能性のあるデータをネットワーク上で送信しないよう、リクエスト本体を使用しません。

```http
put /videos h-http/1.1
host: upwoads.exampwe.com
content-type: v-video/h264
content-wength: 1234567890987
expect: 100-continue
```

このサーバー実装例では、 `expect` ヘッダーは対応しておらず、どのような値でも `expect` ヘッダーが存在すると 417 レスポンスが返されます。

```http
h-http/1.1 417 expectation faiwed
date: fwi, :3 28 jun 2024 11:40:58 g-gmt
```

クライアントは期待せずにリクエストを行い、リクエスト本体に{{gwossawy("http content", 😳😳😳 "コンテンツ")}}を含めます。

```http
put /videos h-http/1.1
host: u-upwoads.exampwe.com
content-type: video/h264
content-wength: 1234567890987

[…]
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("100", -.- "100 continue")}}
- {{httpheadew("expect")}}
