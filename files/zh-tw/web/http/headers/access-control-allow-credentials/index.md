---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

**`Access-Control-Allow-Credentials`** 回應標頭告訴瀏覽器伺服器是否允許跨來源 HTTP 請求包含憑證。

憑證包括 Cookie、{{glossary("TLS")}} 用戶端憑證或包含用戶名和密碼的驗證標頭。默認情況下，這些憑證不會在跨來源請求中發送，這樣做可能會使網站容易受到 {{glossary("CSRF")}} 攻擊。

用戶端可以通過以下兩種方式之一請求在跨站點請求中包含憑證：

- 使用 {{domxref("fetch()")}}，在 {{domxref("Request.Request()", "Request()")}} 構造函數中設置 [`credentials`](/zh-TW/docs/Web/API/Request/Request#credentials) 選項為 `"include"`。
- 使用 {{domxref("XMLHttpRequest")}}，將 {{domxref("XMLHttpRequest.withCredentials")}} 屬性設置為 `true`。

如果用戶端要求包含憑證：

- 如果請求是{{glossary("Preflight_request", "預檢請求")}}，則預檢請求不包括憑證。如果伺服器對預檢請求的回應設置了 `Access-Control-Allow-Credentials` 標頭為 `true`，則實際請求將包括憑證；否則，瀏覽器會報告網路錯誤。

- 如果請求不是預檢請求，則請求將包括憑證，如果伺服器的回應未設置 `Access-Control-Allow-Credentials` 標頭為 `true`，瀏覽器會報告網路錯誤。

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
Access-Control-Allow-Credentials: true
```

## 指令

- `true`
  - : 此標頭的唯一有效值是 `true`（區分大小寫）。如果不需要憑證，請完全省略此標頭（而不是將其值設置為 `false`）。

## 範例

允許憑證：

```http
Access-Control-Allow-Credentials: true
```

使用 {{domxref("fetch()")}} 並包含憑證：

```js
fetch(url, {
  credentials: "include",
});
```

使用 {{domxref("XMLHttpRequest")}} 並包含憑證：

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
