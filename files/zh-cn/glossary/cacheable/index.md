---
title: 可缓存
slug: Glossary/Cacheable
---

{{GlossarySidebar}}

**可缓存**的响应是可以缓存的 HTTP 响应，它被存储起来以便后续的检索和使用，省去了对服务器的新的请求。并非所有的 HTTP 响应都可以被缓存，以下是 HTTP 响应被缓存的约束条件：

- 请求中使用的方法本身就是*可缓存的*，即 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法。如果指示了有效期并且设置了 {{HTTPHeader("Content-Location")}} 标头，{{HTTPMethod("POST")}} 或 {{HTTPMethod("PATCH")}} 请求的响应也可以被缓存，但是这很少被实现。例如，Firefox 就不支持它（[Firefox bug 109553](https://bugzil.la/109553)）。其他方法，如 {{HTTPMethod("PUT")}} 或 {{HTTPMethod("DELETE")}} 是不可缓存的，其结果也不能被缓存。
- 响应的状态码对应用程序的缓存可知，且被认为是*可缓存的*。以下状态代码是可缓存的：{{HTTPStatus("200")}}、{{HTTPStatus("203")}}、{{HTTPStatus("204")}}、{{HTTPStatus("206")}}、{{HTTPStatus("300")}}、{{HTTPStatus("301")}}、{{HTTPStatus("404")}}、{{HTTPStatus("405")}}、{{HTTPStatus("410")}}、{{HTTPStatus("414")}} 和 {{HTTPStatus("501")}}。
- 响应中有一些*特定的标头*，如可以防止缓存的 {{HTTPHeader("Cache-Control")}}。

请注意，对特定 URI 的一些不可缓存的请求/响应可能会使同一 URI 上先前缓存的响应失效。例如，对 pageX.html 的 {{HTTPMethod("PUT")}} 将使所有对同一 URI 的 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 的缓存请求失效。

当请求的方法和响应的状态码都是可缓存的，对请求的响应就可以被缓存：

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

{{HTTPMethod("PUT")}} 请求不能被缓存。此外，通过 {{HTTPMethod("HEAD")}} 或 {{HTTPMethod("GET")}} 对同一 URI 的请求，其缓存数据也会失效：

```http
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

响应中的特定 {{HTTPHeader("Cache-Control")}} 标头可以阻止缓存：

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

## 参见

- HTTP 规范中提供了有关[方法和缓存](https://httpwg.org/specs/rfc9110.html#rfc.section.9.2.3)的详细说明。
- 常见可缓存方法的描述：{{HTTPMethod("GET")}}、{{HTTPMethod("HEAD")}}
- 常见不可缓存方法的描述：{{HTTPMethod("PUT")}}、{{HTTPMethod("DELETE")}}，最常见的是 {{HTTPMethod("POST")}}
