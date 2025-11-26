---
title: 102 Processing
slug: Web/HTTP/Reference/Status/102
l10n:
  sourceCommit: 67a409e7944352612272e095a26bf325ecfae822
---

{{deprecated_header}}

HTTP **`102 Processing`** [資訊回應](/zh-TW/docs/Web/HTTP/Reference/Status#資訊回應)狀態碼表示伺服器已收到完整請求，且正在處理中。只有當伺服器預期請求需要花費較長時間時，才會傳送此狀態碼。

> [!NOTE]
> 一般的 Web 伺服器不會回傳此回應。此狀態碼最初在基於 Web 的分散式編寫和版本控制（{{Glossary("WebDAV")}}）{{RFC("2518")}} 中被引入，但在 {{RFC("4918")}} 中已從 WebDAV 中移除。

## 狀態

```http
102 Processing
```

## 規範

{{Specifications}}

## 瀏覽器相容性

此功能已被棄用，瀏覽器將忽略此回應狀態碼。

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100")}}
- [rfc4918「102 Processing」移除說明](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
