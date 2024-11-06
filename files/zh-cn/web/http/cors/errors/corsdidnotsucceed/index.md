---
title: 原因：CORS request did not succeed
slug: Web/HTTP/CORS/Errors/CORSDidNotSucceed
---

{{HTTPSidebar}}

## 原因

```plain
原因：CORS request did not succeed
```

## 哪里错了？

使用 CORS 的 {{Glossary("HTTP")}} 请求失败，因为 HTTP 连接在网络或协议级别失败。该错误与 CORS 没有直接关系，而是某种基本的网络错误。

很多情况下，它是某个浏览器插件（比如广告拦截或隐私保护插件）阻止了请求而引起的。

其他可能包括的原因：

- 尝试访问拥有无效凭证的 `https` 资源将导致此错误。
- 尝试从 `https` 源页面访问 `http` 资源将也会导致此错误。
- 从 Firefox 68 开始，`https` 页面不允许去访问 `http://localhost`，尽管这可能随着 [Bug 1488740](https://bugzil.la/1488740) 而改变。
- 服务器不能响应真实的请求（即使它响应了{{Glossary("Preflight request","预检请求")}}）。一种情况是正在开发的 HTTP 服务器发生异常停止，而且没有返回任何数据。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
