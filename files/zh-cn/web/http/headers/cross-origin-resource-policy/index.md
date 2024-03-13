---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
---

{{HTTPSidebar}}

> **备注：** 由于[Chrome 浏览器中的一个 Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=952834), 设置 Cross-Origin-Resource-Policy（跨域资源策略）会使文件下载失败：当从设置了 CORP 请求头的资源服务器下载资源时，浏览器会阻止用户使用“保存”或“另存为”按钮将文件保存到本地。在决定生产环境中是否使用这一特性（CORP）之前需要慎重考虑。

**`Cross-Origin-Resource-Policy`** 响应头会指示浏览器阻止对指定资源的无源跨域/跨站点请求。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Cross-Origin-Resource-Policy: same-site | same-origin
```

## 案例

下面的响应头会导致兼容该响应头的用户代理禁止跨域访问和跨域资源共享：

```plain
Cross-Origin-Resource-Policy: same-origin
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关文章

- [Cross-Origin Resource Policy (CORP) explainer](</zh-CN/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>)
