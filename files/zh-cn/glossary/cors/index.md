---
title: CORS
slug: Glossary/CORS
---

**CORS**（Cross-Origin Resource Sharing，跨源资源共享）是一个系统，它由一系列传输的 {{Glossary("Header", "HTTP 标头")}}组成，这些 HTTP 标头决定浏览器是否阻止前端 JavaScript 代码获取跨源请求的响应。

[同源安全策略](/zh-CN/docs/Web/Security/Same-origin_policy)默认阻止“跨源”获取资源。但是 CORS 给了 web 服务器这样的权限，即服务器可以选择，允许跨源请求访问到它们的资源。

## CORS 标头

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : 指示响应的资源是否可以被给定的来源共享。
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : 指示当请求的凭证标记为 true 时，是否可以公开对该请求响应。
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : 用在对预检请求的响应中，指示实际的请求中可以使用哪些 HTTP 标头。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : 指定对预检请求的响应中，哪些 HTTP 方法允许访问请求的资源。
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : 通过列出标头的名称，指示哪些标头可以作为响应的一部分公开。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 指示预检请求的结果能被缓存多久。
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪些 HTTP 标头。
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪一种 [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods)。
- {{HTTPHeader("Origin")}}
  - : 指示获取资源的请求是从什么源发起的。

## 参见

- 在 MDN 的[跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- 维基百科上的[跨源资源共享](https://zh.wikipedia.org/wiki/跨來源資源共享)
- [Fetch 规范](https://fetch.spec.whatwg.org)
