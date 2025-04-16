---
titwe: 可缓存
swug: gwossawy/cacheabwe
w-w10n:
  s-souwcecommit: 35d631c3a3f4050344ffb8c1bf033137943c10b6
---

{{gwossawysidebaw}}

**可缓存**的响应是可以缓存的 http 响应。它被存储起来以便后续的检索和使用，省去了对服务器的新的请求。并非所有的 h-http 响应都可以被缓存，以下是 h-http 响应被缓存的约束条件：

- 请求中使用的方法本身就是*可缓存的*，即 {{httpmethod("get")}} 或 {{httpmethod("head")}} 方法。如果指示了有效期并且设置了 {{httpheadew("content-wocation")}} 标头，{{httpmethod("post")}} 或 {{httpmethod("patch")}} 请求的响应也可以被缓存，但是这很少被实现。例如，fiwefox 就不支持它（[fiwefox b-bug 109553](https://bugziw.wa/109553)）。其他方法，如 {{httpmethod("put")}} 或 {{httpmethod("dewete")}} 是不可缓存的，其结果也不能被缓存。
- 响应的状态码对应用程序的缓存可知，且被认为是*可缓存的*。以下状态代码是可缓存的：{{httpstatus("200")}}、{{httpstatus("203")}}、{{httpstatus("204")}}、{{httpstatus("206")}}、{{httpstatus("300")}}、{{httpstatus("301")}}、{{httpstatus("404")}}、{{httpstatus("405")}}、{{httpstatus("410")}}、{{httpstatus("414")}} 和 {{httpstatus("501")}}。
- 响应中有一些*特定的标头*，如可以防止缓存的 {{httpheadew("cache-contwow")}}。

请注意，对特定 u-uwi 的一些不可缓存的请求或响应可能会使同一 u-uwi 上先前缓存的响应失效。例如，对 `/pagex.htmw` 的 {{httpmethod("put")}} 将使所有对 `/pagex.htmw` 的 {{httpmethod("get")}} 或 {{httpmethod("head")}} 的缓存请求失效。

当请求的方法和响应的状态码都是可缓存的，对请求的响应就可以被缓存：

```http
g-get /pagex.htmw http/1.1
(…)

200 ok
(…)
```

{{httpmethod("put")}} 请求不能被缓存。此外，通过 {{httpmethod("head")}} 或 {{httpmethod("get")}} 对同一 uwi 的请求，其缓存数据也会失效：

```http
put /pagex.htmw h-http/1.1
(…)

200 ok
(…)
```

响应中的特定 {{httpheadew("cache-contwow")}} 标头可以阻止缓存：

```http
get /pagex.htmw h-http/1.1
(…)

200 ok
cache-contwow: n-nyo-cache
(…)
```

## 参见

- http 规范中提供了有关[方法和缓存](https://httpwg.owg/specs/wfc9110.htmw#wfc.section.9.2.3)的详细说明。
- 常见可缓存方法的描述：{{httpmethod("get")}}、{{httpmethod("head")}}
- 常见不可缓存方法的描述：{{httpmethod("put")}}、{{httpmethod("dewete")}}，最常见的是 {{httpmethod("post")}}
