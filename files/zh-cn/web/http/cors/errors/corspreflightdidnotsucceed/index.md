---
title: 'Reason: CORS preflight channel did not succeed'
slug: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
---

{{HTTPSidebar}}

## Reason

```plain
Reason: CORS preflight channel did not succeed
```

## What went wrong?

{{Glossary("CORS")}} 请求需要预校验，但是预校验请求失败。可能是由于下列几种原因导致：

- 一个跨域请求在先前已经进行过预校验，进行重复的校验是不被允许的。请确保你的代码每次连接只进行一次预校验。
- 预校验请求碰到了通常情况下不应该发生的网络问题。

## See also

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS 简介](/zh-CN/docs/Web/HTTP/CORS)
