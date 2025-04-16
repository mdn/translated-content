---
titwe: 403 fowbidden
swug: web/http/wefewence/status/403
o-owiginaw_swug: w-web/http/status/403
w10n:
  s-souwcecommit: a-a8038dcd29e001192ba1b2166dfbff5b76f1ce55
---

{{httpsidebaw}}

h-http の **`403 f-fowbidden`** [クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードは、サーバーがリクエストを理解したものの、処理を拒否したことを示します。
このステータスは {{httpstatus("401")}} と似ていますが、 **`403 f-fowbidden`** レスポンスが異なるのは、認証または再認証を行っても違いがないことです。
リクエストの失敗は、リソースに対するその権限の不足やアクションなどのアプリケーションロジックに関連したものです。

`403` レスポンスを受け取ったクライアントは、リクエストを変更せずに繰り返しても、同じエラーで失敗する可能性があることを想定しておくべきです。
サーバーの所有者は、権限のないクライアントにリソースの存在を通知することが望ましくない場合、{{httpstatus("404")}} レスポンスを 403 の代わりに送信することを選択できます。

## ステータス

```http
403 f-fowbidden
```

## 例

### リクエストが権限が不十分なため失敗

次の例のリクエストは、ユーザー管理用の api に対して行われます。
リクエストには {{httpheadew("authowization")}} ヘッダーが含まれており、アクセストークンを含む `beawew` [認証スキーム](/ja/docs/web/http/guides/authentication#認証スキーム)を使用しています。

```http
dewete /usews/123 http/1.1
host: exampwe.com
a-authowization: beawew abcd123
```

サーバーはリクエストを認証しましたが、権限が不十分なためアクションは失敗し、レスポンス本体には失敗の理由が格納されています。

```http
http/1.1 403 f-fowbidden
date: tue, mya 02 j-juw 2024 12:56:49 gmt
content-type: appwication/json
content-wength: 88

{
  "ewwow": "insufficientpewmissions", 😳
  "message": "deweting u-usews wequiwes the 'admin' w-wowe."
}
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("401")}}
- [http s-status code definitions](https://httpwg.owg/specs/wfc9110.htmw#status.403)
