---
title: 201 Created
slug: Web/HTTP/Status/201
---

{{HTTPSidebar}}

HTTP の **`201 Created`** 成功ステータスレスポンスコードは、リクエストが成功してリソースの作成が完了したことを表します。レスポンスが返される前に、新たなリソースが作成され、レスポンスメッセージの本文にて新しいリソースが返されます。その位置はリクエスト URL、または {{HTTPHeader("Location")}} ヘッダーの内容となります。

このステータスコードの一般的な使用例は、 {{HTTPMethod("POST")}} リクエストの結果です。

## 状態

```
201 Created
```

## 仕様書

| 仕様書                                   | 題名                                                          |
| ---------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "201 Created" , "6.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.status.201")}}

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)
