---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
l10n:
  sourceCommit: 3350169912a6150f2af78d6ecf5e22fd7cfc4335
---

{{HTTPSidebar}}{{securecontext_header}}

**`Accept-CH`** 標頭可以由伺服器設置，以指定用戶端應該在後續請求中包含哪些[用戶端提示](/zh-TW/docs/Web/HTTP/Client_hints)標頭。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Response header", "回應標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS 安全清單回應標頭")}}
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

> **備註：** 用戶端提示僅在安全來源（通過 TLS）上可訪問。應該對所有安全請求持久化 `Accept-CH`（和 `Accept-CH-Lifetime`）標頭，以確保可靠地發送用戶端提示。

## 語法

```http
Accept-CH: <comma separated list of client hint headers>
```

## 範例

```http
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

> **備註：** 請根據接受的用戶端提示來[改變回應](/zh-TW/docs/Web/HTTP/Client_hints#緩存和用戶端提示)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Vary")}}
