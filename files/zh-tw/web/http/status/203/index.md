---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`203 Non-Authoritative Information`** 成功回應碼表示請求成功，但內含的有效負載已被轉換{{Glossary("Proxy server", "代理伺服器")}}修改，與原始伺服器的 {{HTTPStatus("200")}}（`OK`）回應不同。

`203` 回應與 {{HTTPHeader("Warning")}} 標頭代碼 [`214`](/zh-TW/docs/Web/HTTP/Headers/Warning#warning_codes)（即 `Transformation Applied`）相似，其額外優勢是適用於具有任何狀態碼的回應。

## 狀態

```http
203 Non-Authoritative Information
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server", "代理伺服器")}}
- {{HTTPHeader("Warning")}}
