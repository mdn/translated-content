---
title: 安全（HTTP 方法）
slug: Glossary/Safe/HTTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

如果说一个 HTTP 方法是`安全`的，是指这是个不会修改服务器的数据的方法。也就是说，这是一个对服务器只读操作的方法。这些方法是安全的：{{HTTPMethod("GET")}}，{{HTTPMethod("HEAD")}} 和 {{HTTPMethod("OPTIONS")}}。所有安全的方法都是{{glossary("idempotent", "幂等")}}的，但并非所有幂等方法都是安全的，例如，{{HTTPMethod("PUT")}} 和 {{HTTPMethod("DELETE")}} 都是幂等的，但不是安全的。

就算方法具有只读的语义，服务器也能更改它自己的数据，比如：记录这次请求的日志或者数据分析。安不安全的定义是这个方法需不需要服务器修改数据。客户端不需要服务端修改数据，也就不会给服务端造成不必要的负担。浏览器调用安全的方法不用考虑会给服务端造成什么危害，这样，服务端就能允许客户端预加载资源。网络爬虫也是依赖于安全的 HTTP 方法。

安全的方法并不意味着只是对服务端的静态文件的请求，服务端可以在请求的时候即时生成资源返回，只要生成资源的脚本保证是安全的即可：也就是说生成资源的时候没有额外的影响。就像在一个电商网站添加删除购物车里的物品一样。

服务端有正确响应安全请求动作的义务，但是像 Apache、nginx 和 IIS，并没有关于此项的强制规定。再次强调，任何应用都不应让 {{HTTPMethod("GET")}} 请求修改服务端的状态（数据）。

安全的请求，不会改变服务端的状态（数据）：

```http
GET /pageX.html HTTP/1.1
```

非安全的请求方式，可能会引起服务端状态的改变：

```http
POST /pageX.html HTTP/1.1
```

一个幂等（idempotent）但是不安全的方法：

```http
DELETE /idX/delete HTTP/1.1
```

## 参见

- HTTP 规范中的[安全](https://httpwg.org/specs/rfc9110.html#safe.methods)定义。
- 安全方法的详细解释：{{HTTPMethod("GET")}}、{{HTTPMethod("HEAD")}}、{{HTTPMethod("OPTIONS")}}
- 非安全方法的详细解释：{{HTTPMethod("PUT")}}、{{HTTPMethod("DELETE")}}、{{HTTPMethod("POST")}}
