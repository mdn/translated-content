---
title: CORS
slug: Glossary/CORS
---

**CORS** （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的{{Glossary("Header", "HTTP 头")}}组成，这些 HTTP 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应。

[同源安全策略](/zh-CN/docs/Web/Security/Same-origin_policy) 默认阻止“跨域”获取资源。但是 CORS 给了 web 服务器这样的权限，即服务器可以选择，允许跨域请求访问到它们的资源。

## 了解更多

### 总体了解

- MDN 上的 [Cross-Origin Resource Sharing (CORS)](/zh-CN/docs/Web/HTTP/CORS)
- 维基百科上的 [Cross-origin resource sharing](https://zh.wikipedia.org/wiki/Cross-origin_resource_sharing)

### CORS 头

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : 指示请求的资源能共享给哪些域。
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : 指示当请求的凭证标记为 true 时，是否响应该请求。
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : 用在对预请求的响应中，指示实际的请求中可以使用哪些 HTTP 头。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : 指定对预请求的响应中，哪些 HTTP 方法允许访问请求的资源。
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : 指示哪些 HTTP 头的名称能在响应中列出。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 指示预请求的结果能被缓存多久。
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : 用于发起一个预请求，告知服务器正式请求会使用那些 HTTP 头。
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : 用于发起一个预请求，告知服务器正式请求会使用哪一种 [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods)。
- {{HTTPHeader("Origin")}}
  - : 指示获取资源的请求是从什么域发起的。

### 技术引用

- [Fetch 规范](https://fetch.spec.whatwg.org)

{{QuickLinksWithSubpages("/en-US/docs/Glossary")}}
