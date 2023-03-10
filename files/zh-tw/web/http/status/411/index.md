---
title: 411 Length Required
slug: Web/HTTP/Status/411
---

{{HTTPSidebar}}

超文本傳輸協定 (HTTP) **`411 Length Required`** 用戶端錯誤表示伺服器拒絕接收沒有定義 {{HTTPHeader("Content-Length")}} 頭的請求。

> **備註：** by specification, when sending data in a series of chunks, the `Content-Length` header is omitted and at the beginning of each chunk you need to add the length of the current chunk in hexadecimal format. See {{HTTPHeader("Transfer-Encoding")}} for more details.

## 狀態

```plain
411 Length Required
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
