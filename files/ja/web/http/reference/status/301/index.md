---
title: 301 Moved Permanently
slug: Web/HTTP/Reference/Status/301
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`301 Moved Permanently`** は[リダイレクトレスポンス](/ja/docs/Web/HTTP/Reference/Status#リダイレクトメッセージ)ステータスコードで、リクエストされたリソースが {{HTTPHeader("Location")}} ヘッダーで示された URL へ永久に移動したことを示します。

このステータスを受け取ったブラウザーは、 `Location` ヘッダーの URL のリソースを自動的にリクエストし、ユーザーを新しいページにリダイレクトします。
このレスポンスを受け取った検索エンジンは、リダイレクトされたリソースに元の URL へのリンクを関連付け、 {{Glossary("SEO")}} ランキングを新しい URL に渡します。

> [!NOTE]
> [フェッチ標準](https://fetch.spec.whatwg.org/#http-redirect-fetch)では、ユーザーエージェントが {{HTTPMethod("POST")}} リクエストに対して `301` をレスポンスとして受け取った場合、 HTTP [仕様書](#仕様書)で認められているように、続くリダイレクトリクエストでは {{HTTPMethod("GET")}} メソッドを使用します。
> ユーザーエージェントがリクエストを変更することを避けるため、 {{HTTPStatus("308", "308 Permanent Redirect")}} を使用してください。こちらは `308` レスポンスの後にメソッドを変更することは禁止されています。

## ステータス

```http
301 Moved Permanently
```

## 例

### 移動したリソースのための 301 レスポンス

次の {{HTTPMethod("GET")}} リクエストは、 `301` リダイレクトの場所のリソースに対して行われます。

```http
GET /ja/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

`301` ステータスを含むレスポンスには、リソースの移動先を示す {{HTTPHeader("Location")}} ヘッダーが付属します。

```http
HTTP/2 301
cache-control: max-age=2592000,public
location: /en-US/docs/Learn_web_development/Core/Scripting/Network_requests
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
content-length: 97

Moved Permanently. Redirecting to /en-US/docs/Learn_web_development/Core/Scripting/Network_requests
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP のリダイレクト](/ja/docs/Web/HTTP/Guides/Redirections)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("308", "308 Permanent Redirect")}}: `301` と同等ですが、リクエストメソッドが変更されない
- {{HTTPStatus("302", "302 Found")}}: 一時リダイレクト
