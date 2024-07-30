---
title: XMLHttpRequest.withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
---

{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.withCredentials`** 屬性是一個 {{jsxref("Boolean")}} 型別，它指出無論是否使用 `Access-Control` 標頭在跨站的要求上，都應該使用像 Cookies、Authorization 標頭或 TLS 用戶端憑證來進行驗證。在相同來源的要求設定 `withCredentials` 沒有任何效果。

In addition, this flag is also used to indicate when cookies are to be ignored in the response. The default is `false`. `XMLHttpRequest` from a different domain cannot set cookie values for their own domain unless `withCredentials` is set to `true` before making the request. The third-party cookies obtained by setting `withCredentials` to true will still honor same-origin policy and hence can not be accessed by the requesting script through [document.cookie](/zh-TW/docs/Web/API/Document/cookie) or from response headers.

> [!NOTE]
> 永遠不會影響到同源請求。

> **備註：** `XMLHttpRequest` responses from a different domain _cannot_ set cookie values for their own domain unless `withCredentials` is set to `true` before making the request, regardless of `Access-Control-` header values.

## 範例

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
