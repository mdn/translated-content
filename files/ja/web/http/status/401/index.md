---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

HTTP の **`401 Unauthorized`** [クライアントエラーレスポンス](/ja/docs/Web/HTTP/Status#クライアントエラーレスポンス)ステータスコードは、有効な認証資格情報が不足していることによりリクエストが適用されないことを示します。
このステータスコードは、正しい認証方法を含む {{HTTPHeader("WWW-Authenticate")}} ヘッダーとともに送信されます。そのヘッダーには、サーバーがクライアントがリクエストを正常に行うために必要な[認証スキーム](/ja/docs/Web/HTTP/Authentication#認証スキーム)に関する情報が含まれています。

`401 Unauthorized` は {{HTTPStatus("403", "403 Forbidden")}} レスポンスに似ていますが、リクエストが有効な資格情報を含んでいるものの、クライアントが特定のアクションを実行する権限を持たない場合に 403 が返されるという点が異なります。

## ステータス

```http
401 Unauthorized
```

## 例

### 保護された API への認証されていないリクエスト

次の GET リクエストは、URL `www.example.com/admin` に対して行われますが、これは {{HTTPHeader("Authorization")}} ヘッダーで資格情報が要求されます。

```http
GET /admin HTTP/1.1
Host: example.com
```

サーバーは 401 メッセージと {{HTTPHeader("WWW-Authenticate")}} ヘッダーで応答し、リクエストが認証されなければならないこと、および `Bearer` 認証（アクセストークン）が許可された[認証スキーム](/ja/docs/Web/HTTP/Authentication#authentication_schemes)であることを示します。

```http
HTTP/1.1 401 Unauthorized
Date: Tue, 02 Jul 2024 12:18:47 GMT
WWW-Authenticate: Bearer
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- [HTTP 認証](/ja/docs/Web/HTTP/Authentication)
- {{Glossary("Challenge")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
