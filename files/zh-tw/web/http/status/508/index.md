---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

超文本傳輸協定（HTTP）**`508 Loop Detected`** 回應狀態碼可能在網頁分散式編寫和版本控制（WebDAV）協定的情況下給予。

這表示伺服器在處理帶有「Depth: infinity」的請求時遇到了無限迴圈而終止操作。此狀態表示整個操作失敗。

## 狀態

```http
508 Loop Detected
```

## 規範

{{Specifications}}
