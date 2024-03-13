---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
---

{{HTTPSidebar}}

HTTP の **`300 Multiple Choices`** リダイレクト状態コードは、リクエストに対して複数のレスポンスがあることを示します。ユーザーエージェントやユーザーは、その内から一つを選択します。レスポンスを一つ選択する方法は標準化されていないため、このレスポンスコードはほとんど使われていません。

サーバーが推奨する選択肢がある場合は、 {{HTTPHeader("Location")}} ヘッダーを生成してください。

## 状態

```
300 Multiple Choices
```

## 仕様書

| 仕様書                                            | 題名                                                          |
| ------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "300 Multiple Choices" , "6.4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 関連情報

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found` (一時リダイレクト)
- {{HTTPStatus("308")}} `Permanent Redirect`
