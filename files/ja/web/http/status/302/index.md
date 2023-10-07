---
title: 302 Found
slug: Web/HTTP/Status/302
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`302 Found`** リダイレクトステータスレスポンスコードは、リクエストされたリソースが一時的に {{HTTPHeader("Location")}} で示された URL へ移動したことを示します。ブラウザーはこのページにリダイレクトしますが、検索エンジンはリソースへのリンクを更新しません (「SEO 用語」では、「リンクジュース」が新しい URL に送られなかったと言われます)。

仕様書ではリダイレクトの際にメソッド (と本文) を変更しないよう要求していますが、すべてのユーザーエージェントが準拠している訳ではありません (まだこの種のバグのあるソフトウェアが見つかるでしょう)。従って、 `302` コードは {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} メソッドへのレスポンスのみに使用し、 {{HTTPMethod("POST")}} メソッドのままリダイレクトする場合は代わりに {{HTTPStatus("307", "307 Temporary Redirect")}} (こちらでは明確にメソッドの変更が禁止されている) を使用することが推奨されています。

使用されるメソッドを {{HTTPMethod("GET")}} に変更したい場合は、代わりに {{HTTPStatus("303", "303 See Other")}} を使用してください。これは {{HTTPMethod("PUT")}} メソッドへのレスポンスとして、アップロードされたリソースではなく「XYZ のアップロードに成功しました」のような確認メッセージを表示したい場合に便利です。

## ステータス

```html
302 Found
```

## 仕様書

| 仕様書                                 | 題名                                                          |
| -------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "302 Found" , "6.4.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.status.302")}}

## 関連情報

- {{HTTPStatus("307", "307 Temporary Redirect")}} 使用されたメソッドが変更されない場面では、このステータスコードと等価。
- {{HTTPStatus("303", "303 See Other")}} メソッドを {{HTTPMethod("GET")}} に変更する一時リダイレクト。
- {{HTTPStatus("301", "301 Moved Permanently")}} 永久リダイレクト
