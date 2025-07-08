---
title: 308 Permanent Redirect
slug: Web/HTTP/Reference/Status/308
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

HTTP の **`308 Permanent Redirect`** は[リダイレクトレスポンス](/ja/docs/Web/HTTP/Reference/Status#リダイレクトメッセージ)ステータスコードで、リクエストされたリソースが {{HTTPHeader("Location")}} ヘッダーで示された URL へ完全に移動したことを示します。

このステータスを受信したブラウザーは、自動的に `Location` ヘッダー内の URL のリソースをリクエストし、ユーザーを新しいページにリダイレクトします。
このレスポンスを受け取った検索エンジンは、リンクを元の URL からリダイレクトされたリソースへと関連付けするため、 {{Glossary("SEO")}} の値を新しい URL に移行させます。

リダイレクトされたリクエストでは、クライアントによってリクエストメソッドと本体が**変更されることはありません**。
{{HTTPStatus("301", "301 Moved Permanently")}} では、リダイレクトが実行された際にリクエストメソッドと本体を変更しないことが要求されますが、古いクライアントでは、これに誤って対応して代わりに {{HTTPMethod("GET")}} メソッドを使用してしまいます。

> [!NOTE]
> ウェブアプリケーションによっては、 `308 Permanent Redirect` を標準外かつ他の目的に使用していることがあります。
> 例えば、 Google Drive はアップロードが不完全に停止したことを表すために、 `308 Resume Incomplete` レスポンスを使用します。
> Google ドライブのドキュメント内の「[再開可能なダウンロードを実行する](https://developers.google.com/workspace/drive/api/guides/manage-uploads)」を参照してください。

## ステータス

```http
308 Permanent Redirect
```

## 例

### 移動したリソースに対する 308 レスポンス

```http
GET /featured HTTP/1.1
Host: www.example.org
```

```http
HTTP/1.1 308 Permanent Redirect
Location: http://www.example.com/featured
Content-Length: 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP のリダイレクト](/ja/docs/Web/HTTP/Guides/Redirections)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}: このステータスコードに相当するもので、リクエストメソッドが {{HTTPMethod("GET")}} ではない場合に変更する可能性があります。
- {{HTTPStatus("302", "302 Found")}}: 一時リダイレクト
