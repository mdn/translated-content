---
title: 424 Failed Dependency
slug: Web/HTTP/Status/424
l10n:
  sourceCommit: 505984d77363cbce87d0b3e2e0607eb662b99a9c
---

{{HTTPSidebar}}

HTTP **`424 Failed Dependency`** 用戶端錯誤回應碼表示無法對資源執行方法，因為所請求的操作依賴於另一個操作，而該操作失敗了。

通常的網頁伺服器通常不會返回此狀態碼。但是其他協定（例如 {{Glossary("WebDAV")}}）可能會返回它。例如在 {{Glossary("WebDAV")}} 中，如果發出了 `PROPPATCH` 請求，並且一個命令失敗，則自動會使其他所有命令也以 `424 Failed Dependency` 失敗。

## 狀態

```http
424 Failed Dependency
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("403")}}（Forbidden）
