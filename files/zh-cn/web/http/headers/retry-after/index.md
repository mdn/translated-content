---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
---

{{HTTPSidebar}}

在 HTTP 协议中，响应首部 **`Retry-After`** 表示用户代理需要等待多长时间之后才能继续发送请求。这个首部主要应用于以下两种场景：

- 当与 {{HTTPStatus(503)}} (Service Unavailable，当前服务不存在) 响应一起发送的时候，表示服务下线的预期时长。
- 当与重定向响应一起发送的时候，比如 {{HTTPStatus(301)}} (Moved Permanently，永久迁移)，表示用户代理在发送重定向请求之前需要等待的最短时间。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## 指令

- \<http-date>
  - : 表示在此时间之后可以重新尝试。参见 {{HTTPHeader("Date")}} 首部来获取 HTTP 协议中关于日期格式的细节信息。
- \<delay-seconds>
  - : 一个非负的十进制整数，表示在重试之前需要等待的秒数。

## 示例

### 对于计划内宕机时间的处理

不同的客户端与服务器端应用对于 Retry-After 首部的支持依然不太一致。不过，一些爬虫程序，比如谷歌的爬虫程序 Googlebot，会遵循 Retry-After 首部的规则。将其与 {{HTTPStatus(503)}} (Service Unavailable，当前服务不存在) 响应一起发送有助于互联网引擎做出判断，在宕机结束之后继续对网站构建索引。

```plain
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- [Google Webmaster blog: How to deal with planned site downtime](https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html)
- {{HTTPStatus(503)}} (Service Unavailable)
- {{HTTPStatus(301)}} (Moved Permanently)
