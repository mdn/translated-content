---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
---

{{HTTPSidebar}}

HTTP の **`431 Request Header Fields Too Large`** レスポンスステータスコードは、リクエストの [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)が長すぎるためにサーバーがリクエストの処理を拒否したことを示します。ヘッダーフィールドを縮小した上で、リクエストを再送信する*ことができます*。

431 はリクエストヘッダーの**全体の大きさ**が大きすぎる場合や、**単一の**ヘッダーフィールドが長すぎる場合に使用することができます。このエラーが発生した場合は、レスポンス本文でこの二つの問題のどちらであるかを示すと役立ちます。 — できれば、どのヘッダーが長すぎるのかも含めたほうがよいでしょう。これによってユーザーが、クッキーを消去するなど、問題の解決を試みることができます。

サーバーは次のような場合に、よくこのステータスを生成します。

- {{ httpheader("Referer") }} の URL が長すぎる場合
- そのリクエストで送られた [Cookie](/ja/docs/Web/HTTP/Cookies) が多すぎる場合

## ステータス

```
431 Request Header Fields Too Large
```

## 仕様書

| 仕様書                                                       | 題名                         |
| ------------------------------------------------------------ | ---------------------------- |
| {{RFC("6585", "431 Request Header Fields Too Large" , "5")}} | Additional HTTP Status Codes |

## 関連情報

- {{HTTPStatus(414, "414 URI Too Long")}}
- {{Glossary("Request header")}}
