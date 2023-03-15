---
title: >-
  Reason: Credential is not supported if the CORS header
  ‘Access-Control-Allow-Origin’ is ‘*’
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
---

{{HTTPSidebar}}

## 原因

```plain
在 CORS 中，Credential 不接受 http 响应首部中的‘Access-Control-Allow-Origin’设置为通配符‘*’
```

## 出了什么问题？

{{Glossary("CORS")}} 请求发出时，已经设定了 credentials，但服务端配置了 http 响应首部 {{HTTPHeader("Access-Control-Allow-Origin")}} 的值为通配符 (`"*"`) ，而这与使用 credentials 相悖。

要在客户端改正这个问题，只需要确保发出 CORS 请求时将 credential 设置为 false。

- 如果使用 {{domxref("XMLHttpRequest")}} 发出请求，确保未将 {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} 设置为 `true`。
- 如果使用 [Server-sent events](/zh-CN/docs/Web/API/Server-sent_events), 确保 {{domxref("EventSource.withCredentials")}} 的值为 `false` (false 为默认值)。
- 如果使用 [Fetch API](/zh-CN/docs/Web/API/Fetch_API)，确保 {{domxref("Request.credentials")}} 的值为 `"omit"`.

如果还不成功，则需要修改服务端，可能需要修改 `Access-Control-Allow-Origin` 的值，来为客户端所能够加载资源的源予以授权。

## 另请参见

- [CORS errors](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS introduction](/zh-CN/docs/Web/HTTP/CORS)
