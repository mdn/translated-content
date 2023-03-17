---
title: 原因：expected 'true' in CORS header 'Access-Control-Allow-Credentials'
slug: Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials
---

{{HTTPSidebar}}

## 原因

```plain
原因：expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```

## 哪里出错了？

{{Glossary("CORS")}} 请求要求服务器允许使用凭据，但是服务器的 {{HTTPHeader("Access-Control-Allow-Credentials")}} 标头的值并没有设置为 `true`。

想要在客户端解决此问题，请修改代码以不请求使用凭据：

- 如果要使用 {{domxref("XMLHttpRequest")}} 发出请求，请确保没有将 {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} 设置为 `true`。
- 如果使用[服务端发送事件](/zh-CN/docs/Web/API/Server-sent_events)，请确保 {{domxref("EventSource.withCredentials")}} 为 `false`（这是默认值）。
- 如果使用 [Fetch API](/zh-CN/docs/Web/API/Fetch_API)，请确保 {{domxref("Request.credentials")}} 为 `"omit"`。

想要通过更改服务器的配置来消除此错误，请调整服务器的配置以将 `Access-Control-Allow-Credentials` 标头的值设置为 `true`。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 简介](/zh-CN/docs/Web/HTTP/CORS)
