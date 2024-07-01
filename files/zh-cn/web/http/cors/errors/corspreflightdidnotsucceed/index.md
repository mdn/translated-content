---
title: 原因：CORS preflight channel did not succeed
slug: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
---

{{HTTPSidebar}}

## 原因

```plain
原因：CORS preflight channel did not succeed
```

## 哪里错了？

{{Glossary("CORS")}} 请求需要预校验，但是不能执行预校验。可能是由于下列几种原因导致：

- 一个跨站请求在先前已经进行过预校验，进行重复的校验是不被允许的。请确保你的代码每次连接只进行一次预校验。
- 预校验请求碰到了通常情况下不应该发生的网络问题。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
