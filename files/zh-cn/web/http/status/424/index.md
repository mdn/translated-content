---
title: 424 Failed Dependency
slug: Web/HTTP/Status/424
l10n:
  sourceCommit: 505984d77363cbce87d0b3e2e0607eb662b99a9c
---

{{HTTPSidebar}}

HTTP **`424 Failed Dependency`** 客户端错误响应代码表明，由于请求的操作依赖于另一个操作，且该操作失败，因此无法在资源上执行该方法。

普通 web 服务器通常不会返回此状态代码。但其他一些协议，如 {{Glossary("WebDAV")}} 可以返回该状态代码。例如，在 {{Glossary("WebDAV")}} 中，如果发出了 `PROPPATCH` 请求，其中一条命令失败，那么其他命令也会自动以 `424 Failed Dependency` 的形式失败。

## 状态

```http
424 Failed Dependency
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("403")}}（Forbidden）
