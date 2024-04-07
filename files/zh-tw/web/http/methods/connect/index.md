---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
---

{{HTTPSidebar}}

**HTTP `CONNECT` 方法**用於與請求的資源建立雙向通訊。它可用於打開隧道。

例如，`CONNECT` 方法可用於訪問使用 {{Glossary("TLS")}}（{{Glossary("HTTPS")}}）的網站。客戶端請求 HTTP {{Glossary("Proxy server")}} 將 [TCP](/zh-TW/docs/Glossary/TCP) 連接隧道到所需目的地。然後代理服務器代表客戶端建立連接。一旦連接建立，代理服務器將繼續將 TCP 流從客戶端轉發到客戶端。

`CONNECT` 是一個跳躍式方法。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功響應是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        HTML 表單中是否允許
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

一些代理服務器可能需要授權來建立隧道。另請參見 {{HTTPHeader("Proxy-Authorization")}} 標頭。

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

- {{Glossary("Proxy server")}}
- {{HTTPHeader("Proxy-Authorization")}}
