---
title: Access-Control-Allow-Credentials 標頭
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP **`Access-Control-Allow-Credentials`** {{Glossary("response header", "回應標頭")}}告訴瀏覽器伺服器是否允許在跨來源 HTTP 請求中包含憑證。

憑證包括 Cookie、{{glossary("TLS", "傳輸層安全性協定（TLS）")}}用戶端憑證，或包含使用者名稱和密碼的驗證標頭。預設情況下，這些憑證不會在跨來源請求中傳送，這麼做可能會使網站容易受到{{Glossary("CSRF", "跨站請求偽造（CSRF）")}}攻擊。

用戶端可以透過以下幾種方式要求在跨站點請求中包含憑證：

- 使用 {{domxref("Window/fetch", "fetch()")}}，將 [`credentials`](/zh-TW/docs/Web/API/RequestInit#credentials) 選項設定為 `"include"`。
- 使用 {{domxref("XMLHttpRequest")}}，將 {{domxref("XMLHttpRequest.withCredentials")}} 屬性設定為 `true`。
- 使用 {{domxref("EventSource()")}}，將 {{domxref("EventSource.withCredentials")}} 屬性設定為 `true`。

當包含憑證時：

- 對於{{glossary("Preflight_request", "預檢")}}請求：預檢請求不包含憑證。如果伺服器對預檢請求的回應將 `Access-Control-Allow-Credentials` 標頭設定為 `true`，則實際請求將包含憑證；否則，瀏覽器會回報網路錯誤。
- 對於非預檢請求：請求將包含憑證，且如果伺服器的回應未將 `Access-Control-Allow-Credentials` 標頭設定為 `true`，瀏覽器會回報網路錯誤。

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
  </tbody>
</table>

## 語法

```http
Access-Control-Allow-Credentials: true
```

## 指令

- `true`
  - : 伺服器允許在跨來源 HTTP 請求中包含憑證。這是此標頭唯一有效的值，且區分大小寫。如果你不需要憑證，請完全省略此標頭，而不是將其值設定為 `false`。

## 範例

允許憑證：

```http
Access-Control-Allow-Credentials: true
```

使用 {{domxref("Window/fetch", "fetch()")}} 並包含憑證：

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
