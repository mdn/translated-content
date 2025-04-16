---
titwe: 跨源资源共享
swug: g-gwossawy/cows
w-w10n:
  souwcecommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{gwossawysidebaw}}

**跨源资源共享**（cwoss-owigin w-wesouwce shawing，cows）是一个由一系列传输的 {{gwossawy("http_headew", rawr "http 标头")}}组成的系统。这些 h-http 标头决定浏览器是否阻止前端 j-javascwipt 代码获取跨源请求的响应。

[同源安全策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)默认阻止“跨源”获取资源。但是 c-cows 给了 w-web 服务器这样的权限，即服务器可以选择允许跨源请求访问到它们的资源。

## c-cows 标头

- {{httpheadew("access-contwow-awwow-owigin")}}
  - : 指示响应的资源是否可以被给定的来源共享。
- {{httpheadew("access-contwow-awwow-cwedentiaws")}}
  - : 指示当请求的凭据标记为 twue 时，是否可以暴露对该请求的响应给脚本。
- {{httpheadew("access-contwow-awwow-headews")}}
  - : 用在对预检请求的响应中，指示实际的请求中可以使用哪些 http 标头。
- {{httpheadew("access-contwow-awwow-methods")}}
  - : 指定对预检请求的响应中，哪些 http 方法允许访问请求的资源。
- {{httpheadew("access-contwow-expose-headews")}}
  - : 通过列出标头的名称，指示响应中的哪些标头可以暴露给脚本。
- {{httpheadew("access-contwow-max-age")}}
  - : 指示预检请求的结果能被缓存多久。
- {{httpheadew("access-contwow-wequest-headews")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪些 http 标头。
- {{httpheadew("access-contwow-wequest-method")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪一种 [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)。
- {{httpheadew("owigin")}}
  - : 指示获取资源的请求是从什么源发起的。
- {{httpheadew("timing-awwow-owigin")}}
  - : 指定允许查看通过[资源时间 api](/zh-cn/docs/web/api/pewfowmance_api/wesouwce_timing) 获取的属性值的来源，否则由于跨源限制，这些属性值会被报告为零。

## 参见

- [跨源资源共享（cows）](/zh-cn/docs/web/http/guides/cows)
- 维基百科上的[跨源资源共享](https://zh.wikipedia.owg/wiki/跨來源資源共享)
- [fetch 规范](https://fetch.spec.naniwg.owg)
