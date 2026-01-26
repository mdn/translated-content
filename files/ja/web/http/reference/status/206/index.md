---
title: 206 Partial Content
slug: Web/HTTP/Reference/Status/206
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`206 Partial Content`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、[範囲リクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)へのレスポンスとして送信されます。
レスポンス本体には、リクエストの {{HTTPHeader("Range")}} ヘッダーで指定されたリクエストされたデータ範囲が含まれます。

レスポンスの形式は、リクエストされた範囲の数値によって異なります。
単一の範囲がリクエストされた場合、レスポンス全体の {{HTTPHeader("Content-Type")}} が文書のタイプに設定され、 {{HTTPHeader("Content-Range")}} が提供されます。
複数の範囲がリクエストされた場合は、 {{HTTPHeader("Content-Type")}} が `multipart/byteranges` に設定され、それぞれの断片が 1 つの範囲を表し、{{HTTPHeader("Content-Range")}} および {{HTTPHeader("Content-Type")}} がそれを説明します。

## ステータス

```http
206 Partial Content
```

## 例

### 単一のリクエスト範囲で `206` レスポンスを受信

次の例は、画像ファイルの `21010-` （21,010 バイト目からファイルの末尾まで）という単一の範囲が要求された場合の `206` レスポンスのサンプルです。レスポンスは、 {{HTTPHeader("Content-Type")}} が `image/gif` であり、 {{HTTPHeader("Content-Range")}} が提供されています。

```http
GET /z4d4kWk.gif HTTP/1.1
Host: images.example.com
Range: bytes=21010-
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif
ETag: "abc123"
Accept-Ranges: bytes

# 26012 bytes of partial image data…
```

### 複数のリクエスト範囲で `206` レスポンスを受信

次のサンプルは、 PDF ファイルの 2 つの範囲がリクエストされた場合のレスポンス `206` です。
レスポンスには、 `multipart/byteranges` の {{HTTPHeader("Content-Type")}} と、それとは別にそれぞれの範囲の {{HTTPHeader("Content-Type")}} (`application/pdf`) および {{HTTPHeader("Content-Range")}} が含まれています。

```http
GET /price-list.pdf HTTP/1.1
Host: example.com
Range: bytes=234-639,4590-7999
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator
ETag: "abc123"
Accept-Ranges: bytes

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

# content of first range (406 bytes)
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

# content of second range (3410 bytes)
--String_separator--
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- [HTTP リクエストのメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
