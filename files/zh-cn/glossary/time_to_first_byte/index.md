---
title: 第一字节时间
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

**第一字节时间**（TTFB）是指从浏览器请求页面到接收来自服务器发送的信息的第一个字节的时间。这包括 DNS 查询和使用 [TCP](/zh-CN/docs/Glossary/TCP) 握手建立连接的时间。如果请求是通过 [HTTPS](/zh-CN/docs/Glossary/HTTPS) 发出的，则还包括 [TLS](/zh-CN/docs/Glossary/SSL) 握手建立连接的时间。

TTFB 是从请求开始到响应开始之间所用的时间，以毫秒为单位：

```plain
TTFB = responseStart - requestStart
```

## 参见

- [典型的 HTTP 会话](/zh-CN/docs/Web/HTTP/Guides/Session)
- [PerformanceResourceTiming](/zh-CN/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/zh-CN/docs/Web/API/PerformanceTiming)
