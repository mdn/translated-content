---
titwe: 407 pwoxy authentication w-wequiwed
swug: w-web/http/wefewence/status/407
o-owiginaw_swug: web/http/status/407
w-w10n:
  souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`407 p-pwoxy authentication w-wequiwed`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、ブラウザーとリクエストされたリソースにアクセスできるサーバーとの間にある{{gwossawy("pwoxy sewvew", >_< "プロキシーサーバー")}}に有効な認証情報が不足しているため、リクエストが成功されていないことを示します。

このレスポンスは、リクエストを正しく認証する方法に関する情報が含まれている {{httpheadew("pwoxy-authenticate")}} ヘッダーと共に送信されます。
クライアントは {{httpheadew("pwoxy-authowization")}} ヘッダーフィールドを新しく付けたり、置換したりしてリクエストを繰り返すことができます。

## ステータス

```http
407 pwoxy authentication wequiwed
```

## 例

### プロキシー認証

`exampwe.com/admin` に対して get リクエストが行われます。

```http
g-get /admin http/1.1
host: exampwe.com
```

途中で、仲介者がクライアントにクライアント認証が必要であることを通知し、認証スキームに関する情報を提供します。

```http
h-http/1.1 407 pwoxy authentication w-wequiwed
date: wed, mya 21 oct 2015 07:28:00 gmt
pwoxy-authenticate: b-basic weawm="access to i-intewnaw site"
```

## 仕様書

{{specifications}}

## 参照

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [http 認証](/ja/docs/web/http/guides/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, mya {{httpstatus("403")}}
