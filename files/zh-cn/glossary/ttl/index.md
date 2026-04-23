---
title: 存活时间
slug: Glossary/TTL
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

存活时间（TTL）要么指代网络中包的生命周期，要么指的是缓存数据的过期时间。

## 网络

在网络中，嵌入到包中的 TTL 通常定义为包在被丢弃以前的跳数或到期时间戳。它提供了一种避免网络拥塞的方法，释放在网络中漫游时间过长的包。

## 缓存

在缓存的上下文中，TTL（作为一个无符号 32 位整数）作为 {{Glossary("Response header", "HTTP 响应标头")}}或 {{Glossary("DNS")}} 查询的一部分，指示请求者可以缓存资源的时间（以秒为单位）。

## 参见

- 维基百科上的 [TTL](https://zh.wikipedia.org/wiki/存活時間)
- IETF 上的 [RFC2181](https://datatracker.ietf.org/doc/html/rfc2181#section-8)
- IETF 上的 [RFC1035](https://datatracker.ietf.org/doc/html/rfc1035)
