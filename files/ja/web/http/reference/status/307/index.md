---
title: 307 Temporary Redirect
slug: Web/HTTP/Reference/Status/307
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`307 Temporary Redirect`** は[リダイレクトレスポンス](/ja/docs/Web/HTTP/Reference/Status#リダイレクトメッセージ)ステータスコードで、リクエストされたリソースが一時的に {{HTTPHeader("Location")}} で示された URL へ移動したことを示します。

このステータスを受信したブラウザーは、自動的に `Location` ヘッダーの中の URL にあるリソースをリクエストし、ユーザーを新しいページへリダイレクトさせます。
このレスポンスを受け取った検索エンジンは、新しいリソースに元の URL へのリンクの属性を付与しないため、新しい URL に {{Glossary("SEO")}} の値が引き継がれません。

元のリクエストのメソッドと本文は、リダイレクトされたリクエストを行う際に再利用されます。
使用されるメソッドを {{HTTPMethod("GET")}} に変更したい場合は、代わりに {{HTTPStatus("303", "303 See Other")}} を使用してください。
これは {{HTTPMethod("PUT")}} メソッドへのレスポンスで、アップロードされたリソースではないところで「XYZ のアップロードに成功しました」のような確認メッセージを表示したい場合に便利です。

`307` と {{HTTPStatus("302")}} の違いは、 `307` はリダイレクトされたリクエストが行われるときに、メソッドと本文が**変更されない**ことが保証されることです。
`302` では、古いクライアントは不正にメソッドを {{HTTPMethod("GET")}} に変更してしまいます。
`307` と `302` レスポンスは、リクエストメソッドが {{HTTPMethod("GET")}} である場合は同等です。

## ステータス

```http
307 Temporary Redirect
```

## 例

### 移動したレスポンスに対する 307 レスポンス

次の {{HTTPMethod("GET")}} リクエストは、 `307` リダイレクトとなるリソースに対して行われます。
{{HTTPHeader("Location")}} ヘッダーは、リダイレクト先のリソースの URL を提供します。

```http
GET /en-US/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/2 307
location: /en-US/docs/Learn_web_development/Core/Scripting/Network_requests
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP のリダイレクト](/ja/docs/Web/HTTP/Guides/Redirections)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("302", "302 Found")}}: このステータスコードと同等ですが、 {{HTTPMethod("GET")}} 以外の時にメソッドが変更されるかもしれない。
- {{HTTPStatus("303", "303 See Other")}}: 使用されるメソッドを {{HTTPMethod("GET")}} に変更する一時リダイレクト。
- {{HTTPStatus("301", "301 Moved Permanently")}}: 永久リダイレクト
