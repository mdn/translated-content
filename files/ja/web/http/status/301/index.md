---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) の **`301 Moved Permanently`** リダイレクトステータスコードは、リクエストされたリソースが {{HTTPHeader("Location")}} ヘッダーで示された URL へ完全に移動したことを示します。ブラウザーはこのページにリダイレクトし、検索エンジンはリソースへのリンクを更新します (「SEO 用語」では、「リンクジュース」が新しい URL に送られたと言われます)。

リダイレクトが行われるとき、仕様書ではメソッド (と本文) を変更しないよう要求していますが、すべてのユーザーエージェントが従っている訳ではありません。 - まだこの種のバグが発生するソフトウェアが見つかるでしょう。従って、 `301` のコードは {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} メソッドのみに使用し、このステータスでは明確にメソッドの変更が禁止されているので、 {{HTTPMethod("POST")}} メソッドでは代わりに {{HTTPStatus("308", "308 Permanent Redirect")}} を使用することが推奨されています。

## ステータス

```
301 Moved Permanently
```

## 例

### クライアントリクエスト

```
GET /index.php HTTP/1.1
Host: www.example.org
```

### サーバーレスポンス

```
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## 仕様書

| 仕様書                                             | 題名                                                          |
| -------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "301 Moved Permanently" , "6.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.status.301")}}

## 関連情報

- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("302", "302 Found")}}: 一時リダイレクト
