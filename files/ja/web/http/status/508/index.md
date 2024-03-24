---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) の **`508 Loop Detected`** レスポンスステータスコードは、 Web Distributed Authoring and Versioning (WebDAV) プロトコルの文脈で発生する可能性があります。

これは "Depth: infinity" がついたリクエストを処理する際に無限ループに陥ったために、サーバーが操作を終了させたことを示します。このステータスは操作全体が失敗したことを示します。

## ステータス

```
508 Loop Detected
```

## 仕様書

| 仕様書                                       | 題名                                     |
| -------------------------------------------- | ---------------------------------------- |
| {{RFC("5842", "508 Loop Detected" , "7.2")}} | Web Distributed Authoring and Versioning |
