---
title: 226 IM Used
slug: Web/HTTP/Status/226
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

> [!NOTE]
> 瀏覽器不支援 HTTP 中的*增量編碼*。此狀態碼是由特定用戶端使用的自定義伺服器返回的。

在增量編碼的上下文中，HTTP **`226 IM Used`** 狀態碼由伺服器設置，表示它正在返回一個相對於其收到的 {{HTTPMethod("GET")}} 請求的*增量*。

使用增量編碼，伺服器以相對於給定基本文件（而不是當前文件）的差異（稱為*增量*）回應 {{HTTPMethod("GET")}} 請求。用戶端使用 `A-IM:` HTTP 標頭指示要使用的差異演算法，並使用 `If-None-Match:` 標頭提示伺服器關於其收到的最後版本。伺服器生成增量，將其以帶有 `226` 狀態碼的 HTTP 回應返回，並包含 `IM:`（使用的演算法名稱）和 `Delta-Base:`（與增量關聯的基本文件的 {{HTTPHeader("ETag")}} 匹配）HTTP 標頭。

IM 代表*實例操作*，這是用於描述生成*增量*的演算法術語。

## 狀態

```http
226 IM Used
```

## 規範

{{Specifications}}
