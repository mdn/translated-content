---
title: 队头阻塞
slug: Glossary/Head_of_line_blocking
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

在计算机网络中，**队头阻塞**（_HOL 阻塞_，Head-of-line blocking）指的是一种性能瓶颈：当队列中的第一个数据包被阻塞时，后续数据包即使可以被处理，也会被一同阻塞。

在 HTTP/1.1 中，如果客户端向{{glossary("server", "服务器")}}发送多个请求而不等待响应，服务器会按顺序处理这些请求。如果第一个请求的响应被延迟，后续请求的响应也会被延迟。HTTP/2 通过请求多路复用解决了应用层的队头阻塞，但在传输层（{{glossary("TCP")}}）仍然存在。

## 参见

- 相关术语：
  - {{glossary("HTTP")}}、{{glossary("HTTP 2", "HTTP/2")}}
  - {{glossary("TCP")}}
- [页面渲染流程：浏览器如何工作](/zh-CN/docs/Web/Performance/Guides/How_browsers_work)
- 维基百科上的[队头阻塞](https://zh.wikipedia.org/wiki/队头阻塞)
