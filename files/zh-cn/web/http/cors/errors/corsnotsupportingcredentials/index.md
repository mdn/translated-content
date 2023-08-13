---
title: 原因：Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
---

{{HTTPSidebar}}

## 原因

```plain
原因：Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```

## 出了什么问题？

{{Glossary("CORS")}} 请求是在设置了凭证标志的情况下尝试的，但服务端使用通配符（`"*"`）配置 {{HTTPHeader("Access-Control-Allow-Origin")}} 的值，这样是不允许使用凭证的。

要在客户端改正这个问题，只需要确保发出 CORS 请求时将凭证标志设置为 `false`。

- 如果使用 {{domxref("XMLHttpRequest")}} 发出请求，确保未将 {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} 设置为 `true`。
- 如果使用[服务器发送事件](/zh-CN/docs/Web/API/Server-sent_events)，确保 {{domxref("EventSource.withCredentials")}} 的值为 `false`（false 为默认值）。
- 如果使用 [Fetch API](/zh-CN/docs/Web/API/Fetch_API)，确保 {{domxref("Request.credentials")}} 的值为 `"omit"`。

如果还不成功，则需要修改服务端的行为，可能需要修改 `Access-Control-Allow-Origin` 的值，来为客户端所能够加载资源的源予以授权。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
