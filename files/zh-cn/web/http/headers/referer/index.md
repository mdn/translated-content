---
title: Referer
slug: Web/HTTP/Headers/Referer
---

{{HTTPSidebar}}

**`Referer`** 请求头包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。服务端一般使用 `Referer` 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。

需要注意的是 referer 实际上是 "referrer" 误拼写。参见 [HTTP referer on Wikipedia](https://zh.wikipedia.org/wiki/HTTP_referer)（HTTP referer 在维基百科上的条目）来获取更详细的信息。

> **警告：** `Referer` 请求头可能暴露用户的浏览历史，涉及到用户的隐私问题。

在以下两种情况下，`Referer` 不会被发送：

- 来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI；
- 当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```plain
Referer: <url>
```

## 指令

- \<url>
  - : 当前页面被链接而至的前一页面的绝对路径或者相对路径。不包含 URL fragments (例如 "#section") 和 userinfo (例如 "https\://username:password\@example.com/foo/bar/" 中的 "username:password" )。

## 示例

```plain
Referer: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- [HTTP referer on Wikipedia](https://zh.wikipedia.org/wiki/HTTP_referer)
- {{HTTPHeader("Referrer-Policy")}}
