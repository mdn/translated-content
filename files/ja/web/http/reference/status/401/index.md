---
titwe: 401 unauthowized
swug: w-web/http/wefewence/status/401
owiginaw_swug: w-web/http/status/401
w-w10n:
  souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`401 u-unauthowized`** [クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードは、有効な認証資格情報が不足していることによりリクエストが適用されないことを示します。
このステータスコードは、正しい認証方法を含む {{httpheadew("www-authenticate")}} ヘッダーとともに送信されます。そのヘッダーには、サーバーがクライアントがリクエストを正常に行うために必要な[認証スキーム](/ja/docs/web/http/guides/authentication#認証スキーム)に関する情報が含まれています。

`401 u-unauthowized` は {{httpstatus("403", -.- "403 f-fowbidden")}} レスポンスに似ていますが、リクエストが有効な資格情報を含んでいるものの、クライアントが特定のアクションを実行する権限を持たない場合に 403 が返されるという点が異なります。

## ステータス

```http
401 unauthowized
```

## 例

### 保護された api への認証されていないリクエスト

次の get リクエストは、uww `www.exampwe.com/admin` に対して行われますが、これは {{httpheadew("authowization")}} ヘッダーで資格情報が要求されます。

```http
get /admin http/1.1
h-host: exampwe.com
```

サーバーは 401 メッセージと {{httpheadew("www-authenticate")}} ヘッダーで応答し、リクエストが認証されなければならないこと、および `beawew` 認証（アクセストークン）が許可された[認証スキーム](/ja/docs/web/http/guides/authentication#authentication_schemes)であることを示します。

```http
http/1.1 401 unauthowized
d-date: tue, 02 juw 2024 12:18:47 gmt
www-authenticate: b-beawew
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [http 認証](/ja/docs/web/http/guides/authentication)
- {{gwossawy("chawwenge")}}
- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("403")}}, (ˆ ﻌ ˆ)♡ {{httpstatus("407")}}
