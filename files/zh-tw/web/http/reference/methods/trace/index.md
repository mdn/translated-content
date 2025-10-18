---
title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
l10n:
  sourceCommit: f1177f3b139cce429083f12bb4b3dca8e9140f58
---

**HTTP `TRACE` 方法**在到目標資源的路徑上執行消息迴圈測試，提供了一個有用的調試機制。

請求的最終接收者應將接收到的消息反映回用戶端，排除任何可能包含敏感數據的字段，作為 {{HTTPStatus("200")}}（`OK`）回應的消息主體，並且具有 `message/http` 的 {{HTTPHeader("Content-Type")}}。最終接收者是原始伺服器或在請求中收到 {{HTTPHeader("Max-Forwards")}} 值為 0 的第一個伺服器。

請注意，用戶端不應在請求中發送內容，或生成可能包含敏感數據的字段，例如存儲的用戶憑據或 cookies。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功回應是否有主體</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "冪等")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "可緩存")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row"><a href="/zh-TW/docs/Learn_web_development/Extensions/Forms">HTML 表單</a>中是否允許</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
TRACE /index.html
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
