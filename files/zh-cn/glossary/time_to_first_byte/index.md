---
title: 第一字节时间
slug: Glossary/Time_to_first_byte
---

{{GlossarySidebar}}

**第一字节时间**（TTFB）是指从浏览器请求页面到从浏览器接收来自服务器发送的信息的第一个字节的时间。这一次包括 DNS 查找和使用（三次）[TCP](/zh-CN/docs/Glossary/TCP)握手和[SSL](/zh-CN/docs/Glossary/SSL)握手建立连接（如果请求是通过[https](/zh-CN/docs/Glossary/https)发出的）。

TTFB 是从请求开始到响应开始之间所用的时间，以毫秒为单位：

```
TTFB = responseStart - requestStart
```

## See Also

- [A typical HTTP session](/zh-CN/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/zh-CN/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/zh-CN/docs/Web/API/PerformanceTiming)
