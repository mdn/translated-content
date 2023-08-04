---
title: Vary
slug: Web/HTTP/Headers/Vary
---

{{HTTPSidebar}}

**`Vary`** 是一个 HTTP 响应头部信息，它决定了对于未来的一个请求头，应该用一个缓存的回复 (response) 还是向源服务器请求一个新的回复。它被服务器用来表明在 [content negotiation](/zh-CN/docs/Web/HTTP/Content_negotiation) algorithm（内容协商算法）中选择一个资源代表的时候应该使用哪些头部信息（headers）.

在响应状态码为 {{HTTPStatus("304")}} `Not Modified` 的响应中，也要设置 Vary 首部，而且要与相应的 {{HTTPStatus("200")}} `OK` 响应设置得一模一样。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Vary: *
Vary: <header-name>, <header-name>, ...
```

## 说明

- \*
  - : 所有的请求都被视为唯一并且非缓存的，使用{{HTTPHeader("Cache-Control")}}`: no-store`,来实现则更适用，这样用于说明不存储该对象更加清晰。
- \<header-name>
  - : 逗号分隔的一系列 http 头部名称，用于确定缓存是否可用。

## 例子

### 动态服务

`哪种情况下使用 Vary: 对于 User-Agent` 头部信息，例如你提供给移动端的内容是不同的，可用防止你客户端误使用了用于桌面端的缓存。并可帮助 Google 和其他搜索引擎来发现你的移动端版本的页面，同时告知他们不需要[Cloaking](https://en.wikipedia.org/wiki/Cloaking)。

```plain
Vary: User-Agent
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多关于浏览器兼容性：

- [Vary with care – Vary header problems in IE6-9](https://blogs.msdn.microsoft.com/ieinternals/2009/06/17/vary-with-care/)

## 更多

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("User-Agent")}}
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)
