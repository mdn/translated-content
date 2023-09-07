---
title: 303 See Other
slug: Web/HTTP/Status/303
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`303 See Other`** リダイレクトステータスレスポンスコードは、リダイレクトが新しくアップロードされたリソースではなく、 (確認ページやアップロード進捗ページのような) 別なページにリンクすることを示します。このレスポンスコードはふつう、 {{HTTPMethod("PUT")}} または {{HTTPMethod("POST")}} の結果として送り返されます。このリダイレクトページを表示するためには、常に {{HTTPMethod("GET")}} を使用してください。

## ステータス

```
303 See Other
```

## 仕様書

| 仕様書                                     | 題名                                                          |
| ------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "303 See Other" , "6.4.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.status.303")}}

## 関連情報

- {{HTTPStatus("302", "302 Found")}} 一時的なリダイレクト
- {{HTTPStatus("307", "307 Temporary Redirect")}} 使用されたメソッドが変更されない場面でこのステータスコードと等価。
