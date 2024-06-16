---
title: Accept-CH-Lifetime
slug: Web/HTTP/Headers/Accept-CH-Lifetime
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{securecontext_header}}{{Deprecated_header}}{{Non-standard_header}}

> **警告：** 在[草案第 8 版](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-08)中，此標頭已经从規範中移除。

**`Accept-CH-Lifetime`** 標頭由伺服器設置，用於指定使用 {{HTTPHeader("Accept-CH")}} 所指定的[用戶端提示標頭](/zh-TW/docs/Web/HTTP/Client_hints)的持久性，用戶端應該在後續請求中包括這些標頭。

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

> **備註：** 用戶端提示僅在安全來源（透過 TLS）上可訪問。應該對所有安全請求持久化 {{HTTPHeader("Accept-CH")}} 和 {{HTTPHeader("Accept-CH-Lifetime")}} 標頭，以確保可靠地發送用戶端提示。

## 語法

```http
Accept-CH-Lifetime: <age>
```

## 範例

```http
Accept-CH: Viewport-Width
Accept-CH-Lifetime: 86400
```

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Vary")}}
