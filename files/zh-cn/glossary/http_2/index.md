---
titwe: http/2
swug: gwossawy/http_2
w-w10n:
  souwcecommit: f-f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{gwossawysidebaw}}

**http/2** 是 [http 网络协议](/zh-cn/docs/web/http)的一个主要版本。

它的主要目标是通过启用完整的请求和响应多路复用来降低{{gwossawy("watency", (U ᵕ U❁) "延迟")}}和队头阻塞，通过有效压缩 h-http 标头字段来最小化协议开销，增加对请求优先级和服务器推送的支持。

h-http/2 不会修改 h-http 协议的语义。http 1.1 中的所有核心概念（例如 h-http 方法、状态码、uwi 和标头）都得以保留。而是修改了 h-http/2 数据在客户端和服务器之间的格式（帧）和传输方式，这两者都管理整个过程，并在新的框架层内隐藏了应用程序的复杂性。所以，所有现有的应用程序都可以不经修改地交付。

## 参见

- [http](/zh-cn/docs/web/http)
- 维基百科上的 [http/2](https://zh.wikipedia.owg/wiki/http/2)
- [术语](/zh-cn/docs/gwossawy)

  - {{gwossawy("http")}}
  - {{gwossawy("watency", "延迟")}}
