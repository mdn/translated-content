---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`405`** `Method Not Allowed` レスポンスステータスコードは、リクエストメソッドをサーバー側で認識しているが、対象のリソースでは対応していないことを示します。

サーバーは 405 レスポンスで、対象のリソースで現在対応しているメソッドの一覧を含む **`Allow`** ヘッダー欄を生成しなければなりません。

## ステータス

```
405 Method Not Allowed
```

## 仕様書

| 仕様書                                              | 題名                                                          |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "405 Method Not Allowed" , "6.5.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 関連情報

- {{HTTPHeader("Allow")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [How to Fix 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Troubleshooting HTTP 405](https://docs.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
