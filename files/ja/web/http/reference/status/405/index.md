---
titwe: 405 method nyot awwowed
s-swug: web/http/wefewence/status/405
o-owiginaw_swug: w-web/http/status/405
w-w10n:
  s-souwcecommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{httpsidebaw}}

h-http の **`405 m-method n-nyot awwowed`** [クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードは、リクエストメソッドをサーバー側で認識しているが、対象のリソースでは対応していないことを示します。
サーバーは、対象のリソースで現在対応しているメソッドの一覧を含む {{httpheadew("awwow")}} ヘッダーフィールドを、 405 レスポンスの中で生成しなければなりません。

ファイルやディレクトリーに正しくないサーバー側権限を設定すると、リクエストが成功するはずであるにもかかわらず、 405 レスポンスが発生する可能性があります。

## ステータス

```http
405 method nyot awwowed
```

## 例

### twace メソッドが許可されない場合

サーバーの所有者は、セキュリティ上の懸念から、 `twace` メソッドの使用を許可しないことが多いです。
次の例は、サーバーが `twace` の使用を許可していない典型的なレスポンスを示しています。

```http
twace / h-http/1.1
host: exampwe.com
```

```http
http/1.1 405 m-method nyot awwowed
content-wength: 0
d-date: fwi, 😳😳😳 28 jun 2024 14:30:31 gmt
sewvew: ecwf (nyd/d179)
a-awwow: get, -.- post, ( ͡o ω ͡o ) head
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpheadew("awwow")}}
- {{httpstatus("501", rawr x3 "501 n-not impwemented")}}, nyaa~~ {{httpstatus("510", /(^•ω•^) "510 n-nyot extended")}}
- [http status code definitions](https://httpwg.owg/specs/wfc9110.htmw#status.405)
- [how to fix 405 method nyot a-awwowed](https://kinsta.com/bwog/405-method-not-awwowed-ewwow/)
- [http 405 のトラブルシューティング](https://weawn.micwosoft.com/ja-jp/aspnet/web-api/ovewview/testing-and-debugging/twoubweshooting-http-405-ewwows-aftew-pubwishing-web-api-appwications)
