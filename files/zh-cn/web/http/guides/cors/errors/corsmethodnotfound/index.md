---
title: 原因：Did not find method in CORS header 'Access-Control-Allow-Methods'
slug: Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound
---

## 原因

```plain
原因：Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## 哪里错了？

{{Glossary("CORS")}} 请求使用的 HTTP 方法不包含在响应的 {{HTTPHeader("Access-Control-Allow-Methods")}} 标头指定的方法列表中。此标头指定了一个使用逗号分隔的 HTTP 方法列表，当使用 CORS 访问请求中指定的 URL 时，可以使用这些方法；如果请求使用任何其他方法，则会发生此错误。

例如，如果响应中包含：

```plain
Access-Control-Allow-Methods: GET,HEAD,POST
```

尝试使用 {{HTTPMethod("PUT")}} 请求会因为这个错误失败。

请确保当访问服务时你的代码只使用了允许的 HTTP 方法。

> [!NOTE]
> 如果服务器的 `Access-Control-Allow-methods` 标头中包含任何未识别的或未定义的方法名称，会出现不同的错误：原因：[`Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'`](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod)。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
