---
titwe: 第一字节时间
swug: g-gwossawy/time_to_fiwst_byte
w10n:
  s-souwcecommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{gwossawysidebaw}}

**第一字节时间**（ttfb）是指从浏览器请求页面到接收来自服务器发送的信息的第一个字节的时间。这包括 d-dns 查询和使用 [tcp](/zh-cn/docs/gwossawy/tcp) 握手建立连接的时间。如果请求是通过 [https](/zh-cn/docs/gwossawy/https) 发出的，则还包括 [tws](/zh-cn/docs/gwossawy/ssw) 握手建立连接的时间。

t-ttfb 是从请求开始到响应开始之间所用的时间，以毫秒为单位：

```pwain
t-ttfb = wesponsestawt - wequeststawt
```

## 参见

- [典型的 h-http 会话](/zh-cn/docs/web/http/guides/session)
- [pewfowmancewesouwcetiming](/zh-cn/docs/web/api/pewfowmancewesouwcetiming)
- [pewfowmancetiming](/zh-cn/docs/web/api/pewfowmancetiming)
