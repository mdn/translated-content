---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
---

{{HTTPSidebar}}

HTTP **`203 Non-Authoritative Information`** 狀態碼表明請求成功，但是與原始伺服器的 {{HTTPStatus("200")}} (`OK`) 回應相比，隨附的酬載已被具轉換功能的 {{Glossary("Proxy server", "代理伺服器")}} 所修改。

`203` 回應相似於 {{HTTPHeader("Warning")}} 標頭的 `214 Transformation Applied`，但後者的額外的優點在於可以套用到任何狀態碼的回應中。

## 狀態

```plain
203 Non-Authoritative Information
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
