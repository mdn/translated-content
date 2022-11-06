---
title: 故：在 CORS 头 Access-Control-Allow-Credentials 中预期为 true
slug: Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials
original_slug: Web/HTTP/CORS/Errors/CORS 错误允许凭证
---

## 理由

```plain
故：在 CORS 头 Access-Control-Allow-Credentials 中预期设为 true
```

## 错在了哪儿？

CORS 请求要求服务器允许使用凭据，但是服务器的 HTTPHeader：Access-Control-Allow-Credentials 标头的值并没有设置为 true。

想要在客户端解决此问题，请修改代码以不请求使用凭据：

- 如果要使用 {{domxref("XMLHttpRequest")}} 发出请求，请确保没有将 {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} 设置为 true。
- 如果使用 [Server-sent events](/zh-CN/docs/Web/API/Server-sent_events)，请确保{{domxref("EventSource.withCredentials")}}为 false（default）。
- 如果使用 [Fetch API](/zh-CN/docs/Web/API/Fetch_API)，请确保{{domxref("Request.credentials")}}为“omit”。

想要通过更改服务器的配置来消除此错误，请调整服务器的配置以将 Access-Control-Allow-Credentials 标头的值设置为 true。

## 更多

- [CORS errors](/zh-CN/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/zh-CN/docs/Web/HTTP/CORS)
