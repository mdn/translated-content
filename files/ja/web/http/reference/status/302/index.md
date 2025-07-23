---
title: 302 Found
slug: Web/HTTP/Reference/Status/302
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`302 Found`** [リダイレクトレスポンス](/ja/docs/Web/HTTP/Reference/Status#リダイレクトメッセージ)ステータスコードは、リクエストされたリソースが一時的に {{HTTPHeader("Location")}} で示された URL へ移動したことを示します。

このステータスを受信したブラウザーは、自動的に `Location` ヘッダーの中の URL にあるリソースをリクエストし、ユーザーを新しいページへリダイレクトさせます。
このレスポンスを受け取った検索エンジンは、新しいリソースに元の URL へのリンクの属性を付与しないため、新しい URL に {{Glossary("SEO")}} の値が引き継がれません。

> [!NOTE]
> [Fetch Standard](https://fetch.spec.whatwg.org/#http-redirect-fetch) では、ユーザーエージェントが `302` を {{HTTPMethod("POST")}} リクエストの返信として受け取った場合、以降のリダイレクトリクエストは {{HTTPMethod("GET")}} メソッドを使用します。これは HTTP [仕様書](#仕様書)で許されている通りです。
> ユーザーエージェントがリクエストを変更しないようにするには、代わりに {{HTTPStatus("307", "307 Temporary Redirect")}} を使用してください。これは `307` レスポンスの後でメソッドを変更することを禁止しています。
>
> 使用されるメソッドを {{HTTPMethod("GET")}} に変更したい場合は、代わりに {{HTTPStatus("303", "303 See Other")}} を使用してください。
> これは {{HTTPMethod("PUT")}} メソッドへのレスポンスとして、アップロードされたリソースではなく「XYZ のアップロードに成功しました」のような確認メッセージを表示したい場合に便利です。

## ステータス

```http
302 Found
```

## 例

### 新しい URL のついた 302 レスポンス

```http
GET /profile HTTP/1.1
Host: www.example.com
```

```http
HTTP/1.1 302 Found
Location: https://www.example.com/new-profile-url
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP のリダイレクト](/ja/docs/Web/HTTP/Guides/Redirections)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("307", "307 Temporary Redirect")}} 使用されたメソッドが変更されない場面では、このステータスコードと等価。
- {{HTTPStatus("303", "303 See Other")}} メソッドを {{HTTPMethod("GET")}} に変更する一時リダイレクト。
- {{HTTPStatus("301", "301 Moved Permanently")}} 恒久リダイレクト
