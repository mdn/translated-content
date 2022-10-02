---
title: TRACE
slug: Web/HTTP/Methods/TRACE
---

{{HTTPSidebar}}

**HTTP `TRACE` 方法** 实现沿通向目标资源的路径的消息环回（loop-back）测试，提供了一种实用的 debug 机制。

请求的最终接收者应当原样反射（reflect）它接收到的消息，除了以下字段部分，作为一个{{httpheader("Content-Type")}} 为 `message/http` 的 200（OK）响应的消息的主体（body）返回给客户端。

最终接收者是指初始（origin）服务器，或者第一个接收到 {{httpheader("Max-Forwards")}} 值为 0 的请求的服务器。

| 有主体（body）的请求（request）          | 否  |
| ---------------------------------------- | --- |
| 包含主体（body）的成功的响应（response） | 否  |
| {{Glossary("Safe")}}             | 否  |
| {{Glossary("Idempotent")}}     | 是  |
| {{Glossary("Cacheable")}}         | 否  |
| 允许用于 HTML 表单（form）               | 否  |

## 语法

```plain
TRACE /index.html
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [HTTP methods](/zh-CN/docs/Web/HTTP/Methods)
