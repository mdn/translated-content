---
title: 424 Failed Dependency
slug: Web/HTTP/Reference/Status/424
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`424 Failed Dependency`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示無法對資源執行方法，因為所請求的操作依賴於另一個操作，而該操作失敗了。

通常的 web 伺服器通常不會返回此狀態碼。但是一些協定（例如 {{Glossary("WebDAV")}}）可能會返回它。例如在 {{Glossary("WebDAV")}} 中，如果發出了 `PROPPATCH` 請求，並且一個命令失敗，則自動會使其他所有命令也以 `424 Failed Dependency` 失敗。

## 狀態

```http
424 Failed Dependency
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("403")}}（Forbidden）
- {{HTTPStatus("501", "501 Not Implemented")}}、{{HTTPStatus("510", "510 Not Extended")}}
