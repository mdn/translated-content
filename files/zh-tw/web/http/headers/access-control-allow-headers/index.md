---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 38fb31b12de1019a538e868a90dd4dd4858e4871
---

{{HTTPSidebar}}

**`Access-Control-Allow-Headers`** 回應標頭用於回應包含 {{HTTPHeader("Access-Control-Request-Headers")}} 的{{glossary("preflight request", "預檢請求")}}，以指示實際請求中可以使用哪些 HTTP 標頭。

如果請求包含 {{HTTPHeader("Access-Control-Request-Headers")}} 標頭，此標頭是必需的。

> **備註：** {{glossary("CORS-safelisted_request_header", "列入 CORS 白名單的請求標頭")}}總是允許的，通常不會列在 `Access-Control-Allow-Headers` 中（除非有必要繞過安全名單的[附加限制](/zh-TW/docs/Glossary/CORS-safelisted_request_header#附加限制)）。

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
  </tbody>
</table>

## 語法

```http
Access-Control-Allow-Headers: [<header-name>[, <header-name>]*]
Access-Control-Allow-Headers: *
```

## 指令

- `<header-name>`
  - : 支援的請求標頭名稱。標頭可以列出任意數量的標頭名稱，以逗號分隔。
- `*`（萬用字元）
  - : 值 `*` 僅在無憑證的請求（無 [HTTP cookie](/zh-TW/docs/Web/HTTP/Cookies) 或 HTTP 認證資訊的請求）中作為特別的萬用字元值。在有憑證的請求中，它被視為字面標頭名稱 `*`，沒有特別語意。請注意，{{HTTPHeader("Authorization")}} 標頭不能使用萬用字元，必須明確列出。

## 範例

### 自訂標頭

以下是 `Access-Control-Allow-Headers` 標頭的範例。它表示伺服器支持 CORS 請求中名為 `X-Custom-Header` 的自訂標頭（除了{{glossary("CORS-safelisted_request_header", "列入 CORS 白名單的請求標頭")}}之外）。

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### 多個標頭

此範例顯示 `Access-Control-Allow-Headers` 支援多個標頭時的寫法。

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### 繞過附加限制

儘管 {{glossary("CORS-safelisted_request_header", "CORS 安全名單請求標頭")}}總是允許的，且通常不需要列在 `Access-Control-Allow-Headers` 中，但將它們列出仍可以繞過適用的[附加限制](/zh-TW/docs/Glossary/CORS-safelisted_request_header#附加限制)。

```http
Access-Control-Allow-Headers: Accept
```

### 預檢請求範例

以下是包含 `Access-Control-Allow-Headers` 的{{glossary("preflight request", "預檢請求")}}範例。

#### 請求

首先是請求。預檢請求是包含一些預檢請求標頭的 {{HTTPMethod("OPTIONS")}} 請求：{{HTTPHeader("Access-Control-Request-Method")}}、{{HTTPHeader("Access-Control-Request-Headers")}} 和 {{HTTPHeader("Origin")}}。

以下的預檢請求告訴伺服器我們希望發送包含 {{HTTPHeader("Access-Control-Request-Headers")}}（{{HTTPHeader("Content-Type")}} 和 `X-Requested-With`）標頭的 CORS `GET` 請求。

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://foo.bar.org
```

#### 回應

如果預檢請求所指示的 CORS 請求被授權，伺服器將回應一個消息，指示允許的來源、方法和標頭。以下回應中，{{HTTPHeader("Access-Control-Allow-Headers")}} 包含了所請求的標頭。

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: Content-Type, x-requested-with
Access-Control-Max-Age: 86400
```

如果請求的方法不被支持，伺服器將回應錯誤。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
