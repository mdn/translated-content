---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{HTTPSidebar}}

**HTTP `CONNECT` 方法**用於與請求的資源建立雙向通訊。它可用於打開隧道。

例如，`CONNECT` 方法可用於訪問使用 {{Glossary("TLS")}}（{{Glossary("HTTPS")}}）的網站。用戶端請求 HTTP {{Glossary("Proxy server", "代理伺服器")}}將 [TCP](/zh-TW/docs/Glossary/TCP) 連接以隧道方式傳輸到所需目的地。然後代理伺服器代表用戶端建立連接。一旦連接建立，代理伺服器將繼續將 TCP 流從用戶端轉發到用戶端。

`CONNECT` 是一個跳躍式方法。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功回應是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "冪等")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "可緩存")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Learn_web_development/Extensions/Forms">HTML 表單</a>中是否允許
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
CONNECT www.example.com:443 HTTP/1.1
```

## 範例

一些代理伺服器可能需要授權來建立隧道。另請參見 {{HTTPHeader("Proxy-Authorization")}} 標頭。

```http
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{Glossary("Proxy server", "代理伺服器")}}
- {{HTTPHeader("Proxy-Authorization")}}
