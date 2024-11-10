---
title: 411 Length Required
slug: Web/HTTP/Status/411
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`411 Length Required`** 用戶端錯誤回應碼表示伺服器拒絕接受沒有定義 {{HTTPHeader("Content-Length")}} 標頭的請求。

> [!NOTE]
> 根據規範，在以一系列塊發送數據時，會省略 `Content-Length` 標頭，而在每個塊的開頭需要以十六進制格式添加當前塊的長度。詳情請參見 {{HTTPHeader("Transfer-Encoding")}}。

## 狀態

```http
411 Length Required
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
