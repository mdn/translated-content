---
title: 206 Partial Content
slug: Web/HTTP/Status/206
---

{{HTTPSidebar}}

HTTP **`206 Partial Content`** は成功ステータスレスポンスコードで、そのリクエストが成功したこと、そしてリクエストの {{HTTPHeader("Range")}} ヘッダーに記述された通り、要求された範囲のデータが本文に含まれていることを示します。

もし範囲が 1 つしかないのであれば、レスポンス全体の {{HTTPHeader("Content-Type")}} が文書のタイプに設定され、 {{HTTPHeader("Content-Range")}} が提供されます。

複数の範囲が返される場合は、 {{HTTPHeader("Content-Type")}} が `multipart/byteranges` に設定され、それぞれの断片が 1 つの範囲を表し、{{HTTPHeader("Content-Range")}} および {{HTTPHeader("Content-Type")}} がそれを説明します。

## ステータス

```
206 Partial Content
```

## 例

1 つの範囲を含むレスポンスの例:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

... 26012 bytes of partial image data ...
```

複数の範囲を含むレスポンスの例:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

...the first range...
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

...the second range
--String_separator--
```

## 仕様書

| 仕様書                                         | 題名                                                   |
| ---------------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "206 Partial Content" , "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## ブラウザーの互換性

{{Compat("http.status.206")}}

## 関連情報

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
