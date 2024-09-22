---
title: 205 Reset Content
slug: Web/HTTP/Status/205
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`205 Reset Content`** 成功回應碼告訴用戶端重置文件視圖，例如清除表單的內容、重置畫布狀態或刷新使用者介面。

## 狀態

```http
205 Reset Content
```

## 規範

{{Specifications}}

## 相容性注意事項

- 如果此回應在持久連線中錯誤地包含了主體，不同的瀏覽器行為會有所不同。詳情請參見 [204 No Content](/zh-TW/docs/Web/HTTP/Status/204)。

## 參見

- {{HTTPStatus(204)}} No Content
