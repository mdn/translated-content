---
title: Accept-CH 標頭
slug: Web/HTTP/Reference/Headers/Accept-CH
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{securecontext_header}}

HTTP **`Accept-CH`** {{Glossary("response header", "回應標頭")}}可以由伺服器設定，以指定用戶在後續請求中應包含哪些[用戶端提示](/zh-TW/docs/Web/HTTP/Guides/Client_hints)標頭。為了確保用戶端提示能夠可靠地傳送，應該對所有安全請求持久化 `Accept-CH` 標頭。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Response header", "回應標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止的請求標頭")}}</th>
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

## 語法

```http
Accept-CH: <client-hints-headers>

// 用戶端提示標頭，以逗號分隔的列表
Accept-CH: <ch-header-one>, <ch-header-two>
```

## 範例

### 用戶端提示回應標頭

以下回應標頭表示伺服器在後續請求中接受 `Viewport-Width` 和 `Width` [裝置用戶端提示](/zh-TW/docs/Web/HTTP/Guides/Client_hints#裝置用戶端提示)。{{HTTPHeader("Vary")}} 標頭表示根據接受的用戶端提示來[變更回應](/zh-TW/docs/Web/HTTP/Guides/Client_hints#快取與用戶端提示)的值。

```http
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Vary")}}
