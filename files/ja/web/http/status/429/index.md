---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
---

{{HTTPSidebar}}

HTTP **`429 Too Many Requests`** レスポンスステータスコードは、ユーザーが指定された時間内に多くのリクエストを送信した ("rate limiting") ことを示します。

新しいリクエストを行う前にどのくらい待つかを示す {{HTTPHeader("Retry-After")}} ヘッダをこのレスポンスに含めることができます。

## ステータス

```
429 Too Many Requests
```

## 例

```
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600
```

## 仕様書

| 仕様書                                         | 題名                         |
| ---------------------------------------------- | ---------------------------- |
| {{RFC("6585", "429 Too Many Requests" , "4")}} | Additional HTTP Status Codes |

## 関連情報

- {{HTTPHeader("Retry-After")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- Python solution: [How to avoid HTTP error 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
