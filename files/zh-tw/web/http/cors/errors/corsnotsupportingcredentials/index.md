---
title: 原因：CORS 'Access-Control-Allow-Origin' 設定為「*」時不支援使用帳號密碼
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
---

{{HTTPSidebar}}

## 原因

```plain
Reason: Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’
```

## What went wrong?

The {{Glossary("CORS")}} request was attempted with the credentials flag set, but the server is configured using the wildcard (`"*"`) as the value of {{HTTPHeader("Access-Control-Allow-Origin")}}, which doesn't allow the use of credentials.

To correct this problem on the client side, simply ensure that the credentials flag's value is `false` when issuing your CORS request.

- If the request is being issued using {{domxref("XMLHttpRequest")}}, make sure you're not setting {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} to `true`.
- If using [Server-sent events](/zh-TW/docs/Web/API/Server-sent_events), make sure {{domxref("EventSource.withCredentials")}} is `false` (it's the default value).
- If using the [Fetch API](/zh-TW/docs/Web/API/Fetch_API), make sure {{domxref("Request.credentials")}} is `"omit"`.

If, instead, you need to adjust the server's behavior, you'll need to change the value of `Access-Control-Allow-Origin` to grant access to the origin from which the client is loaded.

## 參見

- [CORS errors](/zh-TW/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/zh-TW/docs/Web/HTTP/CORS)
