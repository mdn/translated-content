---
title: 列入 CORS 白名单的响应标头
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: fea9eb7420e6d70772144854242c30e421898415
---

**列入 CORS 白名单的响应标头**（CORS-safelisted response header，也被称作“简单响应标头”）是 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS) 响应中可以*安全地*暴露给客户端脚本的 [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)。只有列入白名单的响应标头才会对网页可用。

默认情况下，白名单包括以下响应标头：

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

可以使用 {{HTTPHeader("Access-Control-Expose-Headers")}} 标头将其他标头添加到白名单中。

> [!NOTE]
> {{HTTPHeader("Content-Length")}} 不属于最初列入白名单的响应标头：\[[参考](https://github.com/whatwg/fetch/pull/626)]

## 示例

### 扩展白名单

你可以使用 {{HTTPHeader("Access-Control-Expose-Headers")}} 标头扩展列入 CORS 白名单的响应标头的清单：

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## 参见

- [HTTP](/zh-CN/docs/Web/HTTP)
- [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- [术语表](/zh-CN/docs/Glossary)
  - {{Glossary("CORS")}}
  - {{Glossary("CORS-safelisted_request_header", "列入 CORS 白名单的请求标头")}}
  - {{Glossary("Forbidden header name", "禁止修改的标头")}}
  - {{Glossary("Request header", "请求标头")}}
