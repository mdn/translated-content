---
title: Cookie
slug: Web/HTTP/Headers/Cookie
---

{{HTTPSidebar}}

**`Cookie`** 是 HTTP 請求標頭，它的值包含由伺服器設定的 [HTTP cookies](/zh-TW/docs/Web/HTTP/Cookies) （透過 {{HTTPHeader("Set-Cookie")}} 標頭設定，或者透過 Javascript 的 {{domxref("Document.cookie")}} 設定）。

`Cookie` 標頭不是必要的，比如瀏覽器可能會因為隱私設定而直接省略 Cookie 不傳。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## Syntax

```http
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

- \<cookie-list>
  - : 一連串名值對（name-value pair），格式為： `<cookie-name>=<cookie-value>`。每對之間由一個分號與一個空白分隔（`'; '`）。

## 範例

```plain
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
